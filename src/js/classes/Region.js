import { Api } from "../../../public/esi-client.js";
import Constellation from "./Constellation.js";
const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Region {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.description = "";
    this.constellations = [];
  }
  async load(recursions) {
    const { data } = await universeApi.getUniverseRegionsRegionId(this.id);
    this.name = data.name;
    this.description = data.description;
    this.constellations = data.constellations.map(
      (cid) => new Constellation(cid)
    );
    if (recursions <= 0) return;
    await Promise.all(this.constellations.map((c) => c.load(recursions - 1)));
  }
}
