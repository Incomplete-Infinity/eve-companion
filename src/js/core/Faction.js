/**
 * Represents a faction in the EVE Online universe.
 * This class holds information about a faction, including its name, description, associated corporation, and statistics such as the number of stations.
 */
export default class Faction {
  /**
   * Creates an instance of the Faction class.
   * @param {Object} factionData - The data for the faction.
   * @param {number} factionData.faction_id - The unique ID of the faction.
   * @param {string} factionData.name - The name of the faction.
   * @param {string} factionData.description - The description of the faction.
   * @param {number} factionData.solar_system_id - The ID of the home solar system of the faction.
   * @param {number} factionData.corporation_id - The ID of the corporation associated with the faction.
   * @param {number} factionData.size_factor - A factor representing the size of the faction.
   * @param {number} factionData.station_count - The number of stations controlled by the faction.
   * @param {number} factionData.station_system_count - The number of systems containing stations controlled by the faction.
   * @param {number} factionData.militia_corporation_id - The ID of the militia corporation associated with the faction.
   */
  constructor({
    faction_id,
    name,
    description,
    solar_system_id,
    corporation_id,
    size_factor,
    station_count,
    station_system_count,
    militia_corporation_id
  }) {
    /**
     * @type {number}
     * @description The unique ID of the faction.
     */
    this.id = faction_id;

    /**
     * @type {string}
     * @description The name of the faction.
     */
    this.name = name;

    /**
     * @type {string}
     * @description The description of the faction.
     */
    this.description = description;

    /**
     * @type {number}
     * @description The ID of the home system of the faction.
     */
    this.homeSystemId = solar_system_id;

    /**
     * @type {number}
     * @description The ID of the corporation associated with the faction.
     */
    this.corporationId = corporation_id;

    /**
     * @type {number}
     * @description The size factor of the faction, representing its size.
     */
    this.sizeFactor = size_factor;

    /**
     * @type {number}
     * @description The total number of stations controlled by the faction.
     */
    this.stationCount = station_count;

    /**
     * @type {number}
     * @description The number of systems that contain stations controlled by the faction.
     */
    this.stationSystemCount = station_system_count;

    /**
     * @type {number}
     * @description The ID of the militia corporation associated with the faction.
     */
    this.militiaCorporationId = militia_corporation_id;
  }

  /**
   * Converts the faction instance into a plain JavaScript object.
   * This allows for easier serialization and manipulation of the faction data.
   * @returns {Object} The plain JavaScript object representing the faction.
   */
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
