class InventoryCategory {
    constructor({ category_id, name, published, groups = [] }) {
      this.id = category_id;
      this.name = name;
      this.published = published;
      this.groupIds = groups;
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        published: this.published,
        groupIds: this.groupIds
      };
    }
  }
  
  module.exports = InventoryCategory;
  