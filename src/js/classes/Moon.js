import { Api } from "../../../public/esi-client.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;

export default class Moon {
  constructor(id) {
    this.id = id;
  }
  async load(recursions) {
    if (recursions <= 0) return;
    const { data } = await universeApi.getUniverseMoonsMoonId(this.id);
    this.name = data.name;
    this.position = data.position;
  }
}
