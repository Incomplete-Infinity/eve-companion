const Region = require('./Region');

class Galaxy {
  constructor(name = 'New Eden') {
    this.name = name;
    this.regions = [];
  }

  addRegion(data) {
    const region = new Region(data);
    this.regions.push(region);
    return region;
  }

  getRegionById(id) {
    return this.regions.find(r => r.id === id);
  }

  toJSON() {
    return {
      name: this.name,
      regions: this.regions.map(r => r.toJSON())
    };
  }
}

module.exports = Galaxy;
/*
const Galaxy = require('./Galaxy');
const galaxy = new Galaxy();

galaxy.addRegion({ region_id: 10000002, name: 'The Forge', constellations: [20000020] });

console.log(galaxy.toJSON());
*/