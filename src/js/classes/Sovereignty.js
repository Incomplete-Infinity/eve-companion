const ESI = require('eve_swagger_interface');
const Structure = require('./Structure');
const Alliance = require('./Alliance');
const Corporation = require('./Corporation');
const System = require('./System');
const Constellation = require('./Constellation');

class Sovereignty {
  constructor() {
    this.api = new ESI.SovereigntyApi();
    this.structures = [];
    this.map = [];
    this.campaigns = [];
  }

  async loadStructures() {
    const data = await this.api.getSovereigntyStructures({ datasource: 'tranquility' });
    this.structures = data.map(entry => new Structure(entry));
    return this.structures;
  }

  async loadMap() {
    const data = await this.api.getSovereigntyMap({ datasource: 'tranquility' });

    this.map = data.map(entry => ({
      system: new System({ system_id: entry.system_id }),
      alliance: entry.alliance_id ? new Alliance(entry.alliance_id) : null,
      corporation: entry.corporation_id ? new Corporation(entry.corporation_id) : null,
      factionId: entry.faction_id ?? null,
    }));

    return this.map;
  }

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

  toJSON() {
    return {
      structures: this.structures.map(s => s.toJSON()),
      map: this.map.map(entry => ({
        system: entry.system.toJSON(),
        alliance: entry.alliance?.toJSON() ?? null,
        corporation: entry.corporation?.toJSON() ?? null,
        factionId: entry.factionId
      })),
      campaigns: this.campaigns
    };
  }
}

module.exports = Sovereignty;
/*
const Sovereignty = require('./Sovereignty');
const sov = new Sovereignty();

await sov.loadMap();
await sov.loadCampaigns();
await sov.loadStructures();

console.log(sov.toJSON());
*/