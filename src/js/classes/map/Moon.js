import ESIClient from "../utility/ESIClient.js";
const universeApi = new ESIClient().universe;

export default class Moon {
  constructor(id) {
    this.id = typeof id === "object" && id?.id ? id.id : id;
    this.name = "";
    this.position = { x: 0, y: 0, z: 0 };

    this.loaded = false;
  }
  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
    const { data } = await universeApi.getUniverseMoonsMoonId(this.id);
    this.name = data.name;
    this.position = data.position;

    this.loaded = true;
  }
}
