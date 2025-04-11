const ESI = require('eve_swagger_interface');

class Skills {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.SkillsApi();
    this.skills = [];
    this.totalSp = 0;
    this.unallocatedSp = 0;
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Skills require auth');
    await this.auth.ensureValidToken();
  }

  async load() {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdSkills(this.characterId, {
      datasource: 'tranquility'
    });

    this.skills = data.skills;
    this.totalSp = data.total_sp;
    this.unallocatedSp = data.unallocated_sp;

    return data;
  }

  toJSON() {
    return {
      totalSp: this.totalSp,
      unallocatedSp: this.unallocatedSp,
      skills: this.skills
    };
  }
}

module.exports = Skills;
