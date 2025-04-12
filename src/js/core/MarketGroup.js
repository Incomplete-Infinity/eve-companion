/**
 * @file MarketGroup.js
 * @description Represents a market group retrieved from the EVE Swagger Interface (ESI).
 */

import ESI from 'eve_swagger_interface';

/**
 * @class MarketGroup
 * @classdesc Represents a single market group and its metadata.
 */
export default class MarketGroup {
  /**
   * @param {number} marketGroupId - The ID of the market group to fetch.
   */
  constructor(marketGroupId) {
    /** @type {number} */
    this.id = marketGroupId;

    /** @type {string|null} */
    this.name = null;

    /** @type {string|null} */
    this.description = null;

    /** @type {number|null} */
    this.parentId = null;

    /** @type {number[]} */
    this.typeIds = [];

    /** @private */
    this.api = new ESI.MarketApi();
  }

  /**
   * Fetch market group details from ESI and populate this instance.
   * @returns {Promise<MarketGroup>}
   */
  async fetch() {
    const data = await this.api.getMarketsGroupsMarketGroupId(this.id, {
      datasource: 'tranquility'
    });

    this.name = data.name;
    this.description = data.description;
    this.parentId = data.parent_group_id ?? null;
    this.typeIds = data.types ?? [];

    return this;
  }

  /**
   * Serialize to JSON-friendly structure.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      parentId: this.parentId,
      typeIds: this.typeIds
    };
  }
}
