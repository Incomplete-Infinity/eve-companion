/**
 * @file Mail.js
 * @description Handles mail data retrieval and caching from the EVE Swagger Interface (ESI).
 *
 * @requires eve_swagger_interface - External library to interface with ESI endpoints.
 * @required AuthTokenManager - Manages authentication tokens.
 */

const ESI = require('eve_swagger_interface');
const AuthTokenManager = require('./AuthTokenManager');

/**
 * @class Mail
 * @summary Represents a mail message in EVE Online.
 * @description Manages access to EVE Online mail information, including fetching recent wars and caching individual war details.
 *
 * @property {ESI.WarsApi} api - Instance of the ESI Wars API.
 * @property {Map<number, Object>} wars - Cached map of war IDs to war objects.
 */
export default class Mail {
  /**
   * @param {Object} [data={}] Mail data from ESI.
   */
  constructor(data = {}) {
    /** @type {number|null} */
    this.mailId = data.mail_id ?? null;

    /** @type {string} */
    this.subject = data.subject ?? '(no subject)';

    /** @type {number|null} */
    this.from = data.from ?? null;

    /** @type {string|null} ISO 8601 timestamp */
    this.timestamp = data.timestamp ?? null;

    /** @type {number[]} */
    this.labels = data.labels ?? [];

    /** @type {Array<{recipient_id: number, recipient_type: string}>} */
    this.recipients = data.recipients ?? [];

    /** @type {string|null} */
    this.body = data.body ?? null;

    /** @type {boolean} */
    this.read = data.is_read ?? data.read ?? false;

    /** @type {boolean} Indicates whether the mail body has been fetched */
    this.isPartial = !data.body;
  }

  /**
   * @summary Update mail data (used when fetching full body later).
   * @param {Object} data - Partial or full mail object from ESI.
   */
  update(data = {}) {
    Object.assign(this, {
      body: data.body ?? this.body,
      recipients: data.recipients ?? this.recipients,
      labels: data.labels ?? this.labels,
      read: data.is_read ?? this.read,
      isPartial: false
    });
  }

  /**
   * @summary Get a summarized view of the mail (used for mail headers list).
   * @returns {Object} Summary object.
   */
  summary() {
    return {
      mailId: this.mailId,
      subject: this.subject,
      from: this.from,
      timestamp: this.timestamp,
      read: this.read,
      labels: this.labels
    };
  }

  /**
   * Get full content of the mail.
   * @returns {Object} Mail content object.
   */
  getContent() {
    return {
      subject: this.subject,
      from: this.from,
      recipients: this.recipients,
      timestamp: this.timestamp,
      body: this.body,
      labels: this.labels,
      read: this.read
    };
  }
}
