/**
 * @file Wars.js
 * @description Handles war data retrieval and caching from the EVE Swagger Interface (ESI).
 *
 * @requires eve_swagger_interface - External library to interface with ESI endpoints.
 *
 * @class Wars
 * @classdesc Manages access to EVE Online war information, including fetching recent wars and caching individual war details.
 *
 * @property {ESI.WarsApi} api - Instance of the ESI Wars API.
 * @property {Map<number, Object>} wars - Cached map of war IDs to war objects.
 */

const ESI = require('eve_swagger_interface');

/**
 * @class Wars
 */
export default class Wars {
  constructor() {
    /** @type {ESI.WarsApi} */
    this.api = new ESI.WarsApi();

    /** @type {Map<number, Object>} */
    this.wars = new Map(); // war_id → war object
  }

  /**
   * @summary Loads the most recent wars from ESI and stores them in cache.
   * @param {number} [limit=10] - The number of recent wars to load.
   * @returns {Promise<Object[]>} An array of war objects.
   */
  async loadRecent(limit = 10) {
    const ids = await this.api.getWars({ datasource: 'tranquility' });
    const recent = ids.slice(0, limit);

    const loaded = await Promise.all(
      recent.map(id => this.api.getWarsWarId(id, { datasource: 'tranquility' }))
    );

    loaded.forEach(war => this.wars.set(war.id, war));
    return loaded;
  }

  /**
   * @summary Loads a specific war by ID from cache or API.
   * @param {number} warId - The ID of the war to retrieve.
   * @returns {Promise<Object>} The war object.
   */
  async loadWar(warId) {
    if (this.wars.has(warId)) return this.wars.get(warId);
    const war = await this.api.getWarsWarId(warId, { datasource: 'tranquility' });
    this.wars.set(warId, war);
    return war;
  }

  /**
   * @summary Returns the internal cache as a plain object.
   * @returns {Object} A plain object representation of the cached wars.
   */
  toJSON() {
    return Object.fromEntries(this.wars);
  }
}
