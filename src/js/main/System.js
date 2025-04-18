const ESI = require("./../../api/esi/Universe.ts");

/**
 * @file System.js
 * @description Represents a solar system and its planets in the EVE Online universe.
 *
 * @requires ./celestials/Planet
 */

const Planet = require("./celestials/Planet");

/**
 * @class System
 * @classdesc A solar system in EVE, holding planets and metadata like region and constellation.
 */
export default class System {
  /**
   * @constructor
   * @param {object} data - System data from the ESI API.
   * @param {number} data.system_id - The system's unique ID.
   * @param {string} data.name - The name of the system.
   * @param {number} data.constellation_id - The ID of the constellation containing this system.
   * @param {number} data.region_id - The ID of the region containing this system.
   * @param {number} data.security_status - Security rating from -1.0 (null) to 1.0 (high-sec).
   */
  constructor(system_id) {
    /** @type {number} */
    this.id = system_id;
    const {
      name,
      security_status,
      security_class,
      star_id,
      stargates,
      stations,
      planets,
      position,
    } = ESI.getUniverseSystem(system_id);

    /** @type {string} */
    this.name = name;

    /** @type {number} */
    this.securityStatus = security_status;

    this.securityClass = security_class;

    this.star = new this.star(star_id);

    this.stargates = stargates.map((id) => new Stargate(id));

    this.stations = stations.map((id) => new Station(id));
    /** @type {Planet[]} */
    this.planets = planets.map((planet) => new Planet(planet));

    this.position = new Position(position);
  }

  /**
   * Retrieve a planet by its ID.
   * @param {number} planetId - The ID of the planet to retrieve.
   * @returns {Planet|undefined} - The planet instance or undefined if not found.
   */
  getPlanetById(planetId) {
    return this.planets.find((p) => p.id === planetId);
  }

  /**
   * Serialize this system and its planets into a plain object.
   * @returns {object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      constellationId: this.constellationId,
      regionId: this.regionId,
      securityStatus: this.securityStatus,
      planets: this.planets.map((p) => p.toJSON()),
    };
  }
}
