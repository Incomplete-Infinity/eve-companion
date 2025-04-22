import { Api } from "../../../public/esi-client.js";
import System from "./System.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Constellation {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.position = { x: 0, y: 0, z: 0 };
    this.systems = [];
  }
  async load(recursions) {
    const { data } = await globalThrottle(() =>
      universeApi.getUniverseConstellationsConstellationId(this.id)
    );
    this.name = data.name;
    this.position = data.position;
    this.systems = data.systems.map((sid) => new System(sid));
    if (recursions <= 0) return;
    await Promise.all(this.systems.map((s) => s.load(recursions - 1)));
  }
}
