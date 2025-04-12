/**
 * @file Title.js
 * @description Fetches corporation title data using the ESI API.
 * 
 * @requires eve_swagger_interface
 */

const ESI = require('eve_swagger_interface');

/**
 * @class Title
 * @classdesc Represents a collection of titles within a corporation, fetched via ESI.
 */
export default class Title {
  /**
   * @constructor
   * @param {number} corporationId - The EVE corporation ID.
   * @param {object} auth - An object with `ensureValidToken()` and `accessToken`.
   */
  constructor(corporationId, auth) {
    /** @type {number} */
    this.corporationId = corporationId;

    /** @type {object} */
    this.auth = auth;

    /** @type {ESI.CorporationApi} */
    this.api = new ESI.CorporationApi();
  }

  /**
   * Fetches all titles for the specified corporation.
   * @returns {Promise<Object[]>} - Array of title objects.
   * @throws Will throw if authentication fails or the API call fails.
   */
  async fetch() {
    await this.auth.ensureValidToken();

    return await this.api.getCorporationsCorporationIdTitles(this.corporationId, {
      datasource: 'tranquility',
    });
  }
}
