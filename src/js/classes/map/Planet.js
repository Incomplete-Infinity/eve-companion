import ESIClient from "../utility/ESIClient.js";
import Moon from "./Moon.js";
import Belt from "./Belt.js";

const universeApi = new ESIClient().universe;
export default class Planet {
  static cache = new Map();
  constructor(data) {
    this.id = data.planet_id;
    this.name = "";
    this.typeId = null;
    this.moonData = data.moons || [];
    this.moons = [];
    this.beltData = data.asteroid_belts || [];
    this.belts = [];

    this.loaded = false;
    this.ready = this.load();
  }
  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;

    const { data } = await universeApi.getUniversePlanetsPlanetId(this.id);
    this.name = data.name || "Planet";
    this.typeId = data.type_id;
    this.moons = this.moonData.map((mid) => new Moon(mid));
    this.belts = this.beltData.map((bid) => new Belt(bid));

    await Promise.all([
      ...this.moons.map((m) => m.load(recursions - 1)),
      ...this.belts.map((b) => b.load(recursions - 1)),
    ]);

    this.loaded = true;
  }
}
