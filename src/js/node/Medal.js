class Medal {
  constructor({ medal_id, title, description, issuer_id, issued, status, reason }) {
    this.id = medal_id;
    this.title = title;
    this.description = description;
    this.issuerId = issuer_id;
    this.issued = issued;
    this.status = status;
    this.reason = reason;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      issuerId: this.issuerId,
      issued: this.issued,
      status: this.status,
      reason: this.reason
    };
  }
}

module.exports = Medal;
