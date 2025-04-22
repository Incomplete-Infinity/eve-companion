import InventoryGroup from './InventoryGroup.js';
import { Api } from '../../../public/esi-client.js';

const universeApi = new Api({
  baseURL: 'https://esi.evetech.net/latest',
  baseApiParams: { datasource: 'tranquility' }
}).universe;

export default class InventoryCategory {
  constructor(id) {
    console.log(`starting constructor for InventoryCategory(${id}).`);
    this.id = id;
    this.name = '';
    this.groups = [];
  }

  async load(recursions = 1, options = { skipUnpublished: true }) {
    const { data } = await universeApi.getUniverseCategoriesCategoryId(this.id);
    this.name = data.name;
    this.published = data.published;
    if ((!data.groups) || (recursions <= 0) || (options.skipUnpublished && !this.published)) return null;
  
    const groupInstances = data.groups.map(id => new InventoryGroup(id));
    await Promise.all(groupInstances.map(g => g.load(recursions - 1, options)));
    
    this.groups = groupInstances.filter(g => !options.skipUnpublished || g.published);
    
  }
}