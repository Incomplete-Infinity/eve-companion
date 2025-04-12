const ESI = require('eve_swagger_interface');
const IndustryJob = require('./IndustryJob');
const Facility = require('./Facility');
const AuthTokenManager = require('./AuthTokenManager');

/**
 * @class Industry
 * @classdesc Wrapper for industry-related endpoints in the EVE Online ESI API.
 */
export default class Industry {
  /**
   * @constructor
   * @param {Object|null} auth - Authentication object with a valid access token.
   */
  constructor(auth = null) {
    /** @type {Object|null} Auth token handler (must implement ensureValidToken) */
    this.auth = auth instanceof AuthTokenManager ? auth : null;

    /** @type {ESI.IndustryApi} */
    this.api = new ESI.IndustryApi();

    /** @type {IndustryJob[]} */
    this.characterJobs = [];

    /** @type {IndustryJob[]} */
    this.corporationJobs = [];

    /** @type {Facility[]} */
    this.facilities = [];

    /** @type {Object[]} */
    this.systemIndexes = [];
  }

/**
  * Ensure the token is valid before any secure ESI calls.
  *
  * @private
  * @throws {Error} If auth is missing or token is invalid.
  */
 async ensureAuth() {
   if (!this.auth) throw new Error('Auth required for calendar access');
   await this.auth.requireValidToken();
 }

  /**
   * Load industry jobs for an authenticated character.
   * @param {number} characterId - Character ID
   * @returns {Promise<IndustryJob[]>}
   */
  async loadCharacterJobs(characterId) {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdIndustryJobs(characterId, {
      datasource: 'tranquility',
      include_completed: true
    });

    this.characterJobs = data.map(j => new IndustryJob(j));
    return this.characterJobs;
  }

  /**
   * Load industry jobs for a corporation (requires director roles).
   * @param {number} corporationId - Corporation ID
   * @returns {Promise<IndustryJob[]>}
   */
  async loadCorporationJobs(corporationId) {
    await this.ensureAuth();

    const data = await this.api.getCorporationsCorporationIdIndustryJobs(corporationId, {
      datasource: 'tranquility',
      include_completed: true
    });

    this.corporationJobs = data.map(j => new IndustryJob(j));
    return this.corporationJobs;
  }

  /**
   * Load static facility data.
   * @returns {Promise<Facility[]>}
   */
  async loadFacilities() {
    const data = await this.api.getIndustryFacilities({ datasource: 'tranquility' });
    this.facilities = data.map(f => new Facility(f));
    return this.facilities;
  }

  /**
   * Load industry system indexes for cost calculations.
   * @returns {Promise<Object[]>}
   */
  async loadSystemIndexes() {
    const data = await this.api.getIndustrySystems({ datasource: 'tranquility' });
    this.systemIndexes = data;
    return data;
  }

  /**
   * Get a snapshot of loaded data as plain JSON.
   * @returns {Object}
   */
  toJSON() {
    return {
      characterJobs: this.characterJobs.map(j => j.toJSON()),
      corporationJobs: this.corporationJobs.map(j => j.toJSON()),
      facilities: this.facilities.map(f => f.toJSON?.() ?? f),
      systemIndexes: this.systemIndexes
    };
  }
}
