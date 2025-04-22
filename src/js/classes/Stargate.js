import { Api } from "../../../public/esi-client.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Stargate {
  constructor(id) {
    this.id = id;
  }
  async load(recursions) {
    if (recursions <= 0) return;
    const { data } = await globalThrottle(() =>
      universeApi.getUniverseStargatesStargateId(this.id)
    );
    this.typeId = data.type_id;
    this.name = data.name;
    const { x, y, z } = data.position;
    this.position = { x, y, z };
    this.destination = data.destination;
  }
}
