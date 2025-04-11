const ESI = require('eve_swagger_interface');

class Clones {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.ClonesApi();
    this.implantApi = new ESI.ImplantsApi();

    this.jumpClones = [];
    this.homeLocation = null;
    this.lastCloneJumpDate = null;
    this.lastStationChangeDate = null;
    this.currentImplants = [];
    this.locationId = null;
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Clones API requires authentication');
    await this.auth.ensureValidToken();
  }

  async loadClones() {
    await this.ensureAuth();
    const data = await this.api.getCharactersCharacterIdClones(this.characterId, {
      datasource: 'tranquility'
    });

    this.jumpClones = data.jump_clones;
    this.homeLocation = data.home_location;
    this.lastCloneJumpDate = data.last_clone_jump_date;
    this.lastStationChangeDate = data.last_station_change_date;
    this.locationId = data.location_id;

    return data;
  }

  async loadImplants() {
    await this.ensureAuth();
    const data = await this.implantApi.getCharactersCharacterIdImplants(this.characterId, {
      datasource: 'tranquility'
    });

    this.currentImplants = data;
    return data;
  }

  async loadAll() {
    await Promise.all([this.loadClones(), this.loadImplants()]);
    return this.toJSON();
  }

  toJSON() {
    return {
      homeLocation: this.homeLocation,
      jumpClones: this.jumpClones,
      currentImplants: this.currentImplants,
      lastCloneJumpDate: this.lastCloneJumpDate,
      lastStationChangeDate: this.lastStationChangeDate,
      locationId: this.locationId
    };
  }
}

module.exports = Clones;
