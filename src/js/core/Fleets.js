const ESI = require('eve_swagger_interface');
const Fleet = require('./Fleet');

/**
 * @class Fleets
 * @classdesc Manages high-level access to a character's fleet.
 * 
 * @property {number} characterId - EVE character ID tied to the fleet.
 * @property {Object} auth - Auth handler implementing `ensureValidToken()` and `accessToken`.
 * @property {Fleet|null} fleet - The associated Fleet instance, or null until loaded.
 * 
 * @requires eve_swagger_interface
 * @requires ./Fleet
 */
export default class Fleets {
  /**
   * Create a new Fleets instance for the given character.
   * @param {number} characterId - The EVE character ID.
   * @param {Object} auth - Auth handler instance.
   */
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.FleetsApi();

    /** @type {Fleet|null} */
    this.fleet = null;
  }

  /**
   * Ensure the auth token is present and valid.
   * @private
   * @throws {Error} If no auth handler is provided.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Fleets API requires authentication');
    await this.auth.ensureValidToken();
  }

  /**
   * Load the current fleet the character is in.
   * Instantiates a `Fleet` object using the returned `fleet_id`.
   * 
   * @async
   * @returns {Promise<Fleet>} The loaded Fleet instance.
   */
  async loadFleet() {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdFleet(this.characterId, {
      datasource: 'tranquility'
    });

    this.fleet = new Fleet(data.fleet_id, this.auth);
    return this.fleet;
  }

  /**
   * Serialize the fleet data, if available.
   * 
   * @returns {Object} JSON-safe representation of the fleet.
   */
  toJSON() {
    return {
      fleet: this.fleet?.toJSON() ?? null
    };
  }
}
