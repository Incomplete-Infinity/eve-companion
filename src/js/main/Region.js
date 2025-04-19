/**
 * @file Region.js
 * @description Handles region data retrieval and caching from the EVE Swagger Interface (ESI).
 *
 * @requires Constellation
 */
const ESI = require("./../../api/esi/Universe.ts");

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
  constructor(regionId) {
    this.id = regionId;
    const { name, description, constellations } =
      ESI.getUniverseRegion(regionId);
    this.name = name;
    this.description = description;
    this.constellations = constellations.map(
      (c) => new Constellation(c)
    );
  }

  /**
   * Serialize the region to a JSON-compatible object.
   * @returns {Object} JSON representation of the region.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      constellations: this.constellations.map(
        (constellation) => constellation.toJSON?.() ?? constellation
      ),
    };
  }
}
