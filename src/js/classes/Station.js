import { Api } from "../../../public/esi-client.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const universeApi = apiClient.universe;
export default class Station {
  constructor(id) {
    this.id = id;
    this.maxDockableShipVolume = null;
    this.name = "";
    this.officeRentalCost = null;
    this.owner = null;
    this.position = { x: 0, y: 0, z: 0 };
    this.raceId = null;
    this.reprocessingEfficiency = null;
    this.reprocessingStationsTake = null;
    this.services = null;
    this.typeId = null;
  }
  async load(recursions) {
    if (recursions <= 0) return;
    const { data } = await globalThrottle(() =>
      universeApi.getUniverseStationsStationId(this.id)
    );
    this.name = data.name;
    this.maxDockableShipVolume = data.max_dockable_ship_volume;
    this.officeRentalCost = data.office_rental_cost;
    this.owner = data.owner;
    const { x, y, z } = data.position;
    this.position = { x, y, z };
    this.raceId = data.race_id;
    this.reprocessingEfficiency = data.reprocessing_efficiency;
    this.reprocessingStationsTake = data.reprocessing_stations_take;
    this.services = data.services;
    this.typeId = data.type_id;
  }
}
