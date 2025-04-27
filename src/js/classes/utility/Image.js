import ESIClient from "./ESIClient.js";
import InventoryType from "../inventory/InventoryType.js";
import InventoryGroup from "../inventory/InventoryGroup.js";
import InventoryCategory from "../inventory/InventoryCategory.js";

const { universeApi } = new ESIClient();

export default class Image {
  constructor(id) {
    this.id = typeof id === "object" && id?.id ? id.id : id;
    this.variants = {};
    this.loaded = false; 
    this.ready = this.load();
  }
  async load(query = "") {
    const base = "https://images.evetech.net";

    if (["alliance", "corporation", "faction", "character", "type"].includes(this.category)) {
      const fallback = {
        alliance: `alliances/${this.id}/logo`,
        corporation: `corporations/${this.id}/logo`,
        faction: `corporations/${this.id}/logo`,
        character: `characters/${this.id}/portrait`,
        type: `types/${this.id}/icon`,
      };
      const path = fallback[this.category];
      if (path) {
        this.variants[this.category] = `${base}/${path}${query}`;
      }
      this.loaded = true;
      return this;
    }

    // No category given — resolve it dynamically
    const { data } = await universeApi.postUniverseNames(JSON.stringify([this.id]));
    const nameData = data?.[0];

    if (nameData?.category === "inventory_type") {
      const type = await new InventoryType(this.id);
      const group = await new InventoryGroup(type.group_id);
      const category = await new InventoryCategory(group.category_id);

      const map = {
        6: ["render", "icon"],  // Ships
        34: ["relic"],          // Ancient relics
        9: ["bp", "bpc"],        // Blueprints
      };

      const variants = map[categoryId] || ["icon"];
      variants.forEach(v => {
        this.variants[v] = `${base}/types/${this.id}/${v}${query}`;
      });
    } else {
      const fallback = {
        alliance: `alliances/${this.id}/logo`,
        corporation: `corporations/${this.id}/logo`,
        faction: `corporations/${this.id}/logo`,
        character: `characters/${this.id}/portrait`,
      };
      const path = fallback[nameData?.category];
      if (path) {
        this.variants[nameData.category] = `${base}/${path}${query}`;
      }
    }

    this.loaded = true;
    return this;
  }

  get(variant = "icon") {
    return this.variants[variant] ?? Object.values(this.variants)[0] ?? null;
  }
}
