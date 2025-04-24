import ESIClient from "./ESIClient.js";
import Inventory from "./Inventory.js";
import Eden from "./Eden.js";
import Image from "./Image.js";

export default class Universe {
  static esiClient = new ESIClient();
  static image = Image;
  static inventory = new Inventory();
  static map = new Eden();
  constructor() {
    this.loaded = false;
    this.ready = this.loadAll();
  }
  async loadAll(recursions = 1) {
    if (this.loaded || recursions <= 0) return;

    await this.inventory.load();
    await this.map.load();

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
