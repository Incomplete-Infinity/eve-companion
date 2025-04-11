const Planet = require('./Planet');

class System {
  constructor({ system_id, name, constellation_id, region_id, security_status }) {
    this.id = system_id;
    this.name = name;
    this.constellationId = constellation_id;
    this.regionId = region_id;
    this.securityStatus = security_status;
    this.planets = [];
  }

  addPlanet(planetData) {
    const planet = new Planet({ ...planetData, system_id: this.id, region_id: this.regionId });
    this.planets.push(planet);
    return planet;
  }

  getPlanetById(planetId) {
    return this.planets.find(p => p.id === planetId);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      constellationId: this.constellationId,
      regionId: this.regionId,
      securityStatus: this.securityStatus,
      planets: this.planets.map(p => p.toJSON())
    };
  }
}

module.exports = System;
