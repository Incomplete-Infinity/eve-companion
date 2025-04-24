import ESIClient from "./ESIClient.js";
import Constellation from "./Constellation.js";

const universeApi = ESIClient().universe;
export default class Region {
  static constellation = Constellation;
  constructor(id) {
    this.id = id;
    this.name = "";
    this.description = "";
    this.constellations = [];

    this.loaded = false;
    this.ready = this.load();
  }
  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
    const { data } = await universeApi.getUniverseRegionsRegionId(this.id);
    this.name = data.name;
    this.description = data.description;
    this.constellations = await Promise.all(
      data.constellations.map((cid) => new Region.constellation(cid))
    );

    this.loaded = true;
  }
}
