/**
 * @file Market.js
 * @description Handles market-related operations such as fetching orders, inventory types, market groups, and more.
 * @requires eve_swagger_interface
 * @requires ./Order
 * @requires ./InventoryType
 * @requires ../../inventory/InventoryGroup
 * @requires ../../inventory/InventoryCategory
 * @requires ./MarketGroup
 */

const ESI = require('eve_swagger_interface');
const Order = require('./Order');
const InventoryType = require('./InventoryType');
const InventoryGroup = require('../../inventory/InventoryGroup');
const InventoryCategory = require('../../inventory/InventoryCategory');
const MarketGroup = require('./MarketGroup');

/**
 * @class Market
 * @classdesc Wraps the ESI Market API to fetch orders, inventory types, groups, categories, and market groups.
 */
export default class Market {
  constructor() {
    /** @private */ this.api = new ESI.MarketApi();
    /** @private */ this.universe = new ESI.UniverseApi();

    /** @type {Map<number, Order[]>} regionId/structureId → Orders */
    this.orders = new Map();

    /** @type {Map<number, InventoryType>} */
    this.types = new Map();

    /** @type {Map<number, InventoryGroup>} */
    this.groups = new Map();

    /** @type {Map<number, InventoryCategory>} */
    this.categories = new Map();

    /** @type {Map<number, MarketGroup>} */
    this.marketGroups = new Map();
  }

  /**
   * Load orders for a region.
   * @param {number} regionId
   * @param {number|null} [typeId=null] - Optional inventory type ID filter
   * @returns {Promise<Order[]>}
   */
  async loadOrdersByRegion(regionId, typeId = null) {
    const orders = [];
    let page = 1;
    let done = false;

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

  /**
   * Load market orders from a specific structure.
   * @param {number} structureId
   * @param {object} auth - Auth token object with accessToken and ensureValidToken()
   * @returns {Promise<Order[]>}
   */
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

  /**
   * Load inventory type data.
   * @param {number} typeId
   * @returns {Promise<InventoryType>}
   */
  async loadType(typeId) {
    if (this.types.has(typeId)) return this.types.get(typeId);

    const data = await this.universe.getUniverseTypesTypeId(typeId, {
      datasource: 'tranquility'
    });

    const type = new InventoryType(data);
    this.types.set(typeId, type);
    return type;
  }

  /**
   * Load inventory group data.
   * @param {number} groupId
   * @returns {Promise<InventoryGroup>}
   */
  async loadGroup(groupId) {
    if (this.groups.has(groupId)) return this.groups.get(groupId);

    const data = await this.universe.getUniverseGroupsGroupId(groupId, {
      datasource: 'tranquility'
    });

    const group = new InventoryGroup(data);
    this.groups.set(groupId, group);
    return group;
  }

  /**
   * Load inventory category data.
   * @param {number} categoryId
   * @returns {Promise<InventoryCategory>}
   */
  async loadCategory(categoryId) {
    if (this.categories.has(categoryId)) return this.categories.get(categoryId);

    const data = await this.universe.getUniverseCategoriesCategoryId(categoryId, {
      datasource: 'tranquility'
    });

    const category = new InventoryCategory(data);
    this.categories.set(categoryId, category);
    return category;
  }

  /**
   * Load a market group and its metadata.
   * @param {number} marketGroupId
   * @returns {Promise<MarketGroup>}
   */
  async loadMarketGroup(marketGroupId) {
    if (this.marketGroups.has(marketGroupId)) return this.marketGroups.get(marketGroupId);

    const data = await this.api.getMarketsGroupsMarketGroupId(marketGroupId, {
      datasource: 'tranquility'
    });

    const group = new MarketGroup(data);
    this.marketGroups.set(marketGroupId, group);
    return group;
  }

  /**
   * Serialize all loaded market data.
   * @returns {object}
   */
  toJSON() {
    return {
      orders: Object.fromEntries([...this.orders].map(([k, v]) => [k, v.map(o => o.toJSON())])),
      types: Object.fromEntries([...this.types].map(([k, v]) => [k, v.toJSON?.() ?? v])),
      groups: Object.fromEntries([...this.groups].map(([k, v]) => [k, v.toJSON?.() ?? v])),
      categories: Object.fromEntries([...this.categories].map(([k, v]) => [k, v.toJSON?.() ?? v])),
      marketGroups: Object.fromEntries([...this.marketGroups].map(([k, v]) => [k, v.toJSON?.() ?? v]))
    };
  }
}
