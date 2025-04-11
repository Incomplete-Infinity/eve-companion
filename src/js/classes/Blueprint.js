const InventoryType = require('./InventoryType');

/**
 * @class Blueprint
 * @extends InventoryType
 * @classdesc Represents a blueprint (copy or original) owned by a character or corporation.
 * Includes manufacturing efficiencies, run counts, and container data.
 */
class Blueprint extends InventoryType {
  /**
   * Construct a new Blueprint instance from a type ID.
   *
   * @constructor
   * @param {number} typeId - Inventory type ID of the blueprint.
   */
  constructor(typeId) {
    super(typeId);

    /** @type {number|null} Unique item ID for this blueprint instance */
    this.itemId = null;

    /** @type {number|null} Structure, station, or container ID */
    this.locationId = null;

    /** @type {string|null} Location flag (e.g., "Hangar", "CorpSAG1") */
    this.locationFlag = null;

    /** @type {number|null} Material efficiency (e.g., 10 means -10% materials) */
    this.materialEfficiency = null;

    /** @type {number|null} Time efficiency (e.g., 20 means -20% build time) */
    this.timeEfficiency = null;

    /** @type {number|null} Remaining runs (null for BPOs) */
    this.runs = null;

    /** @type {number|null} Blueprint quantity indicator (-1 for BPO, >0 for BPC) */
    this.quantity = null;
  }

  /**
   * Load blueprint metadata from an ESI blueprint entry (e.g., from assets).
   *
   * @param {Object} data - Raw blueprint data from ESI.
   * @param {number} data.item_id
   * @param {number} data.location_id
   * @param {string} data.location_flag
   * @param {number} data.material_efficiency
   * @param {number} data.time_efficiency
   * @param {number} data.runs
   * @param {number} data.quantity
   */
  fromData({
    item_id,
    location_id,
    location_flag,
    material_efficiency,
    time_efficiency,
    runs,
    quantity
  }) {
    this.itemId = item_id;
    this.locationId = location_id;
    this.locationFlag = location_flag;
    this.materialEfficiency = material_efficiency;
    this.timeEfficiency = time_efficiency;
    this.runs = runs;
    this.quantity = quantity;
    return this;
  }

  /**
   * Convert the blueprint and its inherited fields to a JSON-safe object.
   *
   * @returns {Object}
   */
  toJSON() {
    return {
      ...super.toJSON(),
      itemId: this.itemId,
      locationId: this.locationId,
      locationFlag: this.locationFlag,
      materialEfficiency: this.materialEfficiency,
      timeEfficiency: this.timeEfficiency,
      runs: this.runs,
      quantity: this.quantity
    };
  }
}

module.exports = Blueprint;
