import { Api } from "../../../public/esi-client.js";
import Region from "./Region.js";
const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Eden {
  constructor() {
    this.regions = [];
  }
  async load(recursions = 1) {
    const { data } = await universeApi.getUniverseRegions();
    const regionIds = Array.isArray(data) ? data : [];

    for (let i = 0; i < regionIds.length; i++) {
      const region = new Region(regionIds[i]);
      this.regions.push(region);
      if (recursions <= 0) return;
      await region.load(recursions - 1);
    }
  }
}
