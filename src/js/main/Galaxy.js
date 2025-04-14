const Region = require('../systems/intel/locations/Region');

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
  constructor(name = 'New Eden') {
    /** @type {string} */
    this.name = name;

    /** @type {Region[]} */
    this.regions = [];
  }

  /**
   * Add a region to the galaxy using raw data or a partial Region payload.
   * @param {Object} data - Raw region data with at least `region_id`.
   * @returns {Region} The instantiated Region object.
   */
  addRegion(data) {
    const region = new Region(data);
    this.regions.push(region);
    return region;
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
