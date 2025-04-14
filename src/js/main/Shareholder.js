/**
 * @file Shareholder.js
 * @description Represents a character that is a shareholder in a corporation.
 *              Extends the Character class and adds share-specific data.
 *
 * @requires ./Character
 */

const Character = require('./Character');

/**
 * @class Shareholder
 * @extends Character
 * @classdesc A character who owns shares in a corporation.
 */
export default class Shareholder extends Character {
  /**
   * @param {number} characterId - The EVE character ID.
   * @param {object|null} auth - Optional auth handler for private endpoints.
   * @param {number} shares - Number of shares owned by this character.
   */
  constructor(characterId, auth = null, shares = 0) {
    super(characterId, auth);
    this.shares = shares;
  }

  /**
   * Convert the Shareholder instance to a plain object.
   * @returns {object}
   */
  toJSON() {
    return {
      ...super.toJSON(),
      shares: this.shares
    };
  }
}
