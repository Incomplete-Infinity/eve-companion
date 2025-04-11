const Notification = require('./Notification');
class ContactNotification extends Notification {
    constructor(data) {
      super(data);
      this.message = data.message ?? '';
      this.labels = data.labels ?? [];
    }
  }
  module.exports = ContactNotification;