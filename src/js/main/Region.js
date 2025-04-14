/**
 * @file Region.js
 * @description Handles region data retrieval and caching from the EVE Swagger Interface (ESI).
 *
 * @requires Constellation
 */

const Constellation = require('./Constellation');

/**
 * @class Region
 * @classdesc Represents a universe region and its associated constellations.
 */
export default class Region {
  /**
   * @constructor
   * @param {Object} data - The region data.
   * @param {number} data.region_id - The ID of the region.
   * @param {string} [data.name=null] - Optional name of the region.
   * @param {number[]} [data.constellations=[]] - Array of constellation IDs.
   */
  constructor({ region_id, name = null, constellations = [] }) {
    this.id = region_id;
    this.name = name;
    this.constellations = constellations.map(c => new Constellation({ constellation_id: c }));
  }

  /**
   * Add a new constellation to this region.
   * @param {Object} data - The constellation data.
   * @returns {Constellation} The newly added constellation instance.
   */
  addConstellation(data) {
    const constellation = new Constellation({ ...data, region_id: this.id });
    this.constellations.push(constellation);
    return constellation;
  }

  /**
   * Serialize the region to a JSON-compatible object.
   * @returns {Object} JSON representation of the region.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      constellations: this.constellations.map(c => c.toJSON?.() ?? c)
    };
  }
}
