const ESI = require('eve_swagger_interface');
const IndustryJob = require('./IndustryJob');
const Facility = require('./Facility');

class Industry {
  constructor(auth = null) {
    this.auth = auth;
    this.api = new ESI.IndustryApi();

    this.characterJobs = [];
    this.corporationJobs = [];
    this.facilities = [];
    this.systemIndexes = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Industry operations require auth');
    await this.auth.ensureValidToken();
  }

  async loadCharacterJobs(characterId) {
    await this.ensureAuth();
    const data = await this.api.getCharactersCharacterIdIndustryJobs(characterId, {
      datasource: 'tranquility',
      include_completed: true
    });

    this.characterJobs = data.map(j => new IndustryJob(j));
    return this.characterJobs;
  }

  async loadCorporationJobs(corporationId) {
    await this.ensureAuth();
    const data = await this.api.getCorporationsCorporationIdIndustryJobs(corporationId, {
      datasource: 'tranquility',
      include_completed: true
    });

    this.corporationJobs = data.map(j => new IndustryJob(j));
    return this.corporationJobs;
  }


  async loadFacilities() {
    const data = await this.api.getIndustryFacilities({ datasource: 'tranquility' });
    this.facilities = data.map(f => new Facility(f));
    return this.facilities;
  }

  async loadSystemIndexes() {
    const data = await this.api.getIndustrySystems({ datasource: 'tranquility' });
    this.systemIndexes = data;
    return data;
  }

  toJSON() {
    return {
      characterJobs: this.characterJobs.map(j => j.toJSON()),
      corporationJobs: this.corporationJobs.map(j => j.toJSON()),
      facilities: this.facilities,
      systemIndexes: this.systemIndexes
    };
  }
}

module.exports = Industry;
/*
const Industry = require('./Industry');

const industry = new Industry(auth);
await industry.loadCharacterJobs(characterId);
await industry.loadFacilities();

console.log(industry.toJSON());
*/  