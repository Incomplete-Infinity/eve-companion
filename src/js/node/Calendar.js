const ESI = require('eve_swagger_interface');
const Event = require('./Event');

class Calendar {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.CalendarApi();
    this.events = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Auth required for calendar access');
    await this.auth.ensureValidToken();
  }

  async loadEvents(fromEventId = null) {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };
    if (fromEventId) opts.from_event = fromEventId;

    const raw = await this.api.getCharactersCharacterIdCalendar(this.characterId, opts);
    this.events = raw.map(e => new Event(e));
    return this.events;
  }

  async getEvent(eventId) {
    await this.ensureAuth();
    const data = await this.api.getCharactersCharacterIdCalendarEventId(this.characterId, eventId, {
      datasource: 'tranquility'
    });

    return new Event(data);
  }

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

  toJSON() {
    return this.events.map(e => e.toJSON());
  }
}

module.exports = Calendar;
