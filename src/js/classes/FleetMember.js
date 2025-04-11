const Character = require('./Character');

class FleetMember extends Character {
  constructor(characterId, auth = null, {
    role = null,
    shipTypeId = null,
    solarSystemId = null,
    stationId = null,
    joinTime = null,
    wingId = null,
    squadId = null
  } = {}) {
    super(characterId, auth);
    this.role = role;
    this.shipTypeId = shipTypeId;
    this.solarSystemId = solarSystemId;
    this.stationId = stationId;
    this.joinTime = joinTime;
    this.wingId = wingId;
    this.squadId = squadId;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      role: this.role,
      shipTypeId: this.shipTypeId,
      solarSystemId: this.solarSystemId,
      stationId: this.stationId,
      joinTime: this.joinTime,
      wingId: this.wingId,
      squadId: this.squadId
    };
  }
}

module.exports = FleetMember;
