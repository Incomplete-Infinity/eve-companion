import ESIClient from "../utility/ESIClient.js"; 
import InventoryCategory from "./InventoryCategory.js";
import Universe from "../Universe.js";

const universeApi = new ESIClient().universe;

export default class Inventory {
  constructor() {
    this.categories = [];
    this.loaded = false;
    this.ready = this.load();
  }

  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
    const { data } = await universeApi.getUniverseCategories();
    this.categories = data.map(id => new InventoryCategory(id));
    await Promise.all(
      this.categories.map(c => c.load(recursions - 1))
    );

    this.loaded = true;
  }

  getCategory(id) {
    return Universe.get(InventoryCategory, id);
  }
}
