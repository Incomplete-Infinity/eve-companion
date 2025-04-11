class Notification {
    constructor({
      notification_id,
      type,
      sender_id,
      sender_type,
      timestamp,
      is_read = false
    }) {
      this.id = notification_id;
      this.type = type;
      this.senderId = sender_id;
      this.senderType = sender_type;
      this.timestamp = timestamp;
      this.read = is_read;
    }
  
    markRead() {
      this.read = true;
    }
  }
  module.exports = Notification;