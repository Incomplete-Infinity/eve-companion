/**
 * @file Status.js
 * @description Tracks server status and online player count from the EVE Online Tranquility server.
 * 
 * @requires eve_swagger_interface
 */

const ESI = require('eve_swagger_interface');

/**
 * @class Status
 * @classdesc Retrieves and stores server status info from the ESI API.
 */
export default class Status {
  /**
   * @constructor
   */
  constructor() {
    /** @type {ESI.StatusApi} */
    this.api = new ESI.StatusApi();

    /** @type {?object} */
    this.status = null;
  }

  /**
   * Load server status from ESI and store it internally.
   * @returns {Promise<object>} The raw status object from ESI.
   */
  async load() {
    const data = await this.api.getStatus({ datasource: 'tranquility' });
    this.status = data;
    return data;
  }

  /**
   * Indicates whether the server is currently online.
   * @returns {boolean}
   */
  isOnline() {
    return this.status?.players > 0;
  }

  /**
   * Return the status data as a plain object.
   * @returns {object|null}
   */
  toJSON() {
    return this.status;
  }
}
