const ESI = require('eve_swagger_interface');

/**
 * @class Loyalty
 * @description Fetches and stores loyalty point store offers per corporation.
 */
export default class Loyalty {
  constructor() {
    /** @private */
    this.api = new ESI.LoyaltyApi();

    /** @type {Map<number, Object[]>} Stores offers keyed by corporationId */
    this.offers = new Map();
  }

  /**
   * Loads loyalty offers from a specific corporation.
   * Caches results after first load.
   * 
   * @param {number} corporationId - The ID of the corporation offering loyalty rewards.
   * @returns {Promise<Object[]>} Array of loyalty offer objects.
   */
  async loadOffers(corporationId) {
    if (this.offers.has(corporationId)) return this.offers.get(corporationId);

    const data = await this.api.getLoyaltyStoresCorporationIdOffers(corporationId, {
      datasource: 'tranquility'
    });

    this.offers.set(corporationId, data);
    return data;
  }

  /**
   * Returns previously loaded offers for a given corporation ID.
   * 
   * @param {number} corporationId
   * @returns {Object[]} Loyalty offers or an empty array if not loaded.
   */
  getOffers(corporationId) {
    return this.offers.get(corporationId) || [];
  }

  /**
   * Serializes the loyalty offers into a plain object.
   * 
   * @returns {Object} Plain object with corpId → offers[]
   */
  toJSON() {
    return Object.fromEntries(this.offers);
  }
}
