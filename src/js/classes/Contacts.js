const ESI = require('eve_swagger_interface');
const Contact = require('./Contact');
const AuthTokenManager = require('./AuthTokenManager');

/**
 * @class Contacts
 * @classdesc Manages and loads a list of contacts (character, corp, or alliance)
 * and associated labels from the EVE Swagger Interface.
 */
class Contacts {
  /**
   * Construct a new Contacts manager.
   *
   * @constructor
   * @param {number} ownerId - ID of the character, corporation, or alliance.
   * @param {Object} [options={}]
   * @param {AuthTokenManager|null} [options.auth=null] - Auth for authenticated scopes.
   * @param {'character'|'corporation'|'alliance'} [options.scope='character'] - The contact scope level.
   */
  constructor(ownerId, { auth = null, scope = 'character' } = {}) {
    /** @type {number} ID of the entity owning the contacts */
    this.ownerId = ownerId;

    /** @type {AuthTokenManager|null} */
    this.auth = auth instanceof AuthTokenManager ? auth : null;

    /** @type {'character'|'corporation'|'alliance'} */
    this.scope = scope;

    /** @type {ESI.ContactsApi} */
    this.api = new ESI.ContactsApi();

    /** @type {Contact[]} */
    this.contacts = [];

    /** @type {Object[]} */
    this.labels = [];
  }

  /**
   * Ensures authentication is present and valid if required.
   *
   * @private
   * @throws {Error} If character scope is used without auth.
   */
  async ensureAuth() {
    if (this.scope === 'character' && !this.auth) {
      throw new Error('Character contacts require auth');
    }
    if (this.auth) await this.auth.ensureValidToken();
  }

  /**
   * Loads the list of contacts based on the scope.
   *
   * @async
   * @returns {Promise<Contact[]>} Array of Contact instances.
   *
   * @throws {Error} If the scope is invalid.
   *
   * @example
   * const c = new Contacts(charId, { auth });
   * await c.loadContacts();
   * console.log(c.contacts);
   */
  async loadContacts() {
    await this.auth.requireValidToken();
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

    this.contacts = data.map(entry =>
      new Contact(entry.contact_id, this.auth, {
        standing: entry.standing,
        contactType: entry.contact_type,
        labelIds: entry.label_ids,
        isWatched: entry.is_watched
      })
    );

    return this.contacts;
  }

  /**
   * Loads contact labels (tags) based on the scope.
   *
   * @async
   * @returns {Promise<Object[]>} Array of label objects.
   *
   * @throws {Error} If the scope is invalid.
   *
   * @example
   * await contacts.loadLabels();
   * console.log(contacts.labels);
   */
  async loadLabels() {
    await this.auth.requireValidToken();
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

  /**
   * Return a plain JSON-safe version of the contacts list.
   *
   * @returns {Object[]} Array of serialized Contact objects.
   */
  toJSON() {
    return this.contacts.map(c => c.toJSON());
  }
}

module.exports = Contacts;

/*
Example:

const Contacts = require('./Contacts');

const corpContacts = new Contacts(corpId, { auth, scope: 'corporation' });
await corpContacts.loadContacts();
console.log(corpContacts.toJSON());
*/
