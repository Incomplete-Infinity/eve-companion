/**
 * @file Squad.js
 * @description Represents a squad within a fleet wing.
 */

/**
 * @class Squad
 * @classdesc A basic unit of a fleet wing in EVE Online.
 */
export default class Squad {
  /**
   * @constructor
   * @param {object} data
   * @param {number} data.squad_id - The unique ID of the squad.
   * @param {string} [data.name=null] - Optional squad name.
   */
  constructor({ squad_id, name = null }) {
    /** @type {number} */
    this.id = squad_id;

    /** @type {string|null} */
    this.name = name;
  }

  /**
   * Serializes the squad into a plain object.
   * @returns {object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name
    };
  }
}
