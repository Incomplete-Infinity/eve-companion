const Contact = require('./Contact');

class Attendee extends Contact {
  constructor(characterId, auth = null, standing = null, response = null) {
    super(characterId, auth, standing);
    this.response = response; // 'accepted', 'declined', etc.
  }

  setResponse(response) {
    this.response = response;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      response: this.response
    };
  }
}

module.exports = Attendee;
