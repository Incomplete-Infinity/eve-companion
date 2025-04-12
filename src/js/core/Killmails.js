const ESI = require('eve_swagger_interface');
const Killmail = require('../social/Killmail');

/**
 * @class Killmails
 * @description Manages retrieval of recent killmails and detailed killmail data for a given character.
 */
export default class Killmails {
  /**
   * @constructor
   * @param {number} characterId - The character's EVE Online ID.
   * @param {Object} auth - The authentication handler with a valid access token.
   */
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.KillmailsApi();

    /** @type {Array<Object>} - Shallow killmail references. */
    this.recent = [];

    /** @type {Map<string, Killmail>} - Cache of full killmail objects keyed by "id:hash". */
    this.details = new Map();
  }

  /**
   * Ensures the access token is valid.
   * @private
   * @throws {Error} If authentication is missing.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Killmail access requires auth');
    await this.auth.ensureValidToken();
  }

  /**
   * Loads recent killmail references (IDs and hashes only).
   * @returns {Promise<Array<Object>>} The list of recent killmail summaries.
   */
  async loadRecent() {
    await this.ensureAuth();
    this.recent = await this.api.getCharactersCharacterIdKillmailsRecent(this.characterId, {
      datasource: 'tranquility'
    });
    return this.recent;
  }

  /**
   * Loads the full killmail data by ID and hash.
   * @param {number} killmailId
   * @param {string} killmailHash
   * @returns {Promise<Killmail>}
   */
  async loadKillmail(killmailId, killmailHash) {
    const key = `${killmailId}:${killmailHash}`;
    if (this.details.has(key)) return this.details.get(key);

    const data = await this.api.getKillmailsKillmailIdKillmailHash(killmailId, killmailHash, {
      datasource: 'tranquility'
    });

    const kill = new Killmail({
      ...data,
      killmail_id: killmailId,
      killmail_hash: killmailHash
    });

    this.details.set(key, kill);
    return kill;
  }

  /**
   * Converts this object into a serializable structure.
   * @returns {Object}
   */
  toJSON() {
    return {
      recent: this.recent,
      details: Object.fromEntries(
        [...this.details].map(([key, value]) => [key, value.toJSON()])
      )
    };
  }
}
