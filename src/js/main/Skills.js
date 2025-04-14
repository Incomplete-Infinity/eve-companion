/**
 * @file Skills.js
 * @description Handles fetching character skill data from ESI.
 * 
 * @requires eve_swagger_interface
 */

const ESI = require('eve_swagger_interface');

/**
 * @class Skills
 * @classdesc Fetches and manages a character's skill data via the ESI API.
 */
export default class Skills {
  /**
   * @param {number} characterId - The EVE character ID.
   * @param {object} auth - Auth token manager instance with ensureValidToken().
   */
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.SkillsApi();

    /** @type {Array<object>} */
    this.skills = [];

    /** @type {number} */
    this.totalSp = 0;

    /** @type {number} */
    this.unallocatedSp = 0;
  }

  /**
   * Ensures the auth token is valid before making a request.
   * @private
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Skills access requires authentication.');
    await this.auth.ensureValidToken();
  }

  /**
   * Loads the character's skills from ESI.
   * @returns {Promise<object>} Full API response from getCharactersCharacterIdSkills.
   */
  async load() {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdSkills(this.characterId, {
      datasource: 'tranquility'
    });

    this.skills = data.skills ?? [];
    this.totalSp = data.total_sp ?? 0;
    this.unallocatedSp = data.unallocated_sp ?? 0;

    return data;
  }

  /**
   * Converts the internal state to JSON.
   * @returns {object}
   */
  toJSON() {
    return {
      totalSp: this.totalSp,
      unallocatedSp: this.unallocatedSp,
      skills: this.skills
    };
  }
}
