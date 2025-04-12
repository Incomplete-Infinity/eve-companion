/**
 * @file SkillQueue.js
 * @description Manages a character's skill queue using the ESI API.
 *
 * @requires eve_swagger_interface
 */

const ESI = require('eve_swagger_interface');

/**
 * @class SkillQueue
 * @classdesc Fetches and stores a character's skill training queue from ESI.
 */
export default class SkillQueue {
  /**
   * @param {number} characterId - The EVE character ID.
   * @param {object} auth - Auth token manager with ensureValidToken().
   */
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.SkillsApi();

    /** @type {Array<object>} */
    this.queue = [];
  }

  /**
   * Ensures that the auth token is present and valid.
   * @private
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Skill queue requires authentication.');
    await this.auth.ensureValidToken();
  }

  /**
   * Loads the character's skill training queue.
   * @returns {Promise<Array<object>>} The queue entries.
   */
  async load() {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdSkillqueue(this.characterId, {
      datasource: 'tranquility'
    });

    this.queue = data ?? [];
    return this.queue;
  }

  /**
   * Converts the skill queue to a JSON-compatible structure.
   * @returns {Array<object>}
   */
  toJSON() {
    return this.queue;
  }
}
