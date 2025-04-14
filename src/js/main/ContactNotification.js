const Notification = require('./Notification');

/**
 * @class ContactNotification
 * @extends Notification
 * @classdesc Represents a specific type of notification related to contacts.
 * Adds message body and label association to the base Notification class.
 */
export default class ContactNotification extends Notification {
  /**
   * Construct a new ContactNotification instance.
   *
   * @constructor
   * @param {Object} data - Raw notification data from ESI.
   * @param {string} [data.message] - The message body or contents of the notification.
   * @param {number[]} [data.labels] - List of label IDs applied to this notification.
   */
  constructor(data) {
    super(data);

    /** @type {string} Text message associated with the contact notification */
    this.message = data.message ?? '';

    /** @type {number[]} Array of label IDs associated with the notification */
    this.labels = data.labels ?? [];
  }
}
