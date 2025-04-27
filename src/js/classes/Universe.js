import { ESIClient, Image } from "./utility/Utility.js";
import Inventory from "./inventory/Item.js";
import Eden from "./Eden.js";

class Universe {
  static esiClient = null;
  static image = null;
  static inventory = null;
  static map = null;
  constructor() {
    this.loaded = false;
    this.ready = this.load();
  }
  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
    Universe.esiClient = await new ESIClient();
    Universe.image = await Image;
    Universe.inventory = await new Inventory();
    Universe.map = await new Eden();
    await Universe.inventory.load();
    await Universe.map.load();

    this.loaded = true;
  }
  getCategory(id) {
    return this.inventory.getCategory(id);
  }

  getSystem(id) {
    return this.map.getSystem(id);
  }

  // Add more passthroughs or helpers as needed
}
export { Inventory, Eden, }
export new Universe();