const ESI = require('eve_swagger_interface');

class Character {
  constructor(characterId, auth = null) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.CharacterApi();

    this.name = null;
    this.corporationId = null;
    this.allianceId = null;
    this.portrait = null;
    this.loaded = false;
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Authenticated data requires an auth token');
    await this.auth.ensureValidToken();
  }

  isAuthenticated() {
    return !!this.auth;
  }

  async loadPublicInfo() {
    const data = await this.api.getCharactersCharacterId(this.characterId, { datasource: 'tranquility' });
    this.name = data.name;
    this.corporationId = data.corporation_id;
    this.allianceId = data.alliance_id ?? null;
    this.loaded = true;
    return data;
  }

  async loadPortrait() {
    const data = await this.api.getCharactersCharacterIdPortrait(this.characterId, { datasource: 'tranquility' });
    this.portrait = data;
    return data;
  }

  async getLocation() {
    await this.ensureAuth();
    return await this.api.getCharactersCharacterIdLocation(this.characterId, { datasource: 'tranquility' });
  }

  async getWallet() {
    await this.ensureAuth();
    return await this.api.getCharactersCharacterIdWallet(this.characterId, { datasource: 'tranquility' });
  }

  // Add public/private methods as needed
}

module.exports = Character;