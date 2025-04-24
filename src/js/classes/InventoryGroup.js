import Universe from "./Universe.js";
const { universe } = Universe.esiClient;
const { inventory } = Universe;

export default class InventoryGroup {
  constructor(id) {

    console.log(`starting constructor for InventoryGroup(${id}).`);
    if (InventoryGroup.cache.has(id)) return InventoryGroup.cache.get(id);

    this.id = typeof id === "object" && id?.id ? id.id : id;
    this.name = '';
    this.category_id = null;
    this.types = [];

    this.loaded = false;
   InventoryGroup.cache.set(id, this);
  }

  async load(recursions = 1, options = { skipUnpublished: true }) {
    if (this.loaded) return;

    const { data } = await universe.getUniverseGroupsGroupId(this.id);
    this.name = data.name;
    this.published = data.published;
    if ((!data.types) || (recursions <= 0) || (options.skipUnpublished && !this.published)) return null;
    this.category_id = data.category_id;
    const typeInstances = data.types.map(id => new InventoryType(id));
    const loaded = await Promise.allSettled(typeInstances.map(t => t.load()));
    
    this.types = loaded
    .map((res, i) => (res.status === "fulfilled" ? typeInstances[i] : null))
    .filter(t => t && (!options.skipUnpublished || t.published));
   
    loaded.forEach((res, i) => {
      if (res.status === "rejected") {
        console.warn(`Failed to load type ${typeInstances[i].id}`, res.reason);
      }
    });
      
    console.log(`Group ${this.id} loaded ${this.types.length} types`);
    if (this.types.length === 0) {
      console.warn("Types were empty for group", this);
    }

    this.loaded = true;
  }
}