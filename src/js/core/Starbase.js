/**
 * @file Starbase.js
 * @description Represents a Player-Owned Starbase (POS) structure and its timers/states.
 */

/**
 * @class Starbase
 * @classdesc Models the state and metadata of a legacy POS structure.
 */
export default class Starbase {
  /**
   * @constructor
   * @param {object} data - Starbase data from ESI.
   * @param {number} data.item_id - Unique identifier for the starbase.
   * @param {number} data.type_id - Type ID (tower type).
   * @param {number} data.location_id - System or moon location.
   * @param {string} data.state - Current POS state (`online`, `reinforced`, etc.).
   * @param {string} [data.state_timer_start] - ISO date string when the current state started.
   * @param {string} [data.state_timer_end] - ISO date string when the current state ends.
   * @param {string} [data.reinforce_timer_end] - ISO date string for reinforcement end.
   */
  constructor({ item_id, type_id, location_id, state, state_timer_start, state_timer_end, reinforce_timer_end }) {
    /** @type {number} */
    this.id = item_id;

    /** @type {number} */
    this.typeId = type_id;

    /** @type {number} */
    this.locationId = location_id;

    /** @type {string} */
    this.state = state;

    /** @type {string|null} */
    this.stateStart = state_timer_start ?? null;

    /** @type {string|null} */
    this.stateEnd = state_timer_end ?? null;

    /** @type {string|null} */
    this.reinforceEnd = reinforce_timer_end ?? null;
  }

  /**
   * Serialize this starbase into a plain object.
   * @returns {object}
   */
  toJSON() {
    return {
      id: this.id,
      typeId: this.typeId,
      locationId: this.locationId,
      state: this.state,
      stateStart: this.stateStart,
      stateEnd: this.stateEnd,
      reinforceEnd: this.reinforceEnd
    };
  }
}