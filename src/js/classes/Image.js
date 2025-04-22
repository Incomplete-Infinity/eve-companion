import { Api } from "../../../public/esi-client.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;

export default class Image {
  constructor(id) {
    this.id = id;
    this.variants = {};
  }
  static async create(id, query = "") {
    const base = "https://images.evetech.net";
    const instance = new Image(id);
  
    const { data } = await universeApi.postUniverseNames(JSON.stringify([id]));
    const nameData = data[0];
    
    if (nameData?.category === "inventory_type") {
      const { data: typeData } = await universeApi.getUniverseTypesTypeId(id);
      const { data: groupData } = await universeApi.getUniverseGroupsGroupId(typeData.group_id);
      const categoryId = groupData.category_id;
  
      const map = {
        6: ["render", "icon"],
        34: ["relic"],
        9: ["bp", "bpc"],
      };
  
      const variants = map[categoryId] || ["icon"];
      variants.forEach(v => {
        instance.variants[v] = `${base}/types/${id}/${v}${query}`;
      });
  
    } else {
      const { category } = nameData ?? {};
      const fallback = {
        alliance: `alliances/${id}/logo`,
        corporation: `corporations/${id}/logo`,
        faction: `corporations/${id}/logo`,
        character: `characters/${id}/portrait`,
      };
      const path = fallback[category];
      if (path) instance.variants[category] = `${base}/${path}${query}`;
    }

    return instance;
  }
  get(variant = "icon") {
    return this.variants[variant] ?? Object.values(this.variants)[0] ?? null;
  }
}
