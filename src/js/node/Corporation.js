const ESI = require("eve_swagger_interface");
const Division = require("./Division");
const Shareholder = require("./Shareholder");
const CorporationMember = require("./CorporationMember");
const Facility = require("./Facility");
const Starbase = require("./Starbase");
const Blueprint = require("./Blueprint");
const Medal = require("./Medal.js");
const Faction = require('./Faction'); // new

class Corporation extends Faction {
  constructor(corporationId, auth = null) {
    super(); // We'll enrich faction fields later, for now init blank

    this.corporationId = corporationId;
    this.auth = auth;
    this.api = new ESI.CorporationApi();
    
    // Core data
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
  async loadDivisions() {
    await this.ensureAuth();
    const { wallet, hangar } =
      await this.api.getCorporationsCorporationIdDivisions(this.corporationId, {
        datasource: "tranquility",
      });

    this.divisions = {
      wallet: wallet.map((d) => new Division(d)),
      hangar: hangar.map((d) => new Division(d)),
    };

    return this.divisions;
  }
  async loadFacilities() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdFacilities(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.facilities = data.map((f) => new Facility(f));
    return this.facilities;
  }
  async loadStarbases() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdStarbases(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.starbases = data.map((s) => new Starbase(s));
    return this.starbases;
  }
  async loadStarbaseDetails(starbaseId, systemId) {
    await this.ensureAuth();
    return await this.api.getCorporationsCorporationIdStarbasesStarbaseId(
      this.corporationId,
      starbaseId,
      {
        system_id: systemId,
        datasource: "tranquility",
      }
    );
  }
  async loadBlueprints() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdBlueprints(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.blueprints = data.map((b) => new Blueprint(b));
    return this.blueprints;
  }
  async ensureAuth() {
    if (!this.auth)
      throw new Error("This corporation request requires authentication.");
    await this.auth.ensureValidToken();
  }
  async loadInfo() {
    const data = await this.api.getCorporationsCorporationId(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

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

  async loadMemberLimit() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMembersLimit(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.memberLimit = data;
    return data;
  }
  async loadMemberTracking() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMembertracking(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.memberTracking = data.map(
      (entry) =>
        new Member(entry.character_id, this.auth, {
          startDate: entry.start_date,
          locationId: entry.location_id,
          shipTypeId: entry.ship_type_id,
          logoffDate: entry.logoff_date,
        })
    );

    return this.memberTracking;
  }

  async loadRoles() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdRoles(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.roles = data;
    return data;
  }
  async loadRolesHistory() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdRolesHistory(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.rolesHistory = data;
    return data;
  }

  async loadShareholders() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdShareholders(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.shareholders = data.map(s => new Shareholder(s.shareholder_id, this.auth, s.share_shares));
    return data;
  }
  async loadAllianceHistory() {
    const data = await this.api.getCorporationsCorporationIdAlliancehistory(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.allianceHistory = data;
    return data;
  }

  async loadContainerLogs() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdContainersLogs(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.containerLogs = data;
    return data;
  }

  async loadIcons() {
    const data = await this.api.getCorporationsCorporationIdIcons(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.icons = data;
    return data;
  }
  async loadMedals() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMedals(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.medals = data.map(m => new Medal(m));
    return data;
  }
  async loadMedalsIssued() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdMedalsIssued(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.issuedMedals = data.map(m => new Medal(m));
    return data;
  }
  async loadStructures() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdStructures(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.structures = data;
    return data;
  }

  async loadStandings() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdStandings(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.standings = data;
    return data;
  }

  async loadTitles() {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdTitles(
      this.corporationId,
      {
        datasource: "tranquility",
      }
    );

    this.titles = data;
    return data;
  }
  static async getNPCCorps() {
    const api = new ESI.CorporationApi();
    const data = await api.getCorporationsNpccorps({
      datasource: "tranquility",
    });
    return data;
  }

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

module.exports = Corporation;

/*
const Corporation = require('./Corporation');

const corp = new Corporation(98000001, auth);
await corp.loadInfo();
await corp.loadShareholders();
console.log(corp.toJSON());
*/
