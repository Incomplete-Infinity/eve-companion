class Faction {
    constructor({ faction_id, name, description, solar_system_id, corporation_id, size_factor, station_count, station_system_count, militia_corporation_id }) {
      this.id = faction_id;
      this.name = name;
      this.description = description;
      this.homeSystemId = solar_system_id;
      this.corporationId = corporation_id;
      this.sizeFactor = size_factor;
      this.stationCount = station_count;
      this.stationSystemCount = station_system_count;
      this.militiaCorporationId = militia_corporation_id;
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        homeSystemId: this.homeSystemId,
        corporationId: this.corporationId,
        sizeFactor: this.sizeFactor,
        stationCount: this.stationCount,
        stationSystemCount: this.stationSystemCount,
        militiaCorporationId: this.militiaCorporationId
      };
    }
  }
  
  module.exports = Faction;
  