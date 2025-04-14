const ESI = require('eve_swagger_interface');

/**
 * Represents a contract in the EVE Online universe.
 * The Contract class allows for the retrieval of contract details, items, and bids related to a specific contract.
 * It can handle contracts associated with a character or corporation depending on the provided scope.
 */
export default class Contract {
  /**
   * Creates an instance of the Contract class.
   * @param {number} ownerId - The unique ID of the contract owner (character or corporation).
   * @param {number} contractId - The unique ID of the contract.
   * @param {Object} options - Configuration options for contract scope and authentication.
   * @param {Object|null} options.auth - The authentication object required for API requests (null for public contracts).
   * @param {string} options.scope - The scope of the contract, can be either 'character' or 'corporation'.
   */
  constructor(ownerId, contractId, { auth = null, scope = 'character' } = {}) {
    /**
     * @type {number}
     * @description The unique ID of the contract owner (character or corporation).
     */
    this.ownerId = ownerId;

    /**
     * @type {number}
     * @description The unique ID of the contract.
     */
    this.contractId = contractId;

    /**
     * @type {Object|null}
     * @description The authentication object required for authenticated requests (null for public contracts).
     */
    this.auth = auth;

    /**
     * @type {string}
     * @description The scope of the contract. Can be 'character' or 'corporation'.
     */
    this.scope = scope;

    /**
     * @type {ESI.ContractsApi}
     * @description Instance of the EVE Swagger Interface Contracts API to interact with contract data.
     */
    this.api = new ESI.ContractsApi();

    /**
     * @type {Object|null}
     * @description The details of the contract once loaded.
     */
    this.data = null;

    /**
     * @type {Array}
     * @description An array to store the items associated with the contract.
     */
    this.items = [];

    /**
     * @type {Array}
     * @description An array to store the bids associated with the contract.
     */
    this.bids = [];
  }

  /**
   * Ensures that the contract request is authenticated if necessary.
   * This method checks if authentication is required and ensures the validity of the token if provided.
   * @throws {Error} Throws an error if authentication is required but not provided.
   * @returns {Promise<void>} Resolves if the authentication is valid.
   */
  async ensureAuth() {
    if (this.scope !== 'public' && !this.auth)
      throw new Error('Contract API requires authentication');
    if (this.auth) await this.auth.ensureValidToken();
  }

  /**
   * Loads the details of the contract.
   * Depending on the scope ('character' or 'corporation'), this method calls the appropriate API endpoint.
   * @returns {Promise<Object>} A promise that resolves to the contract details.
   */
  async loadDetails() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    const fn = this.scope === 'corporation'
      ? this.api.getCorporationsCorporationIdContractsContractId
      : this.api.getCharactersCharacterIdContractsContractId;

    this.data = await fn(this.ownerId, this.contractId, opts);
    return this.data;
  }

  /**
   * Loads the items associated with the contract.
   * This method fetches all items listed in the contract, which are either for sale or part of the contract offer.
   * @returns {Promise<Array>} A promise that resolves to the list of contract items.
   */
  async loadItems() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    const fn = this.scope === 'corporation'
      ? this.api.getCorporationsCorporationIdContractsContractIdItems
      : this.api.getCharactersCharacterIdContractsContractIdItems;

    this.items = await fn(this.ownerId, this.contractId, opts);
    return this.items;
  }

  /**
   * Loads the bids associated with the contract.
   * This method fetches all bids made on the contract, which can help track potential buyers or sellers.
   * @returns {Promise<Array>} A promise that resolves to the list of bids on the contract.
   */
  async loadBids() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    const fn = this.scope === 'corporation'
      ? this.api.getCorporationsCorporationIdContractsContractIdBids
      : this.api.getCharactersCharacterIdContractsContractIdBids;

    this.bids = await fn(this.ownerId, this.contractId, opts);
    return this.bids;
  }

  /**
   * Converts the Contract instance into a plain JavaScript object.
   * This method serializes the contract details, items, and bids into a simpler structure.
   * @returns {Object} A plain JavaScript object representing the contract, including its details, items, and bids.
   */
  toJSON() {
    return {
      contractId: this.contractId,
      ...this.data,
      items: this.items,
      bids: this.bids
    };
  }
}
