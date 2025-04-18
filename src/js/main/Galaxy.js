const ESI = require("./../../api/esi/Universe.ts");

/**
 * @class Galaxy
 * @classdesc Represents a galactic structure composed of multiple regions (e.g., New Eden).
 * 
 * @property {string} name - Name of the galaxy.
 * @property {Region[]} regions - Array of Region instances within the galaxy.
 * 
 * @requires ../systems/intel/locations/Region
 */
export default class Galaxy {
  /**
   * Create a new Galaxy instance.
   * @param {string} [name='New Eden'] - Name of the galaxy.
   */
  constructor() {
     /** @type {Region[]} */
    this.regions = ESI.getUniverseRegions().map(r => new Region(r));
  }

  /**
   * Retrieve a Region instance by its unique ID.
   * @param {number} id - The region's unique identifier.
   * @returns {Region|undefined} The matching Region, or undefined if not found.
   */
  getRegionById(id) {
    return this.regions.find(r => r.id === id);
  }

  /**
   * Serialize the Galaxy and its regions to a JSON-compatible format.
   * @returns {Object} A JSON representation of the galaxy.
   */
  toJSON() {
    return {
      name: this.name,
      regions: this.regions.map(r => r.toJSON())
    };
  }
}
