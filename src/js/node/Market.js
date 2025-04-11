const ESI = require('eve_swagger_interface');
const Order = require('./Order');
const InventoryType = require('./InventoryType');
const InventoryGroup = require('./InventoryGroup');
const InventoryCategory = require('./InventoryCategory');
const MarketGroup = require('./MarketGroup');

class Market {
  constructor() {
    this.api = new ESI.MarketApi();
    this.universe = new ESI.UniverseApi();

    this.orders = new Map();           // regionId or structureId → Order[]
    this.types = new Map();            // typeId → InventoryType
    this.groups = new Map();           // groupId → InventoryGroup
    this.categories = new Map();       // categoryId → InventoryCategory
    this.marketGroups = new Map();     // marketGroupId → MarketGroup
  }

  async loadOrdersByRegion(regionId, typeId = null) {
    const orders = [];
    let page = 1, done = false;

    while (!done) {
      const data = await this.api.getMarketsRegionIdOrders('all', regionId, {
        page,
        type_id: typeId,
        datasource: 'tranquility'
      });

      orders.push(...data.map(o => new Order(o)));
      done = data.length < 1000;
      page++;
    }

    this.orders.set(regionId, orders);
    return orders;
  }

  async loadOrdersByStructure(structureId, auth) {
    await auth.ensureValidToken();

    const data = await this.api.getMarketsStructuresStructureId(structureId, {
      datasource: 'tranquility',
      token: auth.accessToken
    });

    const orders = data.map(o => new Order(o));
    this.orders.set(structureId, orders);
    return orders;
  }

  async loadType(typeId) {
    if (this.types.has(typeId)) return this.types.get(typeId);

    const data = await this.universe.getUniverseTypesTypeId(typeId, {
      datasource: 'tranquility'
    });

    const type = new InventoryType(data);
    this.types.set(typeId, type);
    return type;
  }

  async loadGroup(groupId) {
    if (this.groups.has(groupId)) return this.groups.get(groupId);

    const data = await this.universe.getUniverseGroupsGroupId(groupId, {
      datasource: 'tranquility'
    });

    const group = new InventoryGroup(data);
    this.groups.set(groupId, group);
    return group;
  }

  async loadCategory(categoryId) {
    if (this.categories.has(categoryId)) return this.categories.get(categoryId);

    const data = await this.universe.getUniverseCategoriesCategoryId(categoryId, {
      datasource: 'tranquility'
    });

    const category = new InventoryCategory(data);
    this.categories.set(categoryId, category);
    return category;
  }

  async loadMarketGroup(marketGroupId) {
    if (this.marketGroups.has(marketGroupId)) return this.marketGroups.get(marketGroupId);

    const data = await this.api.getMarketsGroupsMarketGroupId(marketGroupId, {
      datasource: 'tranquility'
    });

    const group = new MarketGroup(data);
    this.marketGroups.set(marketGroupId, group);
    return group;
  }

  toJSON() {
    return {
      orders: Object.fromEntries([...this.orders].map(([k, v]) => [k, v.map(o => o.toJSON())])),
      types: Object.fromEntries([...this.types].map(([k, v]) => [k, v.toJSON()])),
      groups: Object.fromEntries([...this.groups].map(([k, v]) => [k, v.toJSON()])),
      categories: Object.fromEntries([...this.categories].map(([k, v]) => [k, v.toJSON()])),
      marketGroups: Object.fromEntries([...this.marketGroups].map(([k, v]) => [k, v.toJSON()]))
    };
  }
}

module.exports = Market;
/*
const Market = require('./Market');
const market = new Market();

await market.loadOrdersByRegion(10000002); // The Forge
const type = await market.loadType(34);    // Tritanium
console.log(type);
*/