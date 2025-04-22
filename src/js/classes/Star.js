import { Api } from "../../../public/esi-client.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Star {
  constructor(id) {
    this.id = id;
    this.age = null;
    this.luminosity = null;
    this.name = "";
    this.radius = null;
    this.spectralClass = null;
    this.temperature = null;
    this.typeId = null;
  }
  async load(recursions) {
    if (recursions <= 0) return;
    const { data } = await universeApi.getUniverseStarsStarId(this.id);
    this.age = data.age;
    this.luminosity = data.luminosity;
    this.name = data.name;
    this.radius = data.radius;
    this.spectraClass = data.spectral_class;
    this.temperature = data.temperature;
    this.typeId = data.type_id;
  }
}
