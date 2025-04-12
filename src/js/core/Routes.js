const ESI = require('eve_swagger_interface');

/**
 * @class Routes
 * @classdesc Accesses the EVE Online routing API to calculate different types of travel routes.
 */
export default class Routes {
  /**
   * Initialize the Routes API client.
   */
  constructor() {
    this.api = new ESI.RoutesApi();
  }

  /**
   * Get the shortest route between two solar systems.
   * @param {number} fromSystemId - Origin system ID.
   * @param {number} toSystemId - Destination system ID.
   * @returns {Promise<number[]>} Array of system IDs representing the route.
   */
  async getShortest(fromSystemId, toSystemId) {
    return await this.api.getRouteOriginDestination(fromSystemId, toSystemId, {
      datasource: 'tranquility',
      flag: 'shortest'
    });
  }

  /**
   * Get the safest (most secure) route between two systems.
   * Avoids low and null-sec where possible.
   * @param {number} fromSystemId - Origin system ID.
   * @param {number} toSystemId - Destination system ID.
   * @returns {Promise<number[]>} Array of system IDs representing the secure route.
   */
  async getSecure(fromSystemId, toSystemId) {
    return await this.api.getRouteOriginDestination(fromSystemId, toSystemId, {
      datasource: 'tranquility',
      flag: 'secure'
    });
  }

  /**
   * Get the most dangerous (least secure) route between two systems.
   * Prioritizes low/null sec where applicable.
   * @param {number} fromSystemId - Origin system ID.
   * @param {number} toSystemId - Destination system ID.
   * @returns {Promise<number[]>} Array of system IDs representing the unsafe route.
   */
  async getUnsafe(fromSystemId, toSystemId) {
    return await this.api.getRouteOriginDestination(fromSystemId, toSystemId, {
      datasource: 'tranquility',
      flag: 'insecure'
    });
  }
}
