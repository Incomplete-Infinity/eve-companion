const ESI = require('eve_swagger_interface');

/**
 * @class Incursions
 * @classdesc Handles retrieval and caching of active incursions from the ESI API.
 */
export default class Incursions {
  constructor() {
    /** @type {ESI.IncursionsApi} */
    this.api = new ESI.IncursionsApi();

    /** @type {object[]} */
    this.active = [];
  }

  /**
   * Load all active incursions from the Tranquility server.
   * @async
   * @returns {Promise<object[]>} Array of active incursion data.
   */
  async load() {
    const data = await this.api.getIncursions({ datasource: 'tranquility' });
    this.active = data;
    return data;
  }

  /**
   * Get an incursion by its constellation ID.
   * @param {number} constellationId - The constellation ID to search for.
   * @returns {object|undefined} The matching incursion or undefined.
   */
  getByConstellation(constellationId) {
    return this.active.find(i => i.constellation_id === constellationId);
  }

  /**
   * Get an incursion by its staging system ID.
   * @param {number} systemId - The staging solar system ID to search for.
   * @returns {object|undefined} The matching incursion or undefined.
   */
  getByStagingSystem(systemId) {
    return this.active.find(i => i.staging_solar_system_id === systemId);
  }

  /**
   * Get a list of all staging solar system IDs from active incursions.
   * @returns {number[]} Array of system IDs.
   */
  getActiveSystems() {
    return this.active.map(i => i.staging_solar_system_id);
  }

  /**
   * Serialize the internal state to a JSON-safe object.
   * @returns {object[]} Array of incursion data.
   */
  toJSON() {
    return this.active;
  }
}
