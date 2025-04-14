const Character = require('./Character');

/**
 * Represents a corporation member in the EVE Online universe.
 * A `CorporationMember` is a specific type of `Character` who is a member of a corporation.
 * This class adds additional properties such as start date, location, ship type, and logoff date.
 */
export default class CorporationMember extends Character {
  /**
   * Creates an instance of the CorporationMember class.
   * This class extends the Character class to include additional details specific to corporation membership.
   * @param {number} characterId - The unique ID of the character.
   * @param {Object|null} [auth=null] - The authentication object for the character.
   * @param {Object} memberData - Additional data specific to the corporation member.
   * @param {string|null} memberData.startDate - The start date of the member's corporation membership.
   * @param {number|null} memberData.locationId - The ID of the current location of the member.
   * @param {number|null} memberData.shipTypeId - The ID of the ship the member is currently flying.
   * @param {string|null} memberData.logoffDate - The logoff date of the member.
   */
  constructor(characterId, auth = null, { startDate = null, locationId = null, shipTypeId = null, logoffDate = null } = {}) {
    super(characterId, auth); // Call the parent class constructor
    /**
     * @type {string|null}
     * @description The start date of the member's corporation membership.
     */
    this.startDate = startDate;

    /**
     * @type {number|null}
     * @description The ID of the current location of the corporation member.
     */
    this.locationId = locationId;

    /**
     * @type {number|null}
     * @description The type ID of the ship the member is flying.
     */
    this.shipTypeId = shipTypeId;

    /**
     * @type {string|null}
     * @description The logoff date of the member.
     */
    this.logoffDate = logoffDate;
  }

  /**
   * Converts the CorporationMember instance into a plain JavaScript object.
   * This method serializes the member's data along with inherited character data.
   * @returns {Object} A plain JavaScript object representing the corporation member.
   */
  toJSON() {
    return {
      ...super.toJSON(), // Include properties from the parent Character class
      startDate: this.startDate,
      locationId: this.locationId,
      shipTypeId: this.shipTypeId,
      logoffDate: this.logoffDate
    };
  }
}
