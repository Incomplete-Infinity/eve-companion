const ESI = require("eve_swagger_interface");
const AuthTokenManager = require("../../core/AuthTokenManager");
const Asset = require("../../models/Asset");

/**
 * @class Assets
 * @classdesc Handles asset retrieval and lookup for a character or corporation using the EVE Online ESI API.
 * Supports pagination, location and name resolution, and filtering by type or location.
 */
export default class Assets {
  /**
   * Construct a new Assets instance for a character or corporation.
   *
   * @constructor
   * @param {number} ownerId - The character or corporation ID.
   * @param {Object} [options={}] - Optional parameters.
   * @param {AuthTokenManager|null} [options.auth=null] - Instance of AuthTokenManager for secure endpoints.
   * @param {boolean} [options.isCharacter=true] - Whether the owner is a character (true) or corporation (false).
   */
  constructor({ type_id, quantity, location_type, location_flag, location_id, item_id, is_singleton, is_blueprint_copy }) {
    /** @type {number} */
    this.typeId = type_id;

    /** @type {AuthTokenManager|null} */
    this.auth = auth instanceof AuthTokenManager ? auth : null;

    /** @type {boolean} */
    this.isCharacter = isCharacter;

    /** @type {ESI.AssetsApi} */
    this.api = new ESI.AssetsApi();

    /** @type {Object[]} */
    this.assets = [];
  }

  /**
   * Load all assets (paginated) for the owner. Automatically traverses all pages.
   *
   * @async
   * @param {number} [page=1] - Starting page (default is 1).
   * @returns {Promise<Object[]>} Array of all asset entries retrieved so far.
   *
   * @throws {Error} If auth is invalid or not provided.
   *
   * @example
   * const a = new Assets(charId, { auth });
   * await a.load();
   * console.log(a.assets.length);
   */
  async load(page = 1) {
    await this.auth.requireValidToken();

    const fn = this.isCharacter
      ? this.api.getCharactersCharacterIdAssets
      : this.api.getCorporationsCorporationIdAssets;

    const data = await fn(this.ownerId, { page, datasource: "tranquility" });
    this.assets.push(...data);

    if (data.length === 1000) {
      await this.load(page + 1);
    }

    return this.assets;
  }

  /**
   * Resolve locations for a set of asset item IDs.
   * 
   * @async
   * @param {number[]} itemIds - Array of item IDs to resolve.
   * @returns {Promise<Object[]>} Array of location objects with coordinates or parent containers.
   * 
   * @throws {Error} If auth is invalid or not provided.
   */
  async resolveLocations(itemIds) {
    await this.auth.requireValidToken();

    const fn = this.isCharacter
      ? this.api.postCharactersCharacterIdAssetsLocations
      : this.api.postCorporationsCorporationIdAssetsLocations;

    return await fn(this.ownerId, {
      item_ids: itemIds,
      datasource: "tranquility",
    });
  }

  /**
   * Resolve item names for assembled/renamed assets.
   * 
   * @async
   * @param {number[]} itemIds - Array of asset item IDs.
   * @returns {Promise<Object[]>} Array of resolved name objects.
   * 
   * @throws {Error} If auth is invalid or not provided.
   */
  async resolveNames(itemIds) {
    await this.auth.requireValidToken();

    const fn = this.isCharacter
      ? this.api.postCharactersCharacterIdAssetsNames
      : this.api.postCorporationsCorporationIdAssetsNames;

    return await fn(this.ownerId, {
      item_ids: itemIds,
      datasource: "tranquility",
    });
  }

  /**
   * Filter loaded assets by their location ID.
   *
   * @param {number} locationId - The location to filter for.
   * @returns {Object[]} Assets at the given location.
   */
  getByLocation(locationId) {
    return this.assets.filter((a) => a.location_id === locationId);
  }

  /**
   * Filter loaded assets by their type ID.
   *
   * @param {number} typeId - Type ID of the desired asset.
   * @returns {Object[]} Assets matching the given type.
   */
  getByType(typeId) {
    return this.assets.filter((a) => a.type_id === typeId);
  }

  /**
   * Return all loaded assets as a plain array.
   *
   * @returns {Object[]} Serialized asset list.
   */
  toJSON() {
    return this.assets;
  }
}
