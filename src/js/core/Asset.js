const InventoryType = require('./InventoryType');

/**
 * @class Asset
 * @extends InventoryType
 * @classdesc Represents a specific owned item instance (from assets), including quantity, location, and status.
 */
export default class Asset extends InventoryType {
  /**
   * Construct an Asset from raw ESI asset data.
   *
   * @constructor
   * @param {Object} data - ESI asset object (single element from asset list).
   * @param {number} data.type_id - InventoryType ID (passed to InventoryType).
   * @param {number} data.item_id - Unique ID for this specific asset.
   * @param {number} data.location_id - Station, structure, ship, or container ID.
   * @param {string} data.location_flag - Internal location flag (e.g., 'Hangar', 'Cargo').
   * @param {string} data.location_type - Location context ('station', 'structure', 'other').
   * @param {number} data.quantity - Quantity of items in this stack.
   * @param {boolean} data.is_singleton - If true, represents a unique item (like BPO).
   * @param {boolean} data.is_blueprint_copy - If applicable, whether this is a BPC.
   * @param {boolean} data.locked - Whether the asset is locked in inventory.
   * @param {boolean} data.packaged - Whether the asset is still in a packaged state.
   */
  constructor(data) {
    super(data.type_id);

    /** @type {number} */
    this.itemId = data.item_id;

    /** @type {number} */
    this.locationId = data.location_id;

    /** @type {string} */
    this.locationFlag = data.location_flag;

    /** @type {string} */
    this.locationType = data.location_type;

    /** @type {number} */
    this.quantity = data.quantity;

    /** @type {boolean} */
    this.isSingleton = data.is_singleton;

    /** @type {boolean|undefined} */
    this.isBlueprintCopy = data.is_blueprint_copy ?? undefined;

    /** @type {boolean|undefined} */
    this.locked = data.locked ?? undefined;

    /** @type {boolean|undefined} */
    this.packaged = data.packaged ?? undefined;
  }

  /**
   * Serialize the asset to a plain object, including inherited inventory data.
   *
   * @returns {Object}
   */
  toJSON() {
    return {
      ...super.toJSON(),
      itemId: this.itemId,
      locationId: this.locationId,
      locationFlag: this.locationFlag,
      locationType: this.locationType,
      quantity: this.quantity,
      isSingleton: this.isSingleton,
      isBlueprintCopy: this.isBlueprintCopy,
      locked: this.locked,
      packaged: this.packaged
    };
  }
}
