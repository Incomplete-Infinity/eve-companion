/**
 * @file Notification.js
 * @description Represents a notification object returned by the ESI API.
 */

/**
 * @class Notification
 * @classdesc Wraps a notification received by a character or entity.
 */
export default class Notification {
  /**
   * @param {Object} data
   * @param {number} data.notification_id - Unique notification ID.
   * @param {string} data.type - Notification type (e.g., "CorpWarDeclared").
   * @param {number} data.sender_id - ID of the sender (character, corp, etc.).
   * @param {string} data.sender_type - Type of sender ("character", "corporation", etc.).
   * @param {string} data.timestamp - ISO timestamp when the notification was sent.
   * @param {boolean} [data.is_read=false] - Whether the notification has been read.
   */
  constructor({
    notification_id,
    type,
    sender_id,
    sender_type,
    timestamp,
    is_read = false
  }) {
    /** @type {number} */
    this.id = notification_id;

    /** @type {string} */
    this.type = type;

    /** @type {number} */
    this.senderId = sender_id;

    /** @type {string} */
    this.senderType = sender_type;

    /** @type {string} */
    this.timestamp = timestamp;

    /** @type {boolean} */
    this.read = is_read;
  }

  /**
   * Mark this notification as read.
   */
  markRead() {
    this.read = true;
  }

  /**
   * JSON-safe representation.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      type: this.type,
      senderId: this.senderId,
      senderType: this.senderType,
      timestamp: this.timestamp,
      read: this.read
    };
  }
}
