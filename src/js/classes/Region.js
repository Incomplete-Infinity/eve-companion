const Constellation = require('./Constellation');

class Region {
  constructor({ region_id, name = null, constellations = [] }) {
    this.id = region_id;
    this.name = name;
    this.constellations = constellations.map(c => new Constellation({ constellation_id: c }));
  }

  addConstellation(data) {
    const constellation = new Constellation({ ...data, region_id: this.id });
    this.constellations.push(constellation);
    return constellation;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      constellations: this.constellations.map(c => c.toJSON())
    };
  }
}

module.exports = Region;
