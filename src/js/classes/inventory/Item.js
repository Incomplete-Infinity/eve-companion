import { ESIClient } from "../utility/Utility.js";
import InventoryCategory from "./InventoryCategory.js";
import InventoryGroup from "./InventoryGroup.js";
import InventoryType from "./InventoryType.js";
import { DogmaAttribute, DogmaEffect } from "./Dogma.js";

const universeApi = new ESIClient().universe;
class Item {
  static loadType = (id) => new InventoryType(id);
  static loadGroup = (id) => new InventoryGroup(id);
  static loadCategory = (id) => new InventoryCategory(id);

  static loadDogmaAttribute = (id) => new DogmaAttribute(id);
  static loadDogmaEffect = (id) => new DogmaEffect(id);

  constructor() {
    this.categories = [];

    this.loaded = false;
    this.ready = this.load();
  }
  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
    const { data } = await universeApi.getUniverseCategories();
    this.categories = data.map((id) => new InventoryCategory(id));
    await Promise.all(
      this.categories.map(async (c) => {
        await c.load(recursions - 1);
        return c;
      })
    );
    this.loaded = true;
  }
}

export default Item;
