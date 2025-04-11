const ESI = require('eve_swagger_interface');

class Alliance {
  constructor(allianceId = null) {
    this.allianceId = allianceId;
    this.api = new ESI.AllianceApi();

    this.name = null;
    this.ticker = null;
    this.executorCorpId = null;
    this.dateFounded = null;
    this.corporations = [];
  }

  async loadInfo() {
    if (!this.allianceId) throw new Error('Alliance ID is required');
    const data = await this.api.getAlliancesAllianceId(this.allianceId, { datasource: 'tranquility' });
    this.name = data.name;
    this.ticker = data.ticker;
    this.executorCorpId = data.executor_corporation_id;
    this.dateFounded = data.date_founded;
    return data;
  }

  async loadCorporations() {
    if (!this.allianceId) throw new Error('Alliance ID is required');
    const data = await this.api.getAlliancesAllianceIdCorporations(this.allianceId, { datasource: 'tranquility' });
    this.corporations = data;
    return data;
  }

  static async getAllAllianceIds() {
    const api = new ESI.AllianceApi();
    return await api.getAlliances({ datasource: 'tranquility' });
  }

  static async getAllianceIdsByName(names) {
    const api = new ESI.AllianceApi();
    const opts = { datasource: 'tranquility', names };
    return await api.postAlliancesNames(opts); // deprecated, fallback if needed
  }

  toJSON() {
    return {
      allianceId: this.allianceId,
      name: this.name,
      ticker: this.ticker,
      executorCorpId: this.executorCorpId,
      dateFounded: this.dateFounded,
      corporations: this.corporations
    };
  }
}

module.exports = Alliance;

/*
const Alliance = require('./Alliance');

(async () => {
  const a = new Alliance(99000006);
  await a.loadInfo();
  await a.loadCorporations();
  console.log(a.toJSON());
})();
*/