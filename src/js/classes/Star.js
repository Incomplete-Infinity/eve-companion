import Universe from "./Universe.js";
const { universe } = Universe.esiClient;
export default class Star {
  static cache = new Map();

  constructor(id) {
    this.id = id;
    this.age = null;
    this.luminosity = null;
    this.name = "";
    this.radius = null;
    this.spectralClass = null;
    this.temperature = null;
    this.typeId = null;

    this.loaded = false;
  }

  async load() {
    if (this.loaded) return;

    const { data } = await universeApi.getUniverseStarsStarId(this.id);
    this.age = data.age;
    this.luminosity = data.luminosity;
    this.name = data.name;
    this.radius = data.radius;
    this.spectraClass = data.spectral_class;
    this.temperature = data.temperature;
    this.typeId = data.type_id;

    this.loaded = true;
  }
}
