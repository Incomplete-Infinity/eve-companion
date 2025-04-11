const Character = require('./Character');

class Contact extends Character {
  constructor(characterId, auth = null, {
    standing = null,
    contactType = 'character',
    labelIds = [],
    isWatched = false
  } = {}) {
    super(characterId, auth);
    this.standing = standing;
    this.contactType = contactType;
    this.labelIds = labelIds;
    this.watched = isWatched;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      standing: this.standing,
      contactType: this.contactType,
      labelIds: this.labelIds,
      watched: this.watched
    };
  }
}

module.exports = Contact;
