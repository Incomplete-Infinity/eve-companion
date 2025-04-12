/**
 * @file PlanetaryInteraction.js
 * @description Manages a character's Planetary Interaction (PI) assets and schematics.
 * @requires eve_swagger_interface
 */

const ESI = require('eve_swagger_interface');

/**
 * @class PlanetaryInteraction
 * @classdesc Provides access to ESI endpoints related to PI (Planetary Interaction) for a character.
 */
export default class PlanetaryInteraction {
  /**
   * @param {number} characterId - The EVE character's ID.
   * @param {Object} auth - Auth object with access token and ensureValidToken().
   */
  constructor(characterId, auth) {
    /** @type {number} */
    this.characterId = characterId;

    /** @type {Object} */
    this.auth = auth;

    /** @type {ESI.PlanetaryInteractionApi} */
    this.api = new ESI.PlanetaryInteractionApi();

    /** @type {ESI.UniverseApi} */
    this.universe = new ESI.UniverseApi();

    /** @type {Object[]} */
    this.planets = [];

    /** @type {Map<number, Object>} */
    this.planetDetails = new Map();

    /** @type {Map<number, Object>} */
    this.schematics = new Map();
  }

  /**
   * Ensure auth token is available and valid.
   * @throws {Error} If no auth is provided.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('PI endpoints require auth');
    await this.auth.ensureValidToken();
  }

  /**
   * Load all PI planets owned by this character.
   * @returns {Promise<Object[]>} Array of planet summaries.
   */
  async loadPlanets() {
    await this.ensureAuth();
    this.planets = await this.api.getCharactersCharacterIdPlanets(this.characterId, {
      datasource: 'tranquility'
    });
    return this.planets;
  }

  /**
   * Load detailed information about a specific planet.
   * @param {number} planetId - The planet ID.
   * @returns {Promise<Object>} Planet layout and details.
   */
  async loadPlanetDetail(planetId) {
    await this.ensureAuth();
    if (this.planetDetails.has(planetId)) return this.planetDetails.get(planetId);

    const data = await this.api.getCharactersCharacterIdPlanetsPlanetId(
      this.characterId,
      planetId,
      { datasource: 'tranquility' }
    );

    this.planetDetails.set(planetId, data);
    return data;
  }

  /**
   * Load static planet metadata (planet type, position, system).
   * @param {number} planetId - The planet ID.
   * @returns {Promise<Object>} Planet metadata.
   */
  async loadPlanetMeta(planetId) {
    return await this.universe.getUniversePlanetsPlanetId(planetId, {
      datasource: 'tranquility'
    });
  }

  /**
   * Load schematic info by schematic ID.
   * @param {number} schematicId - The schematic ID.
   * @returns {Promise<Object>} Schematic input/output information.
   */
  async loadSchematic(schematicId) {
    if (this.schematics.has(schematicId)) return this.schematics.get(schematicId);

    const data = await this.api.getUniverseSchematicsSchematicId(schematicId, {
      datasource: 'tranquility'
    });

    this.schematics.set(schematicId, data);
    return data;
  }

  /**
   * Return JSON-safe object representation of stored data.
   * @returns {Object} Serialized PI data.
   */
  toJSON() {
    return {
      planets: this.planets,
      planetDetails: Object.fromEntries(this.planetDetails),
      schematics: Object.fromEntries(this.schematics)
    };
  }
}
