const ESI = require("eve_swagger_interface");
const Division = require("./Division.js");
const Shareholder = require("./Shareholder.js");
const CorporationMember = require("./CorporationMember.js");
const Facility = require("./Facility.js");
const Starbase = require("./Starbase.js");
const Blueprint = require("./Blueprint.js");
const Medal = require("./Medal.js");
const Faction = require('./Faction.js'); // new
const AuthTokenManager = require('./AuthTokenManager');
/**
 * Represents a corporation in the EVE Online universe.
 * The Corporation class allows for the retrieval and management of corporation-specific data such as divisions,
 * members, shareholder information, standings, starbases, facilities, and much more.
 * This class interacts with the EVE Swagger Interface to fetch and manipulate corporation data.
 */
export default class Corporation extends Faction {
  /**
   * Creates an instance of the Corporation class.
   * @param {number} corporationId - The unique ID of the corporation.
   * @param {Object|null} [auth=null] - The authentication object required for API requests.
   */
  constructor(corporationId, auth = null) {
    super(); // Initializes the Faction class properties
    
    this.corporationId = corporationId;
    this.auth = auth;
    this.api = new ESI.CorporationApi();
    
    // Core data (initialized as null, will be loaded via methods)
    this.name = null;
    this.ticker = null;
    this.dateFounded = null;
    this.memberCount = null;
    this.ceoId = null;
    this.creatorId = null;
    this.allianceId = null;
    this.description = null;
    this.taxRate = null;
    this.url = null;
    this.factionId = null;
    this.homeStationId = null;

    // Related collections (to be loaded via methods)
    this.members = [];
    this.roles = [];
    this.titles = [];
    this.standings = [];
    this.shareholders = [];
  }

  /**
   * Loads corporation divisions (e.g., wallet and hangar) using the EVE Swagger Interface.
   * @returns {Promise<Object>} A promise that resolves to the loaded divisions.
   */
  async loadDivisions() {
    await this.ensureAuth();
    const { wallet, hangar } = await this.api.getCorporationsCorporationIdDivisions(this.corporationId, { datasource: "tranquility" });

    this.divisions = {
      wallet: wallet.map((d) => new Division(d)),
      hangar: hangar.map((d) => new Division(d)),
    };

    return this.divisions;
  }

  /**
   * Loads the facilities (e.g., stations) of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded facilities.
   */
  async loadFacilities() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdFacilities(this.corporationId, { datasource: "tranquility" });

    this.facilities = data.map((f) => new Facility(f));
    return this.facilities;
  }

  /**
   * Loads the starbases of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded starbases.
   */
  async loadStarbases() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdStarbases(this.corporationId, { datasource: "tranquility" });

    this.starbases = data.map((s) => new Starbase(s));
    return this.starbases;
  }

  /**
   * Loads details for a specific starbase.
   * @param {number} starbaseId - The ID of the starbase to load.
   * @param {number} systemId - The ID of the system where the starbase is located.
   * @returns {Promise<Object>} A promise that resolves to the details of the starbase.
   */
  async loadStarbaseDetails(starbaseId, systemId) {
    await this.ensureAuth();
    return await this.api.getCorporationsCorporationIdStarbasesStarbaseId(this.corporationId, starbaseId, {
      system_id: systemId,
      datasource: "tranquility",
    });
  }

  /**
   * Loads blueprints owned by the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded blueprints.
   */
  async loadBlueprints() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdBlueprints(this.corporationId, { datasource: "tranquility" });

    this.blueprints = data.map((b) => new Blueprint(b));
    return this.blueprints;
  }

  /**
   * Ensures that the corporation request is authenticated.
   * @throws {Error} Throws an error if authentication is missing or invalid.
   * @returns {Promise<void>} Resolves if authentication is valid.
   */
  async ensureAuth() {
    if (!this.auth)
      throw new Error("This corporation request requires authentication.");
    await this.auth.ensureValidToken();
  }

  /**
   * Loads basic information about the corporation, such as name, ticker, and member count.
   * @returns {Promise<Object>} A promise that resolves to the loaded corporation info.
   */
  async loadInfo() {
    const data = await this.api.getCorporationsCorporationId(this.corporationId, { datasource: "tranquility" });

    this.name = data.name;
    this.ticker = data.ticker;
    this.dateFounded = data.date_founded;
    this.memberCount = data.member_count;
    this.ceoId = data.ceo_id;
    this.creatorId = data.creator_id;
    this.allianceId = data.alliance_id ?? null;
    this.taxRate = data.tax_rate;
    this.url = data.url;
    this.factionId = data.faction_id ?? null;
    this.homeStationId = data.home_station_id ?? null;

    return data;
  }

  /**
   * Loads the corporation member limit.
   * @returns {Promise<number>} A promise that resolves to the member limit of the corporation.
   */
  async loadMemberLimit() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMembersLimit(this.corporationId, { datasource: "tranquility" });

    this.memberLimit = data;
    return data;
  }

  /**
   * Loads the tracking information for the corporation's members.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded member tracking information.
   */
  async loadMemberTracking() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMembertracking(this.corporationId, { datasource: "tranquility" });

    this.memberTracking = data.map(
      (entry) => new CorporationMember(entry.character_id, this.auth, {
        startDate: entry.start_date,
        locationId: entry.location_id,
        shipTypeId: entry.ship_type_id,
        logoffDate: entry.logoff_date,
      })
    );

    return this.memberTracking;
  }

  /**
   * Loads the roles assigned to the corporation's members.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded roles.
   */
  async loadRoles() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdRoles(this.corporationId, { datasource: "tranquility" });

    this.roles = data;
    return data;
  }

  /**
   * Loads the history of roles assigned to the corporation's members.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded role history.
   */
  async loadRolesHistory() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdRolesHistory(this.corporationId, { datasource: "tranquility" });

    this.rolesHistory = data;
    return data;
  }

  /**
   * Loads the shareholders of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded shareholders.
   */
  async loadShareholders() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdShareholders(this.corporationId, { datasource: "tranquility" });

    this.shareholders = data.map(s => new Shareholder(s.shareholder_id, this.auth, s.share_shares));
    return data;
  }

  /**
   * Loads the alliance history of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded alliance history.
   */
  async loadAllianceHistory() {
    const data = await this.api.getCorporationsCorporationIdAlliancehistory(this.corporationId, { datasource: "tranquility" });

    this.allianceHistory = data;
    return data;
  }

  /**
   * Loads the container logs for the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded container logs.
   */
  async loadContainerLogs() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdContainersLogs(this.corporationId, { datasource: "tranquility" });

    this.containerLogs = data;
    return data;
  }

  /**
   * Loads the icons associated with the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded corporation icons.
   */
  async loadIcons() {
    const data = await this.api.getCorporationsCorporationIdIcons(this.corporationId, { datasource: "tranquility" });

    this.icons = data;
    return data;
  }

  /**
   * Loads the medals of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded medals.
   */
  async loadMedals() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMedals(this.corporationId, { datasource: "tranquility" });

    this.medals = data.map(m => new Medal(m));
    return data;
  }

  /**
   * Loads the issued medals of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded issued medals.
   */
  async loadMedalsIssued() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMedalsIssued(this.corporationId, { datasource: "tranquility" });

    this.issuedMedals = data.map(m => new Medal(m));
    return data;
  }

  /**
   * Loads the structures of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded structures.
   */
  async loadStructures() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdStructures(this.corporationId, { datasource: "tranquility" });

    this.structures = data;
    return data;
  }

  /**
   * Loads the standings of the corporation.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded standings.
   */
  async loadStandings() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdStandings(this.corporationId, { datasource: "tranquility" });

    this.standings = data;
    return data;
  }

  /**
   * Loads the titles of the corporation's members.
   * @returns {Promise<Object[]>} A promise that resolves to the loaded titles.
   */
  async loadTitles() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdTitles(this.corporationId, { datasource: "tranquility" });

    this.titles = data;
    return data;
  }

  /**
   * Retrieves a list of NPC corporations.
   * @returns {Promise<Object[]>} A promise that resolves to a list of NPC corporations.
   */
  static async getNPCCorps() {
    const api = new ESI.CorporationApi();
    const data = await api.getCorporationsNpccorps({ datasource: "tranquility" });
    return data;
  }

  /**
   * Converts the Corporation instance into a plain JavaScript object.
   * @returns {Object} A plain JavaScript object representing the corporation.
   */
  toJSON() {
    return {
      icons: this.icons,
      medals: this.medals,
      issuedMedals: this.issuedMedals,
      roles: this.roles,
      rolesHistory: this.rolesHistory,
      memberTracking: this.memberTracking,
      structures: this.structures,
      containerLogs: this.containerLogs,
      corporationId: this.corporationId,
      name: this.name,
      ticker: this.ticker,
      dateFounded: this.dateFounded,
      memberCount: this.memberCount,
      ceoId: this.ceoId,
      creatorId: this.creatorId,
      allianceId: this.allianceId,
      taxRate: this.taxRate,
      url: this.url,
      factionId: this.factionId,
      homeStationId: this.homeStationId,
      members: this.members,
      titles: this.titles,
      standings: this.standings,
      shareholders: this.shareholders,
      divisions: this.divisions,
      facilities: this.facilities,
      starbases: this.starbases,
      blueprints: this.blueprints,
    };
  }
}
