import ESIClient from "../ESIClient.js";
import Region from "./Region.js";
const universeApi = new ESIClient().universe;
export default class Eden {

  constructor() {
    this.regions = [];

    this.loaded = false;
  }
  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
    
    const { data } = await universeApi.getUniverseRegions();
    const regionIds = Array.isArray(data) ? data : [];

    for (let i = 0; i < regionIds.length; i++) {
      const region = new Region(regionIds[i]);
      this.regions.push(region);
      if (recursions <= 0) return;
      await region.load(recursions - 1);
    }

    this.loaded = true;
  }
}
