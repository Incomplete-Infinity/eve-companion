/**
 * @file Wallet.js
 * @description Manages wallet data (balance, journal, transactions) for a character via the EVE Swagger Interface (ESI).
 *
 * @requires eve_swagger_interface - ESI client for accessing EVE Online APIs.
 *
 * @class Wallet
 * @classdesc Represents a character's wallet, providing methods to load and cache wallet-related data such as balance, transaction history, and journal entries.
 *
 * @property {number} characterId - The ID of the character whose wallet is being queried.
 * @property {Object} auth - Auth manager instance used for ensuring valid tokens.
 * @property {ESI.WalletApi} api - Instance of the ESI Wallet API.
 * @property {?number} balance - The character's current ISK balance.
 * @property {Array<Object>} journal - Wallet journal entries.
 * @property {Array<Object>} transactions - Market transaction history.
 */

const ESI = require('eve_swagger_interface');
 /**
  * @class Wallet
  */
export default class Wallet {
  /**
   * @param {number} characterId - The character ID.
   * @param {Object} auth - An authentication handler that supports ensureValidToken().
   */
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.WalletApi();

    /** @type {?number} */
    this.balance = null;

    /** @type {Array<Object>} */
    this.journal = [];

    /** @type {Array<Object>} */
    this.transactions = [];
  }

  /**
   * @summary Ensures the authentication token is present and valid.
   * @throws {Error} If no auth handler is present.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Wallet access requires authentication');
    await this.auth.ensureValidToken();
  }

  /**
   * @summary Loads the character's current wallet balance.
   * @returns {Promise<number>} The current ISK balance.
   */
  async loadBalance() {
    await this.ensureAuth();
    this.balance = await this.api.getCharactersCharacterIdWallet(this.characterId, {
      datasource: 'tranquility'
    });
    return this.balance;
  }

  /**
   * @summary Loads the character's wallet journal entries.
   * @returns {Promise<Array<Object>>} A list of wallet journal entries.
   */
  async loadJournal() {
    await this.ensureAuth();
    this.journal = await this.api.getCharactersCharacterIdWalletJournal(this.characterId, {
      datasource: 'tranquility'
    });
    return this.journal;
  }

  /**
   * @summary Loads the character's wallet transactions.
   * @returns {Promise<Array<Object>>} A list of wallet transactions.
   */
  async loadTransactions() {
    await this.ensureAuth();
    this.transactions = await this.api.getCharactersCharacterIdWalletTransactions(this.characterId, {
      datasource: 'tranquility'
    });
    return this.transactions;
  }

  /**
   * @summary Returns a plain object representation of wallet data.
   * @returns {{balance: number|null, journal: Array<Object>, transactions: Array<Object>}}
   */
  toJSON() {
    return {
      balance: this.balance,
      journal: this.journal,
      transactions: this.transactions
    };
  }
}
