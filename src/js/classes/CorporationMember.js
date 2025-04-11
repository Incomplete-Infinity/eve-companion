const Character = require('./Character');

class CorporationMember extends Character {
  constructor(characterId, auth = null, { startDate = null, locationId = null, shipTypeId = null, logoffDate = null } = {}) {
    super(characterId, auth);
    this.startDate = startDate;
    this.locationId = locationId;
    this.shipTypeId = shipTypeId;
    this.logoffDate = logoffDate;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      startDate: this.startDate,
      locationId: this.locationId,
      shipTypeId: this.shipTypeId,
      logoffDate: this.logoffDate
    };
  }
}

module.exports = CorporationMember;
