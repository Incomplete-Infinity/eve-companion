const InventoryType = require('./InventoryType');

class Blueprint extends InventoryType {
  constructor({ item_id, location_flag, location_id, material_efficiency, quantity, runs, time_efficiency, type_id }) {
    super(type_id); // Fetches inventory type details separately
    this.itemId = item_id;
    this.locationId = location_id;
    this.locationFlag = location_flag;
    this.materialEfficiency = material_efficiency;
    this.timeEfficiency = time_efficiency;
    this.runs = runs;
    this.quantity = quantity;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      itemId: this.itemId,
      locationId: this.locationId,
      locationFlag: this.locationFlag,
      materialEfficiency: this.materialEfficiency,
      timeEfficiency: this.timeEfficiency,
      runs: this.runs,
      quantity: this.quantity
    };
  }
}

module.exports = Blueprint;
