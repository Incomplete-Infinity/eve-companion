/**
 * @file Sovereignty.js
 * @description Handles sovereignty structures, map ownership, and campaigns.
 * 
 * @requires eve_swagger_interface
 * @requires ./Structure
 * @requires ./Alliance
 * @requires ./Corporation
 * @requires ../locations/System
 * @requires ./Constellation
 */

const ESI = require('eve_swagger_interface');
const Structure = require('./Structure');
const Alliance = require('./Alliance');
const Corporation = require('./Corporation');
const System = require('../locations/System');
const Constellation = require('./Constellation');

/**
 * @class Sovereignty
 * @classdesc Provides access to sovereignty structures, the sovereignty map, and active campaigns.
 */
export default class Sovereignty {
  constructor() {
    /** @type {ESI.SovereigntyApi} */
    this.api = new ESI.SovereigntyApi();

    /** @type {Structure[]} */
    this.structures = [];

    /** @type {Array<{system: System, alliance: Alliance|null, corporation: Corporation|null, factionId: number|null}>} */
    this.map = [];

    /** @type {Array<object>} */
    this.campaigns = [];
  }

  /**
   * Loads all sovereignty structures.
   * @returns {Promise<Structure[]>}
   */
  async loadStructures() {
    const data = await this.api.getSovereigntyStructures({ datasource: 'tranquility' });
    this.structures = data.map(entry => new Structure(entry));
    return this.structures;
  }

  /**
   * Loads the sovereignty map, resolving owners by alliance, corporation, or faction.
   * @returns {Promise<Array>}
   */
  async loadMap() {
    const data = await this.api.getSovereigntyMap({ datasource: 'tranquility' });

    this.map = data.map(entry => ({
      system: new System({ system_id: entry.system_id }),
      alliance: entry.alliance_id ? new Alliance(entry.alliance_id) : null,
      corporation: entry.corporation_id ? new Corporation(entry.corporation_id) : null,
      factionId: entry.faction_id ?? null
    }));

    return this.map;
  }

  /**
   * Loads active sovereignty campaigns (contests for ownership).
   * @returns {Promise<Array>}
   */
  async loadCampaigns() {
    const data = await this.api.getSovereigntyCampaigns({ datasource: 'tranquility' });

    this.campaigns = data.map(entry => ({
      ...entry,
      constellation: new Constellation({ constellation_id: entry.constellation_id }),
      attackersScore: entry.attackers_score,
      defendersScore: entry.defenders_score,
      structureId: entry.structure_id,
      startTime: entry.start_time
    }));

    return this.campaigns;
  }

  /**
   * Converts the sovereignty state into a serializable structure.
   * @returns {object}
   */
  toJSON() {
    return {
      structures: this.structures.map(s => s.toJSON?.() ?? s),
      map: this.map.map(entry => ({
        system: entry.system.toJSON?.() ?? entry.system,
        alliance: entry.alliance?.toJSON?.() ?? null,
        corporation: entry.corporation?.toJSON?.() ?? null,
        factionId: entry.factionId
      })),
      campaigns: this.campaigns
    };
  }
}
