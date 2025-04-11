const System = require('./System');
const Region = require('./Region');

class Location {
  constructor({
    location_id,
    name = null,
    type = null,          // e.g., 'structure', 'station', 'solar_system'
    system_id = null,
    region_id = null
  }) {
    this.id = location_id;
    this.name = name;
    this.type = type;
    this.system = system_id ? new System({ system_id }) : null;
    this.region = region_id ? new Region({ region_id }) : null;
  }

  setDetails({ name, type, system, region }) {
    this.name = name ?? this.name;
    this.type = type ?? this.type;
    if (system) this.system = system;
    if (region) this.region = region;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      system: this.system?.toJSON?.() ?? this.system,
      region: this.region?.toJSON?.() ?? this.region
    };
  }
}

module.exports = Location;
/*
const Location = require('./Location');
const location = new Location({
  location_id: 60003760,
  type: 'station',
  name: 'Jita IV - Moon 4 - Caldari Navy Assembly Plant',
  system_id: 30000142,
  region_id: 10000002
});

console.log(location.toJSON());
*/