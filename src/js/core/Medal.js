/**
 * @file Medal.js
 * @description Represents a character or corporation medal from ESI.
 */

/**
 * @class Medal
 * @classdesc A medal awarded to a character or issued by a corporation.
 */
export default class Medal {
  /**
   * @param {Object} data - Medal data from ESI API.
   * @param {number} data.medal_id - Unique ID of the medal.
   * @param {string} data.title - Title of the medal.
   * @param {string} data.description - Description of the medal's purpose.
   * @param {number} data.issuer_id - ID of the character or corp that issued the medal.
   * @param {string} data.issued - ISO timestamp of when it was issued.
   * @param {string} data.status - Medal status (e.g., 'public', 'private').
   * @param {string} data.reason - Reason for issuing the medal.
   */
  constructor({ medal_id, title, description, issuer_id, issued, status, reason }) {
    /** @type {number} */
    this.id = medal_id;

    /** @type {string} */
    this.title = title;

    /** @type {string} */
    this.description = description;

    /** @type {number} */
    this.issuerId = issuer_id;

    /** @type {string} */
    this.issued = issued;

    /** @type {string} */
    this.status = status;

    /** @type {string} */
    this.reason = reason;
  }

  /**
   * Returns a plain object representation.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      issuerId: this.issuerId,
      issued: this.issued,
      status: this.status,
      reason: this.reason
    };
  }
}
