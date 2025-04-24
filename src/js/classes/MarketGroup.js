import ESIClient from './ESIClient.js';
import InventoryType from './InventoryType.js';

const universeApi = new ESIClient().universe;

export default class MarketGroup {

  constructor(id) {
    this.id = typeof id === "object" && id?.id ? id.id : id;
    this.name = '';
    this.description = '';
    this.parent_group_id = null;
    this.types = [];
    this.children = [];

    this.loaded = false;
  }

  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;

    const { data } = await universeApi.getMarketsGroupsMarketGroupId(this.id);
    this.name = data.name;
    this.description = data.description;
    this.parent_group_id = data.parent_group_id;

    if (recursions <= 0) return;

    if (data.types) {
      for (const typeId of data.types) {
        const type = await new InventoryType(typeId).load();
        this.types.push(type);
      }
    }

    if (data.children) {
      for (const childId of data.children) {
        const childGroup = new MarketGroup(childId);
        await childGroup.load(recursions - 1, options);
        this.children.push(childGroup);
      }
    }

    this.loaded = true;
  }
}