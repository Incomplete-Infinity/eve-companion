const Character = require('./Character');

/**
 * @class FleetMember
 * @extends Character
 * @classdesc Represents an individual character within a fleet, extending Character with fleet-specific metadata.
 *
 * @property {string|null} role - Fleet role (e.g., fleet_commander, squad_member).
 * @property {number|null} shipTypeId - Type ID of the ship the member is currently flying.
 * @property {number|null} solarSystemId - ID of the solar system the member is in.
 * @property {number|null} stationId - ID of the station the member is docked at, if any.
 * @property {string|null} joinTime - ISO timestamp of when the member joined the fleet.
 * @property {number|null} wingId - ID of the wing the member is in.
 * @property {number|null} squadId - ID of the squad the member is in.
 *
 * @requires ./Character
 */
export default class FleetMember extends Character {
  /**
   * Create a new FleetMember instance.
   *
   * @param {number} characterId - EVE character ID.
   * @param {Object|null} auth - Optional auth handler for extended API access.
   * @param {Object} [metadata={}] - Fleet metadata block.
   * @param {string|null} [metadata.role=null] - Fleet-assigned role.
   * @param {number|null} [metadata.shipTypeId=null] - Type ID of current ship.
   * @param {number|null} [metadata.solarSystemId=null] - Current solar system ID.
   * @param {number|null} [metadata.stationId=null] - Current station ID (if docked).
   * @param {string|null} [metadata.joinTime=null] - ISO-8601 timestamp of fleet join time.
   * @param {number|null} [metadata.wingId=null] - Wing ID the member belongs to.
   * @param {number|null} [metadata.squadId=null] - Squad ID the member belongs to.
   */
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

  /**
   * Serialize the fleet member including inherited character data.
   *
   * @returns {Object} JSON-safe structure.
   */
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
