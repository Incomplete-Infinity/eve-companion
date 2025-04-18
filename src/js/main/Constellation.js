// Constellation.js
const ESI = require("./../../api/esi/Universe.ts");

export default class Constellation {
  constructor(constellation_id = null) {
    this.id = constellation_id;
    const { name, position, systems } = ESI.getUniverseConstellationsConstellationId(constellation_id);
    this.name = name;
    const { x, y, z } = position;
    this.position = { x, y, z };

    this.systems = systems.map(
      (s) => new System({ system_id: s })
    );
  }

   /**
   * Serialize the region to a JSON-compatible object.
   * @returns {Object} JSON representation of the region.
   */
   toJSON() {
    return {
      id: this.id,
      name: this.name,
      position: this.position,
      systems: this.systems.map(
        (s) => s.toJSON?.() ?? s
      ),
    };
  }

  /*
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
    */
}
