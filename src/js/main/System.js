/**
 * @file System.js
 * @summary Represents a solar system and its planets in the EVE Online universe.
 * @description constructs and populats a system object from the ESI API using the system's unique id.
 * @version 1
 *
 * @requires ../../api/esi/Universe.ts
 * @requires Planet
 * @requires Stargate
 * @requires Station
 * @requires Position
 * @requires Star
 */
const ESI = require("./../../api/esi/Universe.ts");
const Planet = require("./Planet");
const Stargate = require("./Stargate");
const Station = require("./Station");
const Position = require("./Position");
const Star = require("./Star");
/**
 * @class System
 * @classdesc A solar system in EVE, holding planets and metadata like region and constellation.
 */
export default class System {
  /**
   * @constructor
   * @param {object} data - System data from the ESI API.
   * @param {number} system_id - The system's unique ID.

   * @param {number} data.constellation_id - The ID of the constellation containing this system.
   * @param {number} data.region_id - The ID of the region containing this system.
   * @param {number} data.security_status - Security rating from -1.0 (null) to 1.0 (high-sec).
   */
  constructor(systemId) {
    /** @type {number} */
    this.id = systemId;
    const {
      name,
      security_status,
      security_class,
      star_id,
      stargates,
      stations,
      planets,
      position,
    } = ESI.getUniverseSystem(systemId);
    /** @type {string} */
    this.name = name;
    /** @type {number} */
    this.securityStatus = security_status;
    /** @type {number} */
    this.securityClass = security_class;
    /** @type {number} */
    this.star = new this.star(star_id);
    /** @type {Stargate} */
    this.stargates = stargates.map((id) => new Stargate(id));
    /** @type {Station} */
    this.stations = stations.map((id) => new Station(id));
    /** @type {Planet} */
    this.planets = planets.map((p) => new Planet(p));
    /** @type {Position} */
    this.position = new Position(position);
    /** @type {Belt[]} */
    this.belts = belts.map((b) => new Belt(b));
  }
  /**
   * @summary Retrieve a planet by its ID.
   * @param {number} planetId - The ID of the planet to retrieve.
   * @returns {Planet|undefined} - The planet instance or undefined if not found.
   */
  getPlanetById(planetId) {
    return System.getObjectById(planetId, this.planets);
  }
  /**
   * @summary Retrieve a belt by its ID.
   * @param {number} beltId - The ID of the belt to retrieve.
   * @returns {Belt|undefined} - The planet instance or undefined if not found.
   */
  getBeltById(beltId) {
    return System.getObjectById(beltId, this.belts);
  }
  /**
   * @summary Retrieve a station by its ID.
   * @param {number} beltId - The ID of the belt to retrieve.
   * @returns {Belt|undefined} - The planet instance or undefined if not found.
   */
  getStationById(beltId) {
    return System.getObjectById(beltId, this.belts);
  }
  /**
   * @summary Retrieve a stargate by its ID.
   * @param {number} stargateId - The ID of the belt to retrieve.
   * @returns {Stargate|undefined} - The Stargate instance or undefined if not found.
   */
  getStargateById(stargateId) {
    return System.getObjectById(stargateId, this.stargates);
  }
  /**
   * @summary Retrieve an object by its ID.
   * @param {number} id - The ID of the object to retrieve.
   * @returns {undefined} - The object instance or undefined if not found.
   */
  static getObjectById(id, array) {
    return array.find((e) => e?.id === id);
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
