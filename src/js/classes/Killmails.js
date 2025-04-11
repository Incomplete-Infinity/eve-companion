const ESI = require('eve_swagger_interface');
const Killmail = require('./Killmail');

class Killmails {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.KillmailsApi();
    this.recent = [];
    this.details = new Map();
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Killmail access requires auth');
    await this.auth.ensureValidToken();
  }

  async loadRecent() {
    await this.ensureAuth();
    this.recent = await this.api.getCharactersCharacterIdKillmailsRecent(this.characterId, {
      datasource: 'tranquility'
    });
    return this.recent;
  }

  async loadKillmail(killmailId, killmailHash) {
    const key = `${killmailId}:${killmailHash}`;
    if (this.details.has(key)) return this.details.get(key);

    const data = await this.api.getKillmailsKillmailIdKillmailHash(killmailId, killmailHash, {
      datasource: 'tranquility'
    });

    const kill = new Killmail({ ...data, killmail_id: killmailId, killmail_hash: killmailHash });
    this.details.set(key, kill);
    return kill;
  }

  toJSON() {
    return {
      recent: this.recent,
      details: Object.fromEntries([...this.details].map(([k, v]) => [k, v.toJSON()]))
    };
  }
}

module.exports = Killmails;
/*
const Killmails = require('./Killmails');
const kills = new Killmails(charId, auth);

await kills.loadRecent();
const detailed = await kills.loadKillmail(kills.recent[0].killmail_id, kills.recent[0].killmail_hash);
console.log(detailed.toJSON());
*/