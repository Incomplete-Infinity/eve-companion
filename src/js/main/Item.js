/**
 * @class Item
 * @description Represents an in-game item with Dogma attributes and effects. Typically used for fittings or inventory.
 */
export default class Item {
  /**
   * @constructor
   * @param {number} typeId - The type ID of the item (e.g., Rifter = 587).
   * @param {number|null} [itemId=null] - Optional unique ID for a dynamic item instance.
   */
  constructor(typeId, itemId = null) {
    /** @type {number} */
    this.typeId = typeId;

    /** @type {number|null} */
    this.itemId = itemId;

    /** @type {Array<Object>} Dogma attribute objects */
    this.attributes = [];

    /** @type {Array<Object>} Dogma effect objects */
    this.effects = [];
  }

  /**
   * Set the item's Dogma attributes.
   * @param {Array<Object>} attributes - List of attribute objects with `toJSON()` support.
   */
  setAttributes(attributes) {
    this.attributes = attributes;
  }

  /**
   * Set the item's Dogma effects.
   * @param {Array<Object>} effects - List of effect objects with `toJSON()` support.
   */
  setEffects(effects) {
    this.effects = effects;
  }

  /**
   * Return a plain JSON representation of this item.
   * @returns {Object}
   */
  toJSON() {
    return {
      typeId: this.typeId,
      itemId: this.itemId,
      attributes: this.attributes.map(a => a.toJSON?.() ?? a),
      effects: this.effects.map(e => e.toJSON?.() ?? e)
    };
  }
}
