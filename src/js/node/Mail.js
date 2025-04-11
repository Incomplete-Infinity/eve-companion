class Mail {
    constructor(data = {}) {
      this.mailId = data.mail_id ?? null;
      this.subject = data.subject ?? '(no subject)';
      this.from = data.from ?? null;
      this.timestamp = data.timestamp ?? null;
      this.labels = data.labels ?? [];
      this.recipients = data.recipients ?? [];
      this.body = data.body ?? null;
      this.read = data.is_read ?? data.read ?? false;
      this.isPartial = !data.body;
    }
  
    update = (data = {}) => {
      Object.assign(this, {
        body: data.body ?? this.body,
        recipients: data.recipients ?? this.recipients,
        labels: data.labels ?? this.labels,
        read: data.is_read ?? this.read,
        isPartial: false
      });
    }
  
    summary = () => ({
      mailId: this.mailId,
      subject: this.subject,
      from: this.from,
      timestamp: this.timestamp,
      read: this.read,
      labels: this.labels
    });
  
    getContent = () => ({
      subject: this.subject,
      from: this.from,
      recipients: this.recipients,
      timestamp: this.timestamp,
      body: this.body,
      labels: this.labels,
      read: this.read
    });
  }
  module.exports = Mail