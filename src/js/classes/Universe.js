const ESI = require('eve_swagger_interface');

const InventoryCategory = require('./InventoryCategory');
const InventoryGroup = require('./InventoryGroup');
const InventoryType = require('./InventoryType');
const Planet = require('./Planet');
const System = require('./System');
const Constellation = require('./Constellation');
const Faction = require('./Faction');
const Structure = require('./Structure');

class Universe {
  constructor() {
    this.api = new ESI.UniverseApi();

    this.categories = new Map();
    this.groups = new Map();
    this.types = new Map();
    this.planets = new Map();
    this.systems = new Map();
    this.constellations = new Map();
    this.factions = new Map();
    this.structures = new Map();
  }

  async getCategory(id) {
    if (!this.categories.has(id)) {
      const data = await this.api.getUniverseCategoriesCategoryId(id, { datasource: 'tranquility' });
      this.categories.set(id, new InventoryCategory(data));
    }
    return this.categories.get(id);
  }

  async getGroup(id) {
    if (!this.groups.has(id)) {
      const data = await this.api.getUniverseGroupsGroupId(id, { datasource: 'tranquility' });
      this.groups.set(id, new InventoryGroup(data));
    }
    return this.groups.get(id);
  }

  async getType(id) {
    if (!this.types.has(id)) {
      const data = await this.api.getUniverseTypesTypeId(id, { datasource: 'tranquility' });
      this.types.set(id, new InventoryType(data));
    }
    return this.types.get(id);
  }

  async getPlanet(id) {
    if (!this.planets.has(id)) {
      const data = await this.api.getUniversePlanetsPlanetId(id, { datasource: 'tranquility' });
      this.planets.set(id, new Planet(data));
    }
    return this.planets.get(id);
  }

  async getSystem(id) {
    if (!this.systems.has(id)) {
      const data = await this.api.getUniverseSystemsSystemId(id, { datasource: 'tranquility' });
      this.systems.set(id, new System(data));
    }
    return this.systems.get(id);
  }

  async getConstellation(id) {
    if (!this.constellations.has(id)) {
      const data = await this.api.getUniverseConstellationsConstellationId(id, { datasource: 'tranquility' });
      this.constellations.set(id, new Constellation(data));
    }
    return this.constellations.get(id);
  }

  async getFaction(id) {
    if (this.factions.size === 0) {
      const all = await this.api.getUniverseFactions({ datasource: 'tranquility' });
      all.forEach(f => this.factions.set(f.faction_id, new Faction(f)));
    }
    return this.factions.get(id);
  }

  async getStructure(id, auth) {
    if (!this.structures.has(id)) {
      await auth.ensureValidToken();
      const data = await this.api.getUniverseStructuresStructureId(id, {
        datasource: 'tranquility',
        token: auth.accessToken
      });
      this.structures.set(id, new Structure(data));
    }
    return this.structures.get(id);
  }

  async resolveIds(ids) {
    return await this.api.postUniverseNames(ids, {
      datasource: 'tranquility'
    });
  }

  toJSON() {
    return {
      categories: [...this.categories.values()].map(x => x.toJSON?.() ?? x),
      groups: [...this.groups.values()].map(x => x.toJSON?.() ?? x),
      types: [...this.types.values()].map(x => x.toJSON?.() ?? x),
      planets: [...this.planets.values()].map(x => x.toJSON?.() ?? x),
      systems: [...this.systems.values()].map(x => x.toJSON?.() ?? x),
      constellations: [...this.constellations.values()].map(x => x.toJSON?.() ?? x),
      factions: [...this.factions.values()].map(x => x.toJSON?.() ?? x),
      structures: [...this.structures.values()].map(x => x.toJSON?.() ?? x),
    };
  }
}

module.exports = Universe;
/*
const Universe = require('./Universe');
const uni = new Universe();

const rifter = await uni.getType(587); // Rifter
const jita = await uni.getSystem(30000142);
console.log(jita.name, rifter.name);

*/