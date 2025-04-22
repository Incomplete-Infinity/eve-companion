import { Api } from "../../../public/esi-client.js";
import Moon from "./Moon.js";
import Belt from "./Belt.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Planet {
  constructor(data) {
    this.id = data.planet_id;
    this.name = "";
    this.typeId = null;
    this.moonData = data.moons || [];
    this.moons = [];
    this.beltData = data.asteroid_belts || [];
    this.belts = [];
  }
  async load(recursions) {
    const { data } = await universeApi.getUniversePlanetsPlanetId(this.id);
    this.name = data.name || "Planet";
    this.typeId = data.type_id;
    this.moons = this.moonData.map((mid) => new Moon(mid));
    this.belts = this.beltData.map((bid) => new Belt(bid));
    if (recursions <= 0) return;
    await Promise.all([
      ...this.moons.map((m) => m.load(recursions - 1)),
      ...this.belts.map((b) => b.load(recursions - 1)),
    ]);
  }
}
