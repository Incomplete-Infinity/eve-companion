const Character = require('./Character');

class Shareholder extends Character {
  constructor(characterId, auth = null, shares = 0) {
    super(characterId, auth);
    this.shares = shares;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      shares: this.shares
    };
  }
}

module.exports = Shareholder;
