const ESI = require('eve_swagger_interface');

class Wars {
  constructor() {
    this.api = new ESI.WarsApi();
    this.wars = new Map(); // war_id → war object
  }

  async loadRecent(limit = 10) {
    const ids = await this.api.getWars({ datasource: 'tranquility' });
    const recent = ids.slice(0, limit);

    const loaded = await Promise.all(
      recent.map(id => this.api.getWarsWarId(id, { datasource: 'tranquility' }))
    );

    loaded.forEach(war => this.wars.set(war.id, war));
    return loaded;
  }

  async loadWar(warId) {
    if (this.wars.has(warId)) return this.wars.get(warId);
    const war = await this.api.getWarsWarId(warId, { datasource: 'tranquility' });
    this.wars.set(warId, war);
    return war;
  }

  toJSON() {
    return Object.fromEntries(this.wars);
  }
}

module.exports = Wars;
/*
const Wars = require('./Wars');
const wars = new Wars();

await wars.loadRecent(5);
console.log(wars.toJSON());
*/