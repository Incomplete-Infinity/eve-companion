const ESI = require('eve_swagger_interface');

class InventoryType {
  constructor({ type_id, name, description, group_id, published, market_group_id }) {
    this.id = type_id;
    this.name = name;
    this.description = description;
    this.groupId = group_id;
    this.marketGroupId = market_group_id;
    this.published = published;
  }

  static async fromTypeId(typeId) {
    const api = new ESI.UniverseApi();
    const data = await api.getUniverseTypesTypeId(typeId, { datasource: 'tranquility' });
    return new InventoryType(typeId, data.name, data.group_id);
  }

  setDogma(dogmaItem) {
    this.dogma = dogmaItem;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      groupId: this.groupId,
      marketGroupId: this.marketGroupId,
      published: this.published
    };
  }
}

module.exports = InventoryType;