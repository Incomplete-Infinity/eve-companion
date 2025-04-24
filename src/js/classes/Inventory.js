import ESIClient from "./ESIClient.js"; 
import InventoryCategory from "./InventoryCategory.js";
const universeApi = new ESIClient().universe;
export default class Inventory {
  static cache = new Map();
  constructor() {
    if (Inventory.cache.has(id)) return Inventory.cache.get(id);

    this.categories = [];
    this.loaded = false;
    Inventory.cache.set(id, this);
    this.load();

  }
  async load(recursions = 1, options = {}) {
    if (this.loaded) return;
    if (recursions <= 0) return;
    console.log(universeApi)
    const { data } = await universeApi.getUniverseCategories();
    this.categories = data.map((id) => new InventoryCategory(id));
    const loaded = await Promise.all(
      this.categories.map(async (c) => {
        await c.load(recursions - 1, options);
        return c;
      })
    );
    this.loaded = true;
  }
}
