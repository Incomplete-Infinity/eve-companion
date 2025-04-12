// Constellation.js
const ESI = require("eve_swagger_interface");
const System = require("./System");

export default class Constellation {
  constructor(id = null) {
    this.constellationId = id;
    this.api = new ESI.UniverseApi();

    if (id) return this.fetch();
    return this.list();
  }

  async fetch() {
    const data = await this.api.getUniverseConstellationsConstellationId(this.constellationId, {
      datasource: "tranquility",
    });

    this.name = data.name;
    this.regionId = data.region_id;
    this.systemIds = data.systems;
    this.systems = this.systemIds.map(id => new System(id));

    return this;
  }

  async list() {
    return await this.api.getUniverseConstellations({ datasource: "tranquility" });
  }
}

module.exports = Constellation;


// Structure.js
const ESI = require("eve_swagger_interface");

class Structure {
  constructor(structureId) {
    this.structureId = structureId;
    this.api = new ESI.UniverseApi();
  }

  async fetch() {
    return await this.api.getUniverseStructuresStructureId(this.structureId, {
      datasource: "tranquility",
    });
  }
}

module.exports = Structure;


// Title.js
const ESI = require("eve_swagger_interface");

class Title {
  constructor(corporationId, auth) {
    this.corporationId = corporationId;
    this.auth = auth;
    this.api = new ESI.CorporationApi();
  }

  async fetch() {
    await this.auth.ensureValidToken();
    return await this.api.getCorporationsCorporationIdTitles(this.corporationId, {
      datasource: "tranquility",
    });
  }
}
