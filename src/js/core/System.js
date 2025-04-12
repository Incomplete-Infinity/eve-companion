/**
 * @file System.js
 * @description Represents a solar system and its planets in the EVE Online universe.
 * 
 * @requires ./celestials/Planet
 */

const Planet = require('./celestials/Planet');

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
  constructor({ system_id, name, constellation_id, region_id, security_status }) {
    /** @type {number} */
    this.id = system_id;

    /** @type {string} */
    this.name = name;

    /** @type {number} */
    this.constellationId = constellation_id;

    /** @type {number} */
    this.regionId = region_id;

    /** @type {number} */
    this.securityStatus = security_status;

    /** @type {Planet[]} */
    this.planets = [];
  }

  /**
   * Add a planet to this system.
   * @param {object} planetData - Raw ESI planet data.
   * @returns {Planet} - The created Planet instance.
   */
  addPlanet(planetData) {
    const planet = new Planet({ ...planetData, system_id: this.id, region_id: this.regionId });
    this.planets.push(planet);
    return planet;
  }

  /**
   * Retrieve a planet by its ID.
   * @param {number} planetId - The ID of the planet to retrieve.
   * @returns {Planet|undefined} - The planet instance or undefined if not found.
   */
  getPlanetById(planetId) {
    return this.planets.find(p => p.id === planetId);
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
      planets: this.planets.map(p => p.toJSON())
    };
  }
}
