/**
 * @file Planet.js
 * @description Represents a planetary object within a solar system. Includes basic metadata and moon tracking.
 */

/**
 * @class Planet
 * @classdesc Stores metadata for a planet and its moons.
 */
export default class Planet {
  /**
   * @param {Object} data
   * @param {number} data.planet_id - Unique identifier for the planet.
   * @param {string} [data.name=null] - Optional name of the planet.
   * @param {number} [data.type_id=null] - Inventory type ID of the planet.
   * @param {number} [data.system_id=null] - System ID this planet belongs to.
   * @param {number} [data.region_id=null] - Region ID this planet belongs to.
   * @param {Array<number|string>} [data.moons=[]] - Optional list of moons by ID or name.
   */
  constructor({
    planet_id,
    name = null,
    type_id = null,
    system_id = null,
    region_id = null,
    moons = []
  }) {
    /** @type {number} */
    this.id = planet_id;

    /** @type {string|null} */
    this.name = name;

    /** @type {number|null} */
    this.typeId = type_id;

    /** @type {number|null} */
    this.systemId = system_id;

    /** @type {number|null} */
    this.regionId = region_id;

    /** @type {Array<number|string>} */
    this.moons = moons;
  }

  /**
   * Add a moon to this planet.
   * @param {number|string} moonIdOrName - Moon ID or name.
   */
  addMoon(moonIdOrName) {
    if (!this.moons.includes(moonIdOrName)) this.moons.push(moonIdOrName);
  }

  /**
   * JSON-safe representation of the planet.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      typeId: this.typeId,
      systemId: this.systemId,
      regionId: this.regionId,
      moons: this.moons
    };
  }
}
