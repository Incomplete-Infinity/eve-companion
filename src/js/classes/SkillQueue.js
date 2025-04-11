const ESI = require('eve_swagger_interface');

class SkillQueue {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.SkillsApi();
    this.queue = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Skill queue requires auth');
    await this.auth.ensureValidToken();
  }

  async load() {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdSkillqueue(this.characterId, {
      datasource: 'tranquility'
    });

    this.queue = data;
    return data;
  }

  toJSON() {
    return this.queue;
  }
}

module.exports = SkillQueue;
