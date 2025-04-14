/**
 * @file Universe.js
 * @description Acts as a centralized cache and data-fetcher for all static universe data from ESI.
 *
 * @requires eve_swagger_interface
 * @requires InventoryCategory
 * @requires InventoryGroup
 * @requires InventoryType
 * @requires Planet
 * @requires System
 * @requires Constellation
 * @requires Faction
 * @requires Structure
 */

const ESI = require('eve_swagger_interface');

const InventoryCategory = require('../../js/classes/InventoryCategory');
const InventoryGroup = require('../../js/classes/InventoryGroup');
const InventoryType = require('./InventoryType');
const Planet = require('../navigation/celestials/Planet');
const System = require('./System');
const Constellation = require('./Constellation');
const Faction = require('../navigation/Faction');
const Structure = require('./Structure');

/**
 * @class Universe
 * @classdesc A high-level wrapper and in-memory cache for all ESI universe data endpoints.
 */
class Universe {
  constructor() {
    /** @type {ESI.UniverseApi} */
    this.api = new ESI.UniverseApi();

    /** @type {Map<number, InventoryCategory>} */
    this.categories = new Map();

    /** @type {Map<number, InventoryGroup>} */
    this.groups = new Map();

    /** @type {Map<number, InventoryType>} */
    this.types = new Map();

    /** @type {Map<number, Planet>} */
    this.planets = new Map();

    /** @type {Map<number, System>} */
    this.systems = new Map();

    /** @type {Map<number, Constellation>} */
    this.constellations = new Map();

    /** @type {Map<number, Faction>} */
    this.factions = new Map();

    /** @type {Map<number, Structure>} */
    this.structures = new Map();
  }

  /**
   * Fetch or return cached inventory category by ID.
   * @param {number} id
   * @returns {Promise<InventoryCategory>}
   */
  async getCategory(id) {
    if (!this.categories.has(id)) {
      const data = await this.api.getUniverseCategoriesCategoryId(id, { datasource: 'tranquility' });
      this.categories.set(id, new InventoryCategory(data));
    }
    return this.categories.get(id);
  }

  /**
   * Fetch or return cached inventory group by ID.
   * @param {number} id
   * @returns {Promise<InventoryGroup>}
   */
  async getGroup(id) {
    if (!this.groups.has(id)) {
      const data = await this.api.getUniverseGroupsGroupId(id, { datasource: 'tranquility' });
      this.groups.set(id, new InventoryGroup(data));
    }
    return this.groups.get(id);
  }

  /**
   * Fetch or return cached inventory type by ID.
   * @param {number} id
   * @returns {Promise<InventoryType>}
   */
  async getType(id) {
    if (!this.types.has(id)) {
      const data = await this.api.getUniverseTypesTypeId(id, { datasource: 'tranquility' });
      this.types.set(id, new InventoryType(data));
    }
    return this.types.get(id);
  }

  /**
   * Fetch or return cached planet by ID.
   * @param {number} id
   * @returns {Promise<Planet>}
   */
  async getPlanet(id) {
    if (!this.planets.has(id)) {
      const data = await this.api.getUniversePlanetsPlanetId(id, { datasource: 'tranquility' });
      this.planets.set(id, new Planet(data));
    }
    return this.planets.get(id);
  }

  /**
   * Fetch or return cached system by ID.
   * @param {number} id
   * @returns {Promise<System>}
   */
  async getSystem(id) {
    if (!this.systems.has(id)) {
      const data = await this.api.getUniverseSystemsSystemId(id, { datasource: 'tranquility' });
      this.systems.set(id, new System(data));
    }
    return this.systems.get(id);
  }

  /**
   * Fetch or return cached constellation by ID.
   * @param {number} id
   * @returns {Promise<Constellation>}
   */
  async getConstellation(id) {
    if (!this.constellations.has(id)) {
      const data = await this.api.getUniverseConstellationsConstellationId(id, { datasource: 'tranquility' });
      this.constellations.set(id, new Constellation(data));
    }
    return this.constellations.get(id);
  }

  /**
   * Fetch or return cached faction by ID.
   * Loads all factions once and filters.
   * @param {number} id
   * @returns {Promise<Faction>}
   */
  async getFaction(id) {
    if (this.factions.size === 0) {
      const all = await this.api.getUniverseFactions({ datasource: 'tranquility' });
      all.forEach(f => this.factions.set(f.faction_id, new Faction(f)));
    }
    return this.factions.get(id);
  }

  /**
   * Fetch or return cached structure by ID. Requires authentication.
   * @param {number} id
   * @param {object} auth - Auth token manager with `ensureValidToken()` and `accessToken`.
   * @returns {Promise<Structure>}
   */
  async getStructure(id, auth) {
    if (!this.structures.has(id)) {
      await auth.ensureValidToken();
      const data = await this.api.getUniverseStructuresStructureId(id, {
        datasource: 'tranquility',
        token: auth.accessToken
      });
      this.structures.set(id, new Structure(data));
    }
    return this.structures.get(id);
  }

  /**
   * Resolves IDs to their associated names and types.
   * @param {number[]} ids
   * @returns {Promise<object[]>}
   */
  async resolveIds(ids) {
    return await this.api.postUniverseNames(ids, {
      datasource: 'tranquility'
    });
  }

  /**
   * Returns all currently cached data.
   * @returns {object}
   */
  toJSON() {
    return {
      categories: [...this.categories.values()].map(x => x.toJSON?.() ?? x),
      groups: [...this.groups.values()].map(x => x.toJSON?.() ?? x),
      types: [...this.types.values()].map(x => x.toJSON?.() ?? x),
      planets: [...this.planets.values()].map(x => x.toJSON?.() ?? x),
      systems: [...this.systems.values()].map(x => x.toJSON?.() ?? x),
      constellations: [...this.constellations.values()].map(x => x.toJSON?.() ?? x),
      factions: [...this.factions.values()].map(x => x.toJSON?.() ?? x),
      structures: [...this.structures.values()].map(x => x.toJSON?.() ?? x),
    };
  }
}

module.exports = Universe;

/**
 * Example usage:
 * const Universe = require('./Universe');
 * const uni = new Universe();
 *
 * const rifter = await uni.getType(587);         // Rifter type
 * const jita = await uni.getSystem(30000142);    // Jita system
 * console.log(jita.name, rifter.name);
 */
