const ESI = require("eve_swagger_interface");

class Faction {
  static registry = new Map();

  constructor(data) {
    this.id = data.faction_id;
    this.name = data.name;
    this.description = data.description;
    this.sizeFactor = data.size_factor;
    this.stationCount = data.station_count;
    this.stationSystemCount = data.station_system_count;
    this.corporationId = data.corporation_id;
    this.solarSystemId = data.solar_system_id;
    this.militiaCorporationId = data.militia_corporation_id;
    this.isUnique = data.is_unique;

    Faction.registry.set(this.id, this);
  }

  static async getAll() {
    const api = new ESI.UniverseApi();
    const data = await api.getUniverseFactions({ datasource: "tranquility" });
    return data.map(factionData => new Faction(factionData));
  }
}

