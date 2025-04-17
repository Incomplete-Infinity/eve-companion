/**
 * @file Region.js
 * @description Handles region data retrieval and caching from the EVE Swagger Interface (ESI).
 *
 * @requires Constellation
 */
const ESI = require("eve_swagger_interface");
const api = new ESI.UniverseApi();

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
  constructor(region_id) {
    this.id = region_id;
    const { name, description, constellations } = Region.requestData(this.id);
    this.name = name;
    this.description = description;
    this.constellations = constellations.map(constellation => new Constellation({ constellation_id: constellation }));
  }

  static async requestData(region_id) {
    const data = await api.Region({
      region_id: region_id,
      datasource: "tranquility"
    });
    return data;
  }

  /**
   * Serialize the region to a JSON-compatible object.
 * @returns {Object} JSON representation of the region.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      constellations: this.constellations.map(constellation => constellation.toJSON?.() ?? constellation)
    };
  }
}
