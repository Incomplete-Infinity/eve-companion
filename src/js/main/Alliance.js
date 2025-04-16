const ESI = require("eve_swagger_interface");
/**
 * @type {ESI.AllianceApi}
 * @description Internal instance of the EVE Swagger Interface Alliance API class.
 */
const api = new ESI.AllianceApi();
/**
 * @class Alliance
 * @classdesc Represents an EVE Online alliance and provides methods to retrieve
 *            its metadata and member corporations from the EVE Swagger Interface (ESI).
 */
export default class Alliance {
  /**
   * Create a new Alliance instance.
   *
   * @constructor
   * @param {number|null} [allianceId=null] - The unique identifier of the alliance, if known.
   *                                          If not provided, must be set before calling instance methods.
   */
  constructor(allianceId = null) {
    /**
     * @type {number|null}
     * @description The alliance's unique ID in the EVE universe.
     */
    this.allianceId = allianceId;
this.api = api.getAlliancesAllianceId(allianceId);
    /** @type {string|null} Human-readable name of the alliance. */
    this.name = null;

    /** @type {string|null} Ticker symbol of the alliance. */
    this.ticker = null;

    /** @type {number|null} Corporation ID of the executor corp. */
    this.executorCorpId = null;

    /** @type {string|null} ISO 8601 date when the alliance was founded. */
    this.dateFounded = null;

    /** @type {number[]} List of corporation IDs that are members of the alliance. */
    this.corporations = [];
  }

  /**
   * Retrieve metadata for the alliance specified by `this.allianceId`.
   *
   * @async
   * @function
   * @returns {Promise<Object>} Resolves to the raw alliance info returned by ESI.
   *
   * @throws {Error} If `allianceId` is not set.
   *
   * @example
   * const alliance = new Alliance(99000006);
   * await alliance.loadInfo();
   * console.log(alliance.name);
   */
  async loadInfo() {
    if (!this.allianceId) throw new Error("Alliance ID is required");

    const data = await this.api.getAlliancesAllianceId(this.allianceId, {
      datasource: "tranquility",
    });
    this.name = data.name;
    this.ticker = data.ticker;
    this.executorCorpId = data.executor_corporation_id;
    this.dateFounded = data.date_founded;
    return data;
  }

  /**
   * Fetch a list of all corporation IDs that are part of this alliance.
   *
   * @async
   * @function
   * @returns {Promise<number[]>} Array of corporation IDs.
   *
   * @throws {Error} If `allianceId` is not set.
   *
   * @example
   * const alliance = new Alliance(99000006);
   * await alliance.loadCorporations();
   * console.log(alliance.corporations);
   */
  async loadCorporations() {
    if (!this.allianceId) throw new Error("Alliance ID is required");

    const data = await this.api.getAlliancesAllianceIdCorporations(
      this.allianceId,
      { datasource: "tranquility" }
    );
    this.corporations = data;
    return data;
  }

  /**
   * Static method to retrieve the IDs of all alliances in the EVE universe.
   *
   * @static
   * @async
   * @function
   * @returns {Promise<number[]>} Array of all alliance IDs.
   *
   * @example
   * const ids = await Alliance.getAllAllianceIds();
   */
  static async getAllAllianceIds() {
    const api = new ESI.AllianceApi();
    return await api.getAlliances({ datasource: "tranquility" });
  }

  /**
   * Static method to map alliance names to their respective IDs.
   * Note: This endpoint is deprecated by ESI but may still return useful results.
   *
   * @static
   * @async
   * @function
   * @param {string[]} names - Array of alliance names to look up.
   *
   * @returns {Promise<Object[]>} Array of name-to-ID mapping objects.
   *
   * @example
   * const results = await Alliance.getAllianceIdsByName(["Goonswarm Federation"]);
   * console.log(results); // [{ alliance_id: 1354830081, name: "Goonswarm Federation" }]
   */
  static async getAllianceIdsByName(names) {
    const api = new ESI.AllianceApi();
    const opts = { datasource: "tranquility", names };
    return await api.postAlliancesNames(opts); // deprecated
  }

  /**
   * Serialize the Alliance instance into a plain object.
   *
   * @function
   * @returns {Object} A JSON-safe object representation of this Alliance instance.
   *
   * @example
   * const json = alliance.toJSON();
   * console.log(JSON.stringify(json));
   */
  toJSON() {
    return {
      allianceId: this.allianceId,
      name: this.name,
      ticker: this.ticker,
      executorCorpId: this.executorCorpId,
      dateFounded: this.dateFounded,
      corporations: this.corporations,
    };
  }
}
