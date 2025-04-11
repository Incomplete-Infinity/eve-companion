class MarketGroup {
    constructor({ market_group_id, name, description, parent_group_id = null, types = [] }) {
      this.id = market_group_id;
      this.name = name;
      this.description = description;
      this.parentId = parent_group_id;
      this.typeIds = types;
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        parentId: this.parentId,
        typeIds: this.typeIds
      };
    }
  }
  
  module.exports = MarketGroup;
  