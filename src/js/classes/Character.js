const ESI = require('eve_swagger_interface');
const AuthTokenManager = require("./AuthTokenManager");

/**
 * @class Character
 * @classdesc Represents an EVE Online character and provides methods for accessing
 * both public and authenticated character data from the ESI API.
 */
class Character {
  /**
   * Construct a Character instance.
   *
   * @constructor
   * @param {number} characterId - EVE character ID.
   * @param {AuthTokenManager|null} [auth=null] - Optional AuthTokenManager for authenticated access.
   */
  constructor(characterId, auth = null) {
    /** @type {number} Character ID */
    this.characterId = characterId;

    /** @type {AuthTokenManager|null} */
    this.auth = auth instanceof AuthTokenManager ? auth : null;

    /** @type {ESI.CharacterApi} ESI API interface for character data */
    this.api = new ESI.CharacterApi();

    /** @type {string|null} Character's in-game name */
    this.name = null;

    /** @type {number|null} Corporation ID the character belongs to */
    this.corporationId = null;

    /** @type {number|null} Alliance ID, if the character is in an alliance */
    this.allianceId = null;

    /** @type {Object|null} Character portrait URLs by resolution */
    this.portrait = null;

    /** @type {boolean} Whether the public data has been loaded */
    this.loaded = false;
  }

  /**
   * Validate auth presence and freshness before calling a secured endpoint.
   *
   * @private
   * @throws {Error} If no auth is available or token is invalid.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Authenticated data requires an auth token');
    await this.auth.ensureValidToken();
  }

  /**
   * Check whether the instance has valid auth assigned.
   *
   * @returns {boolean} True if an auth token is available.
   */
  isAuthenticated() {
    return !!this.auth;
  }

  /**
   * Load public character info (name, corp, alliance) from the ESI API.
   *
   * @async
   * @returns {Promise<Object>} Raw ESI response with character metadata.
   *
   * @example
   * await character.loadPublicInfo();
   * console.log(character.name, character.corporationId);
   */
  async loadPublicInfo() {
    const data = await this.api.getCharactersCharacterId(this.characterId, { datasource: 'tranquility' });

    this.name = data.name;
    this.corporationId = data.corporation_id;
    this.allianceId = data.alliance_id ?? null;
    this.loaded = true;

    return data;
  }

  /**
   * Load the character's portrait images (various sizes).
   *
   * @async
   * @returns {Promise<Object>} Object containing portrait URLs.
   *
   * @example
   * const pic = await character.loadPortrait();
   * document.src = pic.px128x128;
   */
  async loadPortrait() {
    const data = await this.api.getCharactersCharacterIdPortrait(this.characterId, { datasource: 'tranquility' });
    this.portrait = data;
    return data;
  }

  /**
   * Get the character’s current in-game location (system/station).
   *
   * @async
   * @returns {Promise<Object>} Object with `solar_system_id` and optionally `station_id`.
   *
   * @throws {Error} If auth is missing or invalid.
   */
  async getLocation() {
    await this.auth.requireValidToken();
    return await this.api.getCharactersCharacterIdLocation(this.characterId, { datasource: 'tranquility' });
  }

  /**
   * Get the character’s current wallet balance (in ISK).
   *
   * @async
   * @returns {Promise<number>} Wallet balance in ISK.
   *
   * @throws {Error} If auth is missing or invalid.
   */
  async getWallet() {
    await this.ensureAuth();
    return await this.api.getCharactersCharacterIdWallet(this.characterId, { datasource: 'tranquility' });
  }

  // Add public/private methods as needed
}

module.exports = Character;
