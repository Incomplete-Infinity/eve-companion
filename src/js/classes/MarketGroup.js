import InventoryType from './InventoryType.js';
import { Api } from '../public/esi-client.js';

const universeApi = new Api({
  baseURL: 'https://esi.evetech.net/latest',
  baseApiParams: { datasource: 'tranquility' }
}).universe;

export default class MarketGroup {
  constructor(id) {
    this.id = id;
    this.name = '';
    this.description = '';
    this.parent_group_id = null;
    this.types = [];
    this.children = [];
  }

  async load(recursions = 0, options = {}) {
    const { data } = await universeApi.getMarketsGroupsMarketGroupId(this.id);
    this.name = data.name;
    this.description = data.description;
    this.parent_group_id = data.parent_group_id;

    if (recursions <= 0) return;

    if (data.types) {
      for (const typeId of data.types) {
        const type = new InventoryType(typeId);
        await type.load();
        if (options.skipUnpublished && !type.published) continue;
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
  }
}