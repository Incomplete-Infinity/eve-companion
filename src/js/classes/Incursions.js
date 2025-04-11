const ESI = require('eve_swagger_interface');

class Incursions {
  constructor() {
    this.api = new ESI.IncursionsApi();
    this.active = [];
  }

  async load() {
    const data = await this.api.getIncursions({ datasource: 'tranquility' });
    this.active = data;
    return data;
  }

  getByConstellation(constellationId) {
    return this.active.find(i => i.constellation_id === constellationId);
  }

  getByStagingSystem(systemId) {
    return this.active.find(i => i.staging_solar_system_id === systemId);
  }

  getActiveSystems() {
    return this.active.map(i => i.staging_solar_system_id);
  }

  toJSON() {
    return this.active;
  }
}

module.exports = Incursions;
/*
const Incursions = require('./Incursions');
const incursions = new Incursions();

await incursions.load();
console.log(incursions.getByStagingSystem(30000142)); // System ID
*/