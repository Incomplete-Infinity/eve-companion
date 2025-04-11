const Squad = require('./Squad');

class Wing {
  constructor({ wing_id, name = null, squads = [] }) {
    this.id = wing_id;
    this.name = name;
    this.squads = squads.map(s => new Squad(s));
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      squads: this.squads.map(s => s.toJSON())
    };
  }
}

module.exports = Wing;
