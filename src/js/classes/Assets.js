const ESI = require('eve_swagger_interface');

class Assets {
  constructor(ownerId, { auth = null, isCharacter = true } = {}) {
    this.ownerId = ownerId;
    this.auth = auth;
    this.isCharacter = isCharacter;
    this.api = new ESI.AssetsApi();
    this.assets = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Authenticated endpoint requires auth');
    await this.auth.ensureValidToken();
  }

  async load(page = 1) {
    await this.ensureAuth();

    const fn = this.isCharacter
      ? this.api.getCharactersCharacterIdAssets
      : this.api.getCorporationsCorporationIdAssets;

    const data = await fn(this.ownerId, { page, datasource: 'tranquility' });
    this.assets.push(...data);

    if (data.length === 1000) {
      await this.load(page + 1);
    }

    return this.assets;
  }

  async resolveLocations(itemIds) {
    await this.ensureAuth();

    const fn = this.isCharacter
      ? this.api.postCharactersCharacterIdAssetsLocations
      : this.api.postCorporationsCorporationIdAssetsLocations;

    return await fn(this.ownerId, { item_ids: itemIds, datasource: 'tranquility' });
  }

  async resolveNames(itemIds) {
    await this.ensureAuth();

    const fn = this.isCharacter
      ? this.api.postCharactersCharacterIdAssetsNames
      : this.api.postCorporationsCorporationIdAssetsNames;

    return await fn(this.ownerId, { item_ids: itemIds, datasource: 'tranquility' });
  }

  getByLocation(locationId) {
    return this.assets.filter(a => a.location_id === locationId);
  }

  getByType(typeId) {
    return this.assets.filter(a => a.type_id === typeId);
  }

  toJSON() {
    return this.assets;
  }
}

module.exports = Assets;

/*
const Assets = require('./Assets');
const assets = new Assets(characterId, { auth, isCharacter: true });

await assets.load();
const ships = assets.getByType(603); // Raven
*/