class Attribute {
    constructor({
      attribute_id,
      value,
      name = null,
      description = null,
      unit_id = null,
    }) {
      this.id = attribute_id;
      this.value = value;
      this.name = name;
      this.description = description;
      this.unitId = unit_id;
    }
  
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
  