/**
 * @file Search.js
 * @description Provides access to EVE's Search API, both public and authenticated.
 * @requires eve_swagger_interface
 */

const ESI = require('eve_swagger_interface');

/**
 * @class Search
 * @classdesc Handles search queries using ESI's search endpoints.
 */
export default class Search {
  /**
   * @constructor
   * @param {object|null} auth - Optional auth token manager instance for authenticated search.
   */
  constructor(auth = null) {
    this.auth = auth;
    this.api = new ESI.SearchApi();
  }

  /**
   * Ensure authentication token is present and valid.
   * Only called when `auth` is provided.
   * @private
   */
  async ensureAuth() {
    if (this.auth) await this.auth.ensureValidToken();
  }

  /**
   * Perform a search against the EVE API.
   * @param {string} query - The search string.
   * @param {string[]} [categories=['inventory_type']] - List of categories to search within.
   * @param {boolean} [strict=false] - Whether to use strict matching.
   * @returns {Promise<object>} Search results mapped by category.
   */
  async search(query, categories = ['inventory_type'], strict = false) {
    const opts = {
      search: query,
      categories,
      strict,
      datasource: 'tranquility'
    };

    if (this.auth) opts.token = this.auth.accessToken;

    await this.ensureAuth();

    return await this.api.getSearch(opts);
  }

  /**
   * Perform a public (unauthenticated) search.
   * @param {string} query - The search string.
   * @param {string[]} [categories=['inventory_type']] - List of categories to search.
   * @returns {Promise<object>} Search results.
   */
  async searchPublic(query, categories = ['inventory_type']) {
    return await this.search(query, categories, false);
  }

  /**
   * Get a minimal snapshot of the class state.
   * @returns {object}
   */
  toJSON() {
    return {
      supportsAuth: !!this.auth
    };
  }
}
