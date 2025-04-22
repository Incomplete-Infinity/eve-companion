import { Api } from "../../../public/esi-client.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Belt {
  constructor(id) {
    this.id = id;
  }
  async load(recursions) {
    if (recursions <= 0) return;
    const { data } = await globalThrottle(() =>
      universeApi.getUniverseAsteroidBeltsAsteroidBeltId(this.id)
    );
    this.name = data.name;
    const { x, y, z } = data.position;
    this.position = { x, y, z };
  }
}
