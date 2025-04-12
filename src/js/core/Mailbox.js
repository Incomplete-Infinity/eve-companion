/**
 * @file Mailbox.js
 * @description Mail management system using the ESI API. Handles headers, messages, labels, and subscriptions.
 * @requires eve_swagger_interface
 * @requires ./Mail
 * @requires ./Label
 */

const ESI = require('eve_swagger_interface');
const Mail = require('./Mail');
const Label = require('./Label');

export default class Mailbox {
  /**
   * @param {number} characterId
   * @param {string} accessToken
   */
  constructor(characterId, accessToken) {
    this.characterId = characterId;

    /** @type {Mail[]} */
    this.headers = [];

    /** @type {Map<number, Mail>} */
    this.mails = new Map();

    /** @type {Label[]} */
    this.labels = [];

    /** @type {Array} */
    this.subscriptions = [];

    const client = ESI.ApiClient.instance;
    client.authentications.evesso.accessToken = accessToken;

    /** @private */
    this.api = new ESI.CharacterApi();
  }

  /**
   * Load all mail headers.
   * @param {Function} [callback]
   */
  getHeaders(callback) {
    const opts = { datasource: 'tranquility' };

    this.api.getCharactersCharacterIdMail(this.characterId, opts, (err, data) => {
      if (err) return callback?.(err);

      this.headers = data
        .map(h => new Mail(h))
        .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

      callback?.(null, this.headers);
    });
  }

  /**
   * Get a specific mail by ID.
   * @param {number} mailId
   * @param {Function} [callback]
   */
  get(mailId, callback) {
    let mail = this.headers.find(m => m.mailId === mailId) || this.mails.get(mailId);
    if (!mail) return callback?.(new Error('Mail not found'));

    if (mail.isPartial) {
      const opts = { datasource: 'tranquility' };
      this.api.getCharactersCharacterIdMailMailId(this.characterId, mailId, opts, (err, data) => {
        if (err) return callback?.(err);

        mail.update(data);
        mail.read = true;
        this.mails.set(mailId, mail);
        callback?.(null, mail);
      });
    } else {
      callback?.(null, mail);
    }
  }

  /**
   * Update metadata for a mail.
   * @param {number} mailId
   * @param {object} metadata
   * @param {Function} [callback]
   */
  putMetaData(mailId, metadata, callback) {
    const opts = {
      datasource: 'tranquility',
      mailMetadata: metadata
    };

    this.api.putCharactersCharacterIdMailMailId(this.characterId, mailId, opts, (err) => {
      if (err) return callback?.(err);
      callback?.(null, true);
    });
  }

  /**
   * Delete a mail by ID.
   * @param {number} mailId
   * @param {Function} [callback]
   */
  delete(mailId, callback) {
    const opts = { datasource: 'tranquility' };

    this.api.deleteCharactersCharacterIdMailMailId(this.characterId, mailId, opts, (err) => {
      if (err) return callback?.(err);

      this.headers = this.headers.filter(m => m.mailId !== mailId);
      this.mails.delete(mailId);
      callback?.(null, true);
    });
  }

  /**
   * Load all labels.
   * @param {Function} [callback]
   */
  getLabels(callback) {
    const opts = { datasource: 'tranquility' };

    this.api.getCharactersCharacterIdMailLabels(this.characterId, opts, (err, data) => {
      if (err) return callback?.(err);

      this.labels = data.labels.map(l => new Label(l));
      callback?.(null, this.labels);
    });
  }

  /**
   * Create a new label.
   * @param {object} labelData
   * @param {Function} [callback]
   */
  postLabel(labelData, callback) {
    const opts = {
      datasource: 'tranquility',
      label: labelData
    };

    this.api.postCharactersCharacterIdMailLabels(this.characterId, opts, (err, label) => {
      if (err) return callback?.(err);

      const newLabel = new Label(label);
      this.labels.push(newLabel);
      callback?.(null, newLabel);
    });
  }

  /**
   * Delete a label by ID.
   * @param {number} labelId
   * @param {Function} [callback]
   */
  deleteLabel(labelId, callback) {
    const opts = { datasource: 'tranquility' };

    this.api.deleteCharactersCharacterIdMailLabelsLabelId(this.characterId, labelId, opts, (err) => {
      if (err) return callback?.(err);

      this.labels = this.labels.filter(l => l.labelId !== labelId);
      callback?.(null, true);
    });
  }

  /**
   * Get mail list subscriptions.
   * @param {Function} [callback]
   */
  getMailSubscriptions(callback) {
    const opts = { datasource: 'tranquility' };

    this.api.getCharactersCharacterIdMailLists(this.characterId, opts, (err, data) => {
      if (err) return callback?.(err);

      this.subscriptions = data;
      callback?.(null, this.subscriptions);
    });
  }
}
