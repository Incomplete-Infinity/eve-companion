const Contact = require('./Contact');

/**
 * @class Attendee
 * @classdesc Represents an event attendee in the EVE calendar system.
 * Inherits identity and contact metadata from the base Contact class.
 */
export default class Attendee extends Contact {
  /**
   * Construct a new Attendee instance.
   *
   * @constructor
   * @param {number} characterId - The EVE character ID of the attendee.
   * @param {Object|null} [auth=null] - Optional AuthTokenManager instance for character-specific queries.
   * @param {number|null} [standing=null] - Optional standing (e.g. corp/faction/agent/char).
   * @param {string|null} [response=null] - Initial RSVP status, such as 'accepted', 'declined', etc.
   */
  constructor(characterId, auth = null, standing = null, response = null) {
    super(characterId, auth, standing);

    /**
     * @type {string|null}
     * @description The attendee's RSVP response, such as 'accepted', 'declined', 'tentative', or 'none'.
     */
    this.response = response;
  }

  /**
   * Set the attendee's RSVP response status.
   *
   * @param {string} response - New response status.
   *                            Expected values: 'accepted', 'declined', 'tentative', 'none'.
   */
  setResponse(response) {
    this.response = response;
  }

  /**
   * Serialize the attendee's data into a plain object for storage or transport.
   *
   * @returns {Object} Object containing all base contact data and RSVP status.
   */
  toJSON() {
    return {
      ...super.toJSON(),
      response: this.response
    };
  }
}
