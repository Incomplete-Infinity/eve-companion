class Order {
    constructor({
      order_id,
      type_id,
      location_id,
      volume_total,
      volume_remain,
      min_volume,
      price,
      is_buy_order,
      duration,
      issued,
      range
    }) {
      this.id = order_id;
      this.typeId = type_id;
      this.locationId = location_id;
      this.volumeTotal = volume_total;
      this.volumeRemain = volume_remain;
      this.minVolume = min_volume;
      this.price = price;
      this.isBuy = is_buy_order;
      this.duration = duration;
      this.issued = issued;
      this.range = range;
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  module.exports = Order;
  