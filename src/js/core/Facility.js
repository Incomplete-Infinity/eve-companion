/**
 * Represents a facility in the EVE Online universe.
 * A facility is an entity, such as a structure or station, controlled by an owner in a specific solar system and region.
 */
export default class Facility {
  /**
   * Creates an instance of the Facility class.
   * @param {Object} facilityData - The data for the facility.
   * @param {number} facilityData.facility_id - The unique ID of the facility.
   * @param {number} facilityData.owner_id - The ID of the owner of the facility.
   * @param {number} facilityData.region_id - The ID of the region where the facility is located.
   * @param {number} facilityData.solar_system_id - The ID of the solar system where the facility is located.
   * @param {number} facilityData.tax - The tax rate for using the facility.
   * @param {number} facilityData.type_id - The type ID of the facility, which corresponds to the type of structure or station.
   */
  constructor({
    facility_id,
    owner_id,
    region_id,
    solar_system_id,
    tax,
    type_id
  }) {
    /**
     * @type {number}
     * @description The unique ID of the facility.
     */
    this.id = facility_id;

    /**
     * @type {number}
     * @description The ID of the owner of the facility.
     */
    this.ownerId = owner_id;

    /**
     * @type {number}
     * @description The ID of the region where the facility is located.
     */
    this.regionId = region_id;

    /**
     * @type {number}
     * @description The ID of the solar system where the facility is located.
     */
    this.systemId = solar_system_id;

    /**
     * @type {number}
     * @description The tax rate for using the facility.
     */
    this.tax = tax;

    /**
     * @type {number}
     * @description The type ID of the facility, representing the type of structure or station.
     */
    this.typeId = type_id;
  }

  /**
   * Converts the facility instance into a plain JavaScript object.
   * This allows for easier serialization and manipulation of the facility data.
   * @returns {Object} The plain JavaScript object representing the facility.
   */
  toJSON() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      regionId: this.regionId,
      systemId: this.systemId,
      tax: this.tax,
      typeId: this.typeId
    };
  }
}
