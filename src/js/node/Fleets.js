const ESI = require('eve_swagger_interface');
const Fleet = require('./Fleet');

class Fleets {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.FleetsApi();
    this.fleet = null;
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Fleets API requires authentication');
    await this.auth.ensureValidToken();
  }

  async loadFleet() {
    await this.ensureAuth();
    const data = await this.api.getCharactersCharacterIdFleet(this.characterId, {
      datasource: 'tranquility'
    });

    this.fleet = new Fleet(data.fleet_id, this.auth);
    return this.fleet;
  }

  toJSON() {
    return {
      fleet: this.fleet?.toJSON() ?? null
    };
  }
}

module.exports = Fleets;
/*
const Fleets = require('./Fleets');

const fleets = new Fleets(characterId, auth);
const fleet = await fleets.loadFleet();

await fleet.loadInfo();
await fleet.loadWings();
await fleet.loadMembers();

console.log(fleet.toJSON());
*/