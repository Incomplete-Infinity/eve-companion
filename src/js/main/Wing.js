/**
 * @file Wing.js
 * @description Represents a Wing within an EVE Online fleet, containing multiple squads.
 * @requires ./Squad
 */

const Squad = require('./Squad');

/**
 * @class Wing
 * @classdesc Encapsulates a fleet wing structure, which includes a unique wing ID,
 * a name (optional), and one or more Squad instances.
 */
export default class Wing {
  /**
   * @summary Creates a Wing instance.
   * 
   * @param {Object} wingData - Raw wing data object.
   * @param {number} wingData.wing_id - The unique identifier for this wing.
   * @param {string} [wingData.name=null] - The name of the wing, if available.
   * @param {Array<Object>} [wingData.squads=[]] - Array of raw squad data to be parsed into Squad instances.
   */
  constructor({ wing_id, name = null, squads = [] }) {
    /**
     * @type {number}
     * @description Unique identifier for the wing.
     */
    this.id = wing_id;

    /**
     * @type {string|null}
     * @description Optional human-readable name of the wing.
     */
    this.name = name;

    /**
     * @type {Squad[]}
     * @description List of Squad objects belonging to this wing.
     */
    this.squads = squads.map(s => new Squad(s));
  }

  /**
   * @summary Serializes the Wing instance into a plain object.
   * 
   * @returns {Object} A plain JSON-compatible object representation of the wing.
   * @returns {number} return.id - Wing ID.
   * @returns {string|null} return.name - Wing name.
   * @returns {Array<Object>} return.squads - Array of serialized squad objects.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      squads: this.squads.map(s => s.toJSON())
    };
  }
}
