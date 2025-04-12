const Attendee = require('./Attendee');

/**
 * Represents an event in a system, such as a meeting or appointment.
 * The Event class allows for the creation, management, and tracking of event details, including attendees and responses.
 */
export default class Event {
  /**
   * Creates an instance of the Event class.
   * @param {Object} eventData - The data for the event.
   * @param {number} eventData.event_id - The unique ID of the event.
   * @param {string} eventData.event_date - The date of the event (in ISO 8601 format).
   * @param {string} eventData.title - The title of the event.
   * @param {string} eventData.text - The description of the event.
   * @param {string} eventData.importance - The importance level of the event (e.g., "high", "low").
   * @param {number} eventData.owner_id - The ID of the event owner (typically the organizer).
   * @param {string|null} [eventData.response=null] - The response from the attendee (e.g., "accepted", "declined"), or null if not yet responded.
   */
  constructor({
    event_id,
    event_date,
    title,
    text,
    importance,
    owner_id,
    response
  }) {
    /**
     * @type {number}
     * @description The unique ID of the event.
     */
    this.id = event_id;

    /**
     * @type {string}
     * @description The date of the event (in ISO 8601 format).
     */
    this.date = event_date;

    /**
     * @type {string}
     * @description The title of the event.
     */
    this.title = title;

    /**
     * @type {string}
     * @description The description of the event.
     */
    this.description = text;

    /**
     * @type {string}
     * @description The importance level of the event (e.g., "high", "low").
     */
    this.importance = importance;

    /**
     * @type {number}
     * @description The ID of the event owner (typically the organizer).
     */
    this.ownerId = owner_id;

    /**
     * @type {string|null}
     * @description The response from the attendee (e.g., "accepted", "declined"), or null if not yet responded.
     */
    this.response = response ?? null;

    /**
     * @type {Array<Attendee>}
     * @description An array of attendees who have RSVP'd for the event.
     */
    this.attendees = []; // Optional, if you simulate RSVP tracking
  }

  /**
   * Adds an attendee to the event.
   * This method is used to track attendees who have responded to the event.
   * @param {Attendee} attendee - The attendee object to be added to the event.
   */
  addAttendee(attendee) {
    this.attendees.push(attendee);
  }

  /**
   * Updates the response for the event (e.g., changes from "declined" to "accepted").
   * @param {string} response - The new response for the event (e.g., "accepted", "declined").
   */
  updateResponse(response) {
    this.response = response;
  }

  /**
   * Converts the event instance into a plain JavaScript object.
   * This allows for easier serialization and manipulation of the event data.
   * @returns {Object} The plain JavaScript object representing the event.
   */
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
