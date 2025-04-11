const ESI = require('eve_swagger_interface');
const Event = require('./Event');
const AuthTokenManager = require('./AuthTokenManager');

/**
 * @class Calendar
 * @classdesc Represents a character's EVE Online calendar, with methods to fetch events,
 * retrieve detailed info, and update RSVP responses.
 */
class Calendar {
  /**
   * Construct a new Calendar manager.
   *
   * @constructor
   * @param {number} characterId - EVE character ID associated with the calendar.
   * @param {AuthTokenManager} auth - AuthTokenManager instance for authenticated access.
   */
  constructor(characterId, auth) {
    /** @type {number} */
    this.characterId = characterId;

    /** @type {AuthTokenManager|null} */
    this.auth = auth instanceof AuthTokenManager ? auth : null;

    /** @type {ESI.CalendarApi} */
    this.api = new ESI.CalendarApi();

    /** @type {Event[]} */
    this.events = [];
  }

  /**
   * Ensure the token is valid before any secure ESI calls.
   *
   * @private
   * @throws {Error} If auth is missing or token is invalid.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Auth required for calendar access');
    await this.auth.requireValidToken();
  }

  /**
   * Load upcoming calendar events. Optionally filter by minimum event ID.
   *
   * @param {number|null} [fromEventId=null] - Optional lower-bound event ID to filter results.
   * @returns {Promise<Event[]>}
   */
  async loadEvents(fromEventId = null) {
    await this.ensureAuth();

    const opts = { datasource: 'tranquility' };
    if (fromEventId) opts.from_event = fromEventId;

    const raw = await this.api.getCharactersCharacterIdCalendar(this.characterId, opts);
    this.events = raw.map(e => new Event(e));
    return this.events;
  }

  /**
   * Retrieve detailed data for a specific event.
   *
   * @param {number} eventId
   * @returns {Promise<Event>}
   */
  async getEvent(eventId) {
    await this.ensureAuth();

    const data = await this.api.getCharactersCharacterIdCalendarEventId(this.characterId, eventId, {
      datasource: 'tranquility'
    });

    return new Event(data);
  }

  /**
   * Update the RSVP response for a specific event.
   *
   * @param {number} eventId
   * @param {string} response - 'accepted', 'declined', 'tentative', or 'none'.
   * @returns {Promise<boolean>}
   */
  async updateResponse(eventId, response) {
    await this.ensureAuth();

    await this.api.putCharactersCharacterIdCalendarEventId(this.characterId, eventId, {
      datasource: 'tranquility',
      response
    });

    const event = this.events.find(e => e.id === eventId);
    if (event) event.updateResponse(response);

    return true;
  }

  /**
   * Convert all loaded events into plain objects.
   *
   * @returns {Object[]}
   */
  toJSON() {
    return this.events.map(e => e.toJSON());
  }
}

module.exports = Calendar;
