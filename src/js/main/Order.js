/**
 * @file Order.js
 * @description Represents a market order in EVE Online (buy or sell).
 */

/**
 * @class Order
 * @classdesc Wraps a market order object returned by the ESI Market endpoints.
 */
export default class Order {
  /**
   * @param {Object} data - Market order payload.
   * @param {number} data.order_id - Unique order ID.
   * @param {number} data.type_id - Type ID of the item.
   * @param {number} data.location_id - Location (station or structure) ID.
   * @param {number} data.volume_total - Total volume originally ordered.
   * @param {number} data.volume_remain - Remaining volume to be fulfilled.
   * @param {number} data.min_volume - Minimum volume required per transaction.
   * @param {number} data.price - Price per unit.
   * @param {boolean} data.is_buy_order - Whether this is a buy order.
   * @param {number} data.duration - Duration (in days) of the order.
   * @param {string} data.issued - ISO string timestamp of order creation.
   * @param {string} data.range - Visibility range (e.g., "station", "region").
   */
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
    /** @type {number} */
    this.id = order_id;

    /** @type {number} */
    this.typeId = type_id;

    /** @type {number} */
    this.locationId = location_id;

    /** @type {number} */
    this.volumeTotal = volume_total;

    /** @type {number} */
    this.volumeRemain = volume_remain;

    /** @type {number} */
    this.minVolume = min_volume;

    /** @type {number} */
    this.price = price;

    /** @type {boolean} */
    this.isBuy = is_buy_order;

    /** @type {number} */
    this.duration = duration;

    /** @type {string} */
    this.issued = issued;

    /** @type {string} */
    this.range = range;
  }

  /**
   * JSON-safe representation of the order.
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}
