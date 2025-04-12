/**
 * @class Label
 * @description Represents a mail label used in the EVE Online mail system.
 */
export default class Label {
  /**
   * @constructor
   * @param {Object} data
   * @param {number} data.label_id - Unique ID for the label
   * @param {string} data.name - The label name (e.g., "Important", "Intel")
   * @param {string} data.color - Hex color string (e.g., "#FF0000")
   */
  constructor({ label_id, name, color }) {
    /** @type {number} */
    this.labelId = label_id;

    /** @type {string} */
    this.name = name;

    /** @type {string} */
    this.color = color;
  }

  /**
   * Converts the label to a JSON-serializable object.
   * @returns {Object}
   */
  toJSON() {
    return {
      labelId: this.labelId,
      name: this.name,
      color: this.color
    };
  }
}
