/**
 * @class InventoryCategory
 * @classdesc Represents a top-level inventory category in the EVE universe (e.g., Ships, Modules, Skills).
 * Used to group InventoryGroups within the category.
 */
export default class InventoryCategory {
  /**
   * Constructs an InventoryCategory instance.
   * @param {Object} data - ESI API response object.
   * @param {number} data.category_id - Unique ID for the category.
   * @param {string} data.name - Display name of the category.
   * @param {boolean} data.published - Indicates if the category is published/visible.
   * @param {number[]} [data.groups=[]] - List of group IDs belonging to this category.
   */
  constructor({ category_id, name, published, groups = [] }) {
    /** @type {number} Unique category ID */
    this.id = category_id;

    /** @type {string} Name of the category */
    this.name = name;

    /** @type {boolean} Visibility flag */
    this.published = published;

    /** @type {number[]} Group IDs that belong to this category */
    this.groupIds = groups;
  }

  /**
   * Converts the category to a JSON-safe object.
   * @returns {Object} JSON-serializable representation
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      published: this.published,
      groupIds: this.groupIds
    };
  }
}
