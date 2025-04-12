/**
 * @file Structure.js
 * @description Represents a structure in the EVE Online universe and fetches its data from the ESI API.
 * 
 * @requires eve_swagger_interface
 */

const ESI = require("eve_swagger_interface");

/**
 * @class Structure
 * @classdesc A player-owned structure like citadels or engineering complexes.
 */
export default class Structure {
  /**
   * @constructor
   * @param {number} structureId - The structure's unique ID.
   */
  constructor(structureId) {
    /** @type {number} */
    this.structureId = structureId;

    /** @type {ESI.UniverseApi} */
    this.api = new ESI.UniverseApi();

    /** @type {?object} */
    this.data = null;
  }

  /**
   * Fetch structure data from the ESI API.
   * @returns {Promise<object>} Structure data object.
   */
  async fetch() {
    if (!this.structureId) throw new Error('Structure ID is required.');
    this.data = await this.api.getUniverseStructuresStructureId(this.structureId, {
      datasource: "tranquility"
    });
    return this.data;
  }

  /**
   * Optional serializer for structure data.
   * @returns {object|null}
   */
  toJSON() {
    return this.data;
  }
}
