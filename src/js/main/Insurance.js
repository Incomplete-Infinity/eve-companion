const ESI = require('eve_swagger_interface');

/**
 * @class Insurance
 * @classdesc Provides access to insurance price plans for ship types in EVE Online.
 */
export default class Insurance {
  constructor() {
    /** @type {ESI.InsuranceApi} Swagger client API */
    this.api = new ESI.InsuranceApi();

    /** @type {Array<Object>} Cached list of insurance plans from ESI */
    this.plans = [];
  }

  /**
   * Load all available insurance prices from ESI.
   * @async
   * @returns {Promise<Object[]>} Array of insurance plan objects
   */
  async load() {
    this.plans = await this.api.getInsurancePrices({ datasource: 'tranquility' });
    return this.plans;
  }

  /**
   * Get the insurance plan for a specific inventory type ID.
   * @param {number} typeId - The inventory type ID of the ship.
   * @returns {Object|null} Insurance plan object or null if not found.
   */
  getByType(typeId) {
    return this.plans.find(p => p.type_id === typeId) || null;
  }

  /**
   * Get the insurance payout and cost for a given ship type and level.
   * @param {number} typeId - The inventory type ID of the ship.
   * @param {string} [level='Platinum'] - The insurance level (e.g. Basic, Bronze, Silver, Gold, Platinum).
   * @returns {Object|null} Object with `cost`, `payout`, and `name`, or null if not found.
   */
  getPayout(typeId, level = 'Platinum') {
    const plan = this.getByType(typeId);
    return plan?.levels.find(l => l.name === level) || null;
  }

  /**
   * Serialize the cached insurance plans.
   * @returns {Object[]} Array of raw insurance plan data
   */
  toJSON() {
    return this.plans;
  }
}
