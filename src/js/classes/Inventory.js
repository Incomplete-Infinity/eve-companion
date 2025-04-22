import { Api } from "../../../public/esi-client.js";
import InventoryCategory from "./InventoryCategory.js";
const universeApi = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
}).universe;
export default class Inventory {
  constructor() {
    this.categories = [];
  }
  async load(recursions = 1, options = {}) {
    if (recursions <= 0) return;
    const { data } = await universeApi.getUniverseCategories();
    this.categories = data.map((id) => new InventoryCategory(id));
    const loaded = await Promise.all(
      this.categories.map(async (c) => {
        await c.load(recursions - 1, options);
        return c;
      })
    );

    this.categories = loaded.filter(
      (c) => !options.skipUnpublished || c.published
    );
  }
}
