const ESI = require('eve_swagger_interface');

class PlanetaryInteraction {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.PlanetaryInteractionApi();
    this.universe = new ESI.UniverseApi();

    this.planets = [];
    this.planetDetails = new Map(); // planetId → { ...details }
    this.schematics = new Map();    // schematicId → { ...details }
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('PI endpoints require auth');
    await this.auth.ensureValidToken();
  }

  async loadPlanets() {
    await this.ensureAuth();
    this.planets = await this.api.getCharactersCharacterIdPlanets(this.characterId, {
      datasource: 'tranquility'
    });

    return this.planets;
  }

  async loadPlanetDetail(planetId) {
    await this.ensureAuth();
    if (this.planetDetails.has(planetId)) return this.planetDetails.get(planetId);

    const data = await this.api.getCharactersCharacterIdPlanetsPlanetId(
      this.characterId,
      planetId,
      { datasource: 'tranquility' }
    );

    this.planetDetails.set(planetId, data);
    return data;
  }

  async loadPlanetMeta(planetId) {
    return await this.universe.getUniversePlanetsPlanetId(planetId, {
      datasource: 'tranquility'
    });
  }

  async loadSchematic(schematicId) {
    if (this.schematics.has(schematicId)) return this.schematics.get(schematicId);

    const data = await this.api.getUniverseSchematicsSchematicId(schematicId, {
      datasource: 'tranquility'
    });

    this.schematics.set(schematicId, data);
    return data;
  }

  toJSON() {
    return {
      planets: this.planets,
      planetDetails: Object.fromEntries(this.planetDetails),
      schematics: Object.fromEntries(this.schematics)
    };
  }
}

module.exports = PlanetaryInteraction;
