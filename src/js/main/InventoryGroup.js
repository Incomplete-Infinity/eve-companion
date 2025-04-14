/**
 * Represents an inventory group in the EVE universe (e.g., Frigates, Cruisers).
 * Each group belongs to a category and may contain multiple type IDs.
 */
export default class InventoryGroup {
  /**
   * Create an InventoryGroup instance.
   * @param {Object} data - Group metadata from ESI.
   * @param {number} data.group_id - Unique group ID.
   * @param {string} data.name - Human-readable group name.
   * @param {number} data.category_id - ID of the parent inventory category.
   * @param {boolean} data.published - Whether the group is visible to users.
   * @param {number[]} [data.types=[]] - List of type IDs in this group.
   */
  constructor({ group_id, name, category_id, published, types = [] }) {
    /** @type {number} Unique group ID */
    this.id = group_id;

    /** @type {string} Display name for this group */
    this.name = name;

    /** @type {number} ID of the parent category (e.g., Ship, Module) */
    this.categoryId = category_id;

    /** @type {boolean} Whether this group is published to the market */
    this.published = published;

    /** @type {number[]} List of inventory type IDs in this group */
    this.typeIds = types;
  }

  /**
   * Serialize the InventoryGroup instance for storage or transport.
   * @returns {Object} JSON-safe representation
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      categoryId: this.categoryId,
      published: this.published,
      typeIds: this.typeIds
    };
  }
}
