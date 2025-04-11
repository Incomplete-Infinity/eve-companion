const Wing = require('./Wing');
const FleetMember = require('./FleetMember');

class Fleet {
  constructor(fleetId, auth) {
    this.fleetId = fleetId;
    this.auth = auth;
    this.api = new (require('eve_swagger_interface')).FleetsApi();

    this.isFreeMove = false;
    this.isRegistered = false;
    this.voiceEnabled = false;
    this.wings = [];
    this.members = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Fleet requests require auth');
    await this.auth.ensureValidToken();
  }

  async loadInfo() {
    await this.ensureAuth();
    const data = await this.api.getFleetsFleetId(this.fleetId, {
      datasource: 'tranquility'
    });

    this.isFreeMove = data.is_free_move;
    this.isRegistered = data.is_registered;
    this.voiceEnabled = data.is_voice_enabled;
    return data;
  }

  async loadWings() {
    await this.ensureAuth();
    const data = await this.api.getFleetsFleetIdWings(this.fleetId, {
      datasource: 'tranquility'
    });

    this.wings = data.map(w => new Wing(w));
    return this.wings;
  }

  async loadMembers() {
    await this.ensureAuth();
    const data = await this.api.getFleetsFleetIdMembers(this.fleetId, {
      datasource: 'tranquility'
    });

    this.members = data.map(m => new FleetMember(m.character_id, this.auth, m));
    return this.members;
  }

  toJSON() {
    return {
      fleetId: this.fleetId,
      isFreeMove: this.isFreeMove,
      isRegistered: this.isRegistered,
      voiceEnabled: this.voiceEnabled,
      wings: this.wings.map(w => w.toJSON()),
      members: this.members.map(m => m.toJSON())
    };
  }
}

module.exports = Fleet;
