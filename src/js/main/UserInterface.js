/**
 * @file UserInterface.js
 * @description Centralized message bus and component updater for the frontend, enabling decoupled communication via custom events.
 *
 * @class UserInterface
 * @classdesc Manages component updates and event broadcasting between backend and frontend layers.
 */

export default class UserInterface {
  /**
   * Initializes the UI dispatcher and event subscriber system.
   */
  constructor() {
    /** @type {Map<string, Function[]>} */
    this.subscribers = new Map(); // event → [callback, ...]
  }

  /**
   * Register a callback to an event.
   * @param {string} event - The name of the event to subscribe to.
   * @param {Function} callback - The function to call when the event is dispatched.
   */
  subscribe(event, callback) {
    if (!this.subscribers.has(event)) this.subscribers.set(event, []);
    this.subscribers.get(event).push(callback);
  }

  /**
   * Dispatch an event and invoke all registered callbacks.
   * @param {string} event - The event name.
   * @param {*} payload - The data to send to subscribers.
   */
  dispatch(event, payload) {
    const listeners = this.subscribers.get(event) || [];
    listeners.forEach(fn => fn(payload));
  }

  /**
   * Shortcut to trigger updates for specific frontend components.
   * @param {string} componentId - Component identifier.
   * @param {*} data - Data payload to send with the update.
   */
  updateComponent(componentId, data) {
    this.dispatch(`update:${componentId}`, data);
  }

  /**
   * Structured communication channel to the frontend layer.
   * @param {string} type - Message type (e.g., 'notify', 'popup', 'stateChange').
   * @param {*} data - Payload to be sent.
   */
  sendToFrontend(type, data) {
    this.dispatch(`frontend:${type}`, data);
  }

  /**
   * Dispatch a log message to the UI for debugging, notifications, or console mirroring.
   * @param {string} message - The log message.
   * @param {*} [data=null] - Optional related data.
   */
  log(message, data = null) {
    this.dispatch('log', { message, data });
  }

  /**
   * Returns a list of currently tracked event names.
   * @returns {{ events: string[] }}
   */
  toJSON() {
    return {
      events: [...this.subscribers.keys()]
    };
  }
}
