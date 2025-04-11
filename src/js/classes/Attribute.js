/**
 * @class Attribute
 * @classdesc Represents a dogma attribute for an EVE Online item or entity.
 * Used to express specific stats or modifiers, such as rate of fire, damage multiplier, etc.
 */
class Attribute {
  /**
   * Construct a new Attribute instance.
   *
   * @constructor
   * @param {Object} param0 - The attribute object, usually from ESI or derived data.
   * @param {number} param0.attribute_id - Unique attribute ID (EVE Dogma attribute).
   * @param {number} param0.value - Value of the attribute (numeric, possibly float).
   * @param {string|null} [param0.name=null] - Optional human-readable name.
   * @param {string|null} [param0.description=null] - Optional description of what the attribute does.
   * @param {number|null} [param0.unit_id=null] - Optional unit ID (e.g., meters, seconds).
   */
  constructor({
    attribute_id,
    value,
    name = null,
    description = null,
    unit_id = null,
  }) {
    /**
     * @type {number}
     * @description The dogma attribute ID.
     */
    this.id = attribute_id;

    /**
     * @type {number}
     * @description The value of the attribute.
     */
    this.value = value;

    /**
     * @type {string|null}
     * @description Human-readable name of the attribute, if available.
     */
    this.name = name;

    /**
     * @type {string|null}
     * @description Description of the attribute’s effect or meaning.
     */
    this.description = description;

    /**
     * @type {number|null}
     * @description Unit ID describing the value’s measurement type (e.g., meters, seconds).
     */
    this.unitId = unit_id;
  }

  /**
   * Serialize the attribute to a plain JSON-safe object.
   *
   * @returns {Object} Object with all defined attribute fields.
   */
  toJSON() {
    return {
      id: this.id,
      value: this.value,
      name: this.name,
      description: this.description,
      unitId: this.unitId,
    };
  }
}

module.exports = Attribute;
