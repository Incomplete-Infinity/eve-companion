/**
 * Represents a division within an organization, such as a corporation or alliance.
 * Divisions are often used to categorize members, assets, or activities within the organization.
 */
export default class Division {
  /**
   * Creates an instance of the Division class.
   * @param {Object} divisionData - The data for the division.
   * @param {number} divisionData.division - The unique ID of the division.
   * @param {string} divisionData.name - The name of the division.
   */
  constructor({ division, name }) {
    /**
     * @type {number}
     * @description The unique ID of the division.
     */
    this.divisionId = division;

    /**
     * @type {string}
     * @description The name of the division.
     */
    this.name = name;
  }

  /**
   * Converts the division instance into a plain JavaScript object.
   * This method is typically used for serialization and easy data manipulation.
   * @returns {Object} A plain JavaScript object representing the division.
   */
  toJSON() {
    return {
      divisionId: this.divisionId,
      name: this.name
    };
  }
}
