const ESI = require('eve_swagger_interface');

class FactionWarfare {
  constructor() {
    this.api = new ESI.FactionWarfareApi();

    this.factions = [];
    this.systems = [];
    this.stats = null;
    this.leaderboards = {
      global: null,
      characters: null,
      corporations: null,
    };

    this.characterStats = new Map();
    this.corporationStats = new Map();
  }

  async loadStats() {
    this.stats = await this.api.getFwStats({ datasource: 'tranquility' });
    return this.stats;
  }

  async loadFactions() {
    this.factions = await this.api.getFwFactions({ datasource: 'tranquility' });
    return this.factions;
  }

  async loadSystems() {
    this.systems = await this.api.getFwSystems({ datasource: 'tranquility' });
    return this.systems;
  }

  async loadLeaderboards() {
    this.leaderboards.global = await this.api.getFwLeaderboards({ datasource: 'tranquility' });
    this.leaderboards.characters = await this.api.getFwLeaderboardsCharacters({ datasource: 'tranquility' });
    this.leaderboards.corporations = await this.api.getFwLeaderboardsCorporations({ datasource: 'tranquility' });

    return this.leaderboards;
  }

  async getCharacterStats(characterId) {
    if (this.characterStats.has(characterId)) return this.characterStats.get(characterId);

    const data = await this.api.getCharactersCharacterIdFwStats(characterId, {
      datasource: 'tranquility',
    });

    this.characterStats.set(characterId, data);
    return data;
  }

  async getCorporationStats(corporationId) {
    if (this.corporationStats.has(corporationId)) return this.corporationStats.get(corporationId);

    const data = await this.api.getCorporationsCorporationIdFwStats(corporationId, {
      datasource: 'tranquility',
    });

    this.corporationStats.set(corporationId, data);
    return data;
  }

  toJSON() {
    return {
      factions: this.factions,
      systems: this.systems,
      stats: this.stats,
      leaderboards: this.leaderboards,
      characters: Object.fromEntries(this.characterStats),
      corporations: Object.fromEntries(this.corporationStats),
    };
  }
}

module.exports = FactionWarfare;

/*
const FactionWarfare = require('./FactionWarfare');
const fw = new FactionWarfare();

await fw.loadFactions();
await fw.loadSystems();
await fw.getCharacterStats(123456789);
await fw.getCorporationStats(987654321);

console.log(fw.toJSON());
*/