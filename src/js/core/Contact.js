const Character = require('./Character');

/**
 * @class Contact
 * @extends Character
 * @classdesc Represents a character stored as a contact, with optional standing,
 * labels, and watchlist status. Extends basic character functionality.
 */
export default class Contact extends Character {
  /**
   * Construct a new Contact instance.
   *
   * @constructor
   * @param {number} characterId - EVE Online character ID.
   * @param {AuthTokenManager|null} [auth=null] - Optional token manager for secure data access.
   * @param {Object} [options={}] - Additional contact-specific metadata.
   * @param {number|null} [options.standing=null] - Standing value from -10.0 to 10.0.
   * @param {string} [options.contactType='character'] - Entity type: 'character', 'corporation', or 'alliance'.
   * @param {number[]} [options.labelIds=[]] - List of contact label IDs (user-defined).
   * @param {boolean} [options.isWatched=false] - Whether the contact is on the watchlist.
   */
  constructor(characterId, auth = null, {
    standing = null,
    contactType = 'character',
    labelIds = [],
    isWatched = false
  } = {}) {
    super(characterId, auth);

    /** @type {number|null} Standing value (-10 to 10) */
    this.standing = standing;

    /** @type {string} Type of contact entity (character, corporation, alliance) */
    this.contactType = contactType;

    /** @type {number[]} Label IDs associated with this contact */
    this.labelIds = labelIds;

    /** @type {boolean} Whether the contact is being watched (in watchlist) */
    this.watched = isWatched;
  }

  /**
   * Convert the contact into a plain object for storage or transmission.
   *
   * @returns {Object} Serialized contact info including character data.
   */
  toJSON() {
    return {
      ...super.toJSON(),
      standing: this.standing,
      contactType: this.contactType,
      labelIds: this.labelIds,
      watched: this.watched
    };
  }
}
