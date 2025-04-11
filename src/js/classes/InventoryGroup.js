class InventoryGroup {
    constructor({ group_id, name, category_id, published, types = [] }) {
      this.id = group_id;
      this.name = name;
      this.categoryId = category_id;
      this.published = published;
      this.typeIds = types;
    }
  
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
  
  module.exports = InventoryGroup;
  