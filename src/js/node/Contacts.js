const ESI = require('eve_swagger_interface');
const Contact = require('./Contact');

class Contacts {
  constructor(ownerId, { auth = null, scope = 'character' } = {}) {
    this.ownerId = ownerId;
    this.auth = auth;
    this.scope = scope; // 'character' | 'corporation' | 'alliance'
    this.api = new ESI.ContactsApi();
    this.contacts = [];
    this.labels = [];
  }

  async ensureAuth() {
    if (this.scope === 'character' && !this.auth) {
      throw new Error('Character contacts require auth');
    }
    if (this.auth) await this.auth.ensureValidToken();
  }

  async loadContacts() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    let data;
    if (this.scope === 'character') {
      data = await this.api.getCharactersCharacterIdContacts(this.ownerId, opts);
    } else if (this.scope === 'corporation') {
      data = await this.api.getCorporationsCorporationIdContacts(this.ownerId, opts);
    } else if (this.scope === 'alliance') {
      data = await this.api.getAlliancesAllianceIdContacts(this.ownerId, opts);
    } else {
      throw new Error('Unknown contact scope');
    }

    this.contacts = data.map(entry => new Contact(entry.contact_id, this.auth, {
      standing: entry.standing,
      contactType: entry.contact_type,
      labelIds: entry.label_ids,
      isWatched: entry.is_watched
    }));

    return this.contacts;
  }

  async loadLabels() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    let data;
    if (this.scope === 'character') {
      data = await this.api.getCharactersCharacterIdContactsLabels(this.ownerId, opts);
    } else if (this.scope === 'corporation') {
      data = await this.api.getCorporationsCorporationIdContactsLabels(this.ownerId, opts);
    } else if (this.scope === 'alliance') {
      data = await this.api.getAlliancesAllianceIdContactsLabels(this.ownerId, opts);
    } else {
      throw new Error('Unknown contact scope');
    }

    this.labels = data.labels;
    return this.labels;
  }

  toJSON() {
    return this.contacts.map(c => c.toJSON());
  }
}

module.exports = Contacts;

/*
const Contacts = require('./Contacts');

const corpContacts = new Contacts(corpId, { auth, scope: 'corporation' });
await corpContacts.loadContacts();
console.log(corpContacts.toJSON());
*/