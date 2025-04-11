const ESI = require('eve_swagger_interface');
const InventoryType = require('./InventoryType');
const AuthTokenManager = require("./AuthTokenManager");

/**
 * @class Clones
 * @classdesc Represents a character’s jump clones, implants, and clone-related data using the EVE Swagger Interface.
 */
class Clones {
  /**
   * Construct a new Clones manager.
   *
   * @constructor
   * @param {number} characterId - EVE character ID.
   * @param {AuthTokenManager} auth - AuthTokenManager instance for authenticated access.
   */
  constructor(characterId, auth) {
    /** @type {number} Character ID */
    this.characterId = characterId;

    /** @type {AuthTokenManager|null} */
    this.auth = auth instanceof AuthTokenManager ? auth : null;

    /** @type {ESI.ClonesApi} */
    this.api = new ESI.ClonesApi();

    /** @type {ESI.ImplantsApi} */
    this.implantApi = new ESI.ImplantsApi();

    /** @type {Object[]} Jump clone definitions including location and implants */
    this.jumpClones = [];

    /** @type {Object|null} Home station or structure */
    this.homeLocation = null;

    /** @type {string|null} Last jump clone activation date (ISO string) */
    this.lastCloneJumpDate = null;

    /** @type {string|null} Last station change date (ISO string) */
    this.lastStationChangeDate = null;

    /** @type {number[]} Type IDs of active implants in current clone */
    this.currentImplants = await Promise.all(
      data.map(typeId => new InventoryType(typeId).load())
    );
    

    /** @type {number|null} Current clone’s location ID */
    this.locationId = null;
  }

  /**
   * Internal auth check before hitting secured endpoints.
   *
   * @private
   * @throws {Error} If no valid auth is present.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Clones API requires authentication');
    await this.auth.requireValidToken();
  }

  /**
   * Load all available jump clone data for the character.
   *
   * @async
   * @returns {Promise<Object>} Raw ESI response with jump clone data.
   *
   * @example
   * await clones.loadClones();
   * console.log(clones.jumpClones);
   */
  async loadClones() {
    await this.auth.requireValidToken();

    const data = await this.api.getCharactersCharacterIdClones(this.characterId, {
      datasource: 'tranquility'
    });

    this.jumpClones = data.jump_clones;
    this.homeLocation = data.home_location;
    this.lastCloneJumpDate = data.last_clone_jump_date;
    this.lastStationChangeDate = data.last_station_change_date;
    this.locationId = data.location_id;

    return data;
  }

  /**
   * Load the current clone's implant set (type IDs).
   *
   * @async
   * @returns {Promise<number[]>} Array of implant type IDs.
   *
   * @example
   * await clones.loadImplants();
   * console.log(clones.currentImplants);
   */
  const ESI = require('eve_swagger_interface');
  const InventoryType = require('./InventoryType');
  
  class Clones {
    constructor(characterId, auth) {
      this.characterId = characterId;
      this.auth = auth;
      this.api = new ESI.ClonesApi();
      this.implantApi = new ESI.ImplantsApi();
  
      this.jumpClones = [];
      this.homeLocation = null;
      this.lastCloneJumpDate = null;
      this.lastStationChangeDate = null;
      this.currentImplants = [];
      this.locationId = null;
    }
  
    async ensureAuth() {
      if (!this.auth) throw new Error('Clones API requires authentication');
      await this.auth.ensureValidToken();
    }
  
    async loadClones() {
      await this.ensureAuth();
      const data = await this.api.getCharactersCharacterIdClones(this.characterId, {
        datasource: 'tranquility'
      });
  
      this.jumpClones = data.jump_clones;
      this.homeLocation = data.home_location;
      this.lastCloneJumpDate = data.last_clone_jump_date;
      this.lastStationChangeDate = data.last_station_change_date;
      this.locationId = data.location_id;
  
      return data;
    }
  
    /**
     * Load the current clone's implants and resolve them to InventoryType objects.
     *
     * @returns {Promise<InventoryType[]>} Array of enriched implant objects.
     */
    async loadImplants() {
      await this.auth.requireValidToken();
  
      const ids = await this.implantApi.getCharactersCharacterIdImplants(this.characterId, {
        datasource: 'tranquility'
      });
  
      this.currentImplants = await Promise.all(
        ids.map(typeId => InventoryType.fromTypeId(typeId))
      );
  
      return this.currentImplants;
    }
  
    async loadAll() {
      await Promise.all([this.loadClones(), this.loadImplants()]);
      return this.toJSON();
    }
  
    toJSON() {
      return {
        homeLocation: this.homeLocation,
        jumpClones: this.jumpClones,
        currentImplants: this.currentImplants.map(i => i.toJSON()),
        lastCloneJumpDate: this.lastCloneJumpDate,
        lastStationChangeDate: this.lastStationChangeDate,
        locationId: this.locationId
      };
    }
  }
  
  module.exports = Clones;
  

  /**
   * Load both clones and implants in parallel and return merged data.
   *
   * @async
   * @returns {Promise<Object>} Merged clone and implant data.
   *
   * @example
   * const data = await clones.loadAll();
   * console.log(data.homeLocation);
   */
  async loadAll() {
    await Promise.all([this.loadClones(), this.loadImplants()]);
    return this.toJSON();
  }

  /**
   * Serialize all clone and implant data into a clean object.
   *
   * @returns {Object} Plain object representation of clone state.
   */
  toJSON() {
    return {
      homeLocation: this.homeLocation,
      jumpClones: this.jumpClones,
      currentImplants: this.currentImplants,
      lastCloneJumpDate: this.lastCloneJumpDate,
      lastStationChangeDate: this.lastStationChangeDate,
      locationId: this.locationId
    };
  }
}

module.exports = Clones;
