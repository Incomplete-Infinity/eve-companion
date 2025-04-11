class Item {
    constructor(typeId, itemId = null) {
      this.typeId = typeId;
      this.itemId = itemId; // Optional for dynamic items
      this.attributes = [];
      this.effects = [];
    }
  
    setAttributes(attributes) {
      this.attributes = attributes;
    }
  
    setEffects(effects) {
      this.effects = effects;
    }
  
    toJSON() {
      return {
        typeId: this.typeId,
        itemId: this.itemId,
        attributes: this.attributes.map(a => a.toJSON()),
        effects: this.effects.map(e => e.toJSON()),
      };
    }
  }
  
  module.exports = Item;
  