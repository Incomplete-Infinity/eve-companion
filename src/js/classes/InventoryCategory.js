import ESIClient from './ESIClient.js';
import InventoryGroup from './InventoryGroup.js';

const universeApi = new ESIClient().universe;

export default class InventoryCategory {
  static cache = new Map();
  constructor(id) {
    console.log(`starting constructor for InventoryCategory(${id}).`);
    if (InventoryCategory.cache.has(id)) return InventoryCategory.cache.get(id);

    this.id = typeof id === "object" && id?.id ? id.id : id;
    this.name = '';
    this.groups = [];
    this.loaded = false;
    InventoryCategory.cache.set(id, this);
  }

  async load(recursions = 1, options = { skipUnpublished: true }) {
    if (this.loaded) return;
    const { data } = await universeApi.getUniverseCategoriesCategoryId(this.id);
    this.name = data.name;
    this.published = data.published;
    if ((!data.groups) || (recursions <= 0) || (options.skipUnpublished && !this.published)) return null;
  
    const groupInstances = data.groups.map(id => new InventoryGroup(id));
    this.groups = await Promise.all(groupInstances.map(g => g.load(recursions - 1, options)));
    this.loaded = true;
    
  }
}