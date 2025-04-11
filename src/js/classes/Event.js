const Attendee = require('./Attendee');

class Event {
  constructor({ event_id, event_date, title, text, importance, owner_id, response }) {
    this.id = event_id;
    this.date = event_date;
    this.title = title;
    this.description = text;
    this.importance = importance;
    this.ownerId = owner_id;
    this.response = response ?? null;
    this.attendees = []; // Optional, if you simulate RSVP tracking
  }

  addAttendee(attendee) {
    this.attendees.push(attendee);
  }

  updateResponse(response) {
    this.response = response;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      date: this.date,
      description: this.description,
      importance: this.importance,
      response: this.response,
      ownerId: this.ownerId,
      attendees: this.attendees.map(a => a.toJSON())
    };
  }
}

module.exports = Event;
