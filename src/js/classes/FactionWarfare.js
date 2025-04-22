const ESI = require('eve_swagger_interface');

/**
 * Represents a collection of data and statistics related to faction warfare in the EVE Online universe.
 * This class interacts with the EVE Swagger Interface to retrieve faction warfare statistics, factions, systems, and leaderboards,
 * as well as character and corporation statistics.
 */
export default class FactionWarfare {
  /**
   * Creates an instance of the FactionWarfare class.
   * Initializes properties to hold faction data, system data, statistics, and leaderboards.
   */
  constructor() {
    /**
     * @type {ESI.FactionWarfareApi}
     * @description Instance of the EVE Swagger Interface FactionWarfare API.
     */
    this.api = new ESI.FactionWarfareApi();

    /**
     * @type {Array}
     * @description The list of factions involved in faction warfare.
     */
    this.factions = [];

    /**
     * @type {Array}
     * @description The list of systems involved in faction warfare.
     */
    this.systems = [];

    /**
     * @type {Object|null}
     * @description The overall statistics for faction warfare.
     */
    this.stats = null;

    /**
     * @type {Object}
     * @description A collection of leaderboards for faction warfare.
     */
    this.leaderboards = {
      global: null,
      characters: null,
      corporations: null,
    };

    /**
     * @type {Map<number, Object>}
     * @description A map storing character statistics by character ID.
     */
    this.characterStats = new Map();

    /**
     * @type {Map<number, Object>}
     * @description A map storing corporation statistics by corporation ID.
     */
    this.corporationStats = new Map();
  }

  /**
   * Loads the overall faction warfare statistics from the EVE Swagger Interface API.
   * @returns {Promise<Object>} The faction warfare statistics.
   */
  async loadStats() {
    this.stats = await this.api.getFwStats({ datasource: 'tranquility' });
    return this.stats;
  }

  /**
   * Loads the list of factions involved in faction warfare from the EVE Swagger Interface API.
   * @returns {Promise<Array>} The list of factions.
   */
  async loadFactions() {
    this.factions = await this.api.getFwFactions({ datasource: 'tranquility' });
    return this.factions;
  }

  /**
   * Loads the list of systems involved in faction warfare from the EVE Swagger Interface API.
   * @returns {Promise<Array>} The list of systems.
   */
  async loadSystems() {
    this.systems = await this.api.getFwSystems({ datasource: 'tranquility' });
    return this.systems;
  }

  /**
   * Loads the faction warfare leaderboards for global, character, and corporation rankings from the EVE Swagger Interface API.
   * @returns {Promise<Object>} The leaderboards object containing global, character, and corporation leaderboards.
   */
  async loadLeaderboards() {
    this.leaderboards.global = await this.api.getFwLeaderboards({ datasource: 'tranquility' });
    this.leaderboards.characters = await this.api.getFwLeaderboardsCharacters({ datasource: 'tranquility' });
    this.leaderboards.corporations = await this.api.getFwLeaderboardsCorporations({ datasource: 'tranquility' });

    return this.leaderboards;
  }

  /**
   * Retrieves the faction warfare statistics for a specific character by their character ID.
   * If the stats are already loaded, returns them from memory.
   * @param {number} characterId - The character ID to retrieve the statistics for.
   * @returns {Promise<Object>} The character's faction warfare statistics.
   */
  async getCharacterStats(characterId) {
    if (this.characterStats.has(characterId)) return this.characterStats.get(characterId);

    const data = await this.api.getCharactersCharacterIdFwStats(characterId, {
      datasource: 'tranquility',
    });

    this.characterStats.set(characterId, data);
    return data;
  }

  /**
   * Retrieves the faction warfare statistics for a specific corporation by its corporation ID.
   * If the stats are already loaded, returns them from memory.
   * @param {number} corporationId - The corporation ID to retrieve the statistics for.
   * @returns {Promise<Object>} The corporation's faction warfare statistics.
   */
  async getCorporationStats(corporationId) {
    if (this.corporationStats.has(corporationId)) return this.corporationStats.get(corporationId);

    const data = await this.api.getCorporationsCorporationIdFwStats(corporationId, {
      datasource: 'tranquility',
    });

    this.corporationStats.set(corporationId, data);
    return data;
  }

  /**
   * Converts the faction warfare data into a plain JavaScript object.
   * This includes factions, systems, statistics, and leaderboards.
   * @returns {Object} A plain JavaScript object representing all faction warfare data.
   */
  toJSON() {
    return {
      factions: this.factions,
      systems: this.systems,
      stats: this.stats,
      leaderboards: this.leaderboards,
      characters: Object.fromEntries(this.characterStats),
      corporations: Object.fromEntries(this.corporationStats),
    };
  }
}