const System = require('./System');
const Region = require('./Region');

/**
 * @class Location
 * @description Represents a structure, station, solar system, or any placeable location in EVE.
 */
export default class Location {
  /**
   * @constructor
   * @param {Object} data
   * @param {number} data.location_id - Unique location ID
   * @param {string} [data.name=null] - Name of the location
   * @param {string} [data.type=null] - 'structure', 'station', 'solar_system', etc.
   * @param {number} [data.system_id=null] - Associated solar system ID
   * @param {number} [data.region_id=null] - Associated region ID
   */
  constructor({
    location_id,
    name = null,
    type = null,
    system_id = null,
    region_id = null
  }) {
    /** @type {number} */
    this.id = location_id;

    /** @type {string|null} */
    this.name = name;

    /** @type {string|null} */
    this.type = type;

    /** @type {System|null} */
    this.system = system_id ? new System({ system_id }) : null;

    /** @type {Region|null} */
    this.region = region_id ? new Region({ region_id }) : null;
  }

  /**
   * Updates known metadata for this location.
   * @param {Object} details
   * @param {string} [details.name]
   * @param {string} [details.type]
   * @param {System} [details.system]
   * @param {Region} [details.region]
   */
  setDetails({ name, type, system, region }) {
    this.name = name ?? this.name;
    this.type = type ?? this.type;
    if (system) this.system = system;
    if (region) this.region = region;
  }

  /**
   * Returns a serializable version of the location object.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      system: this.system?.toJSON?.() ?? this.system,
      region: this.region?.toJSON?.() ?? this.region
    };
  }
}
