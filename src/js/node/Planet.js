class Planet {
    constructor({
      planet_id,
      name = null,
      type_id = null,
      system_id = null,
      region_id = null,
      moons = []
    }) {
      this.id = planet_id;
      this.name = name;
      this.typeId = type_id;
      this.systemId = system_id;
      this.regionId = region_id;
      this.moons = moons; // Array of moon IDs or names
    }
  
    addMoon(moonIdOrName) {
      if (!this.moons.includes(moonIdOrName)) this.moons.push(moonIdOrName);
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        typeId: this.typeId,
        systemId: this.systemId,
        regionId: this.regionId,
        moons: this.moons
      };
    }
  }
  
  module.exports = Planet;
  