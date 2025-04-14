const Wing = require('./Wing');
const FleetMember = require('./FleetMember');

/**
 * Represents a Fleet in the EVE Online universe.
 * The Fleet class interacts with the EVE Swagger Interface to retrieve and manage fleet information, including fleet details, wings, and members.
 * This class is responsible for ensuring authentication, loading fleet data, and formatting data into JSON.
 */
export default class Fleet {
  /**
   * Creates an instance of the Fleet class.
   * @param {number} fleetId - The ID of the fleet.
   * @param {Object} auth - The authentication object required to interact with the API.
   */
  constructor(fleetId, auth) {
    /**
     * @type {number}
     * @description The ID of the fleet.
     */
    this.fleetId = fleetId;

    /**
     * @type {Object}
     * @description The authentication object used for API requests.
     */
    this.auth = auth;

    /**
     * @type {Object}
     * @description Instance of the FleetsApi from the EVE Swagger Interface.
     */
    this.api = new (require('eve_swagger_interface')).FleetsApi();

    /**
     * @type {boolean}
     * @description Flag indicating if the fleet allows free movement.
     */
    this.isFreeMove = false;

    /**
     * @type {boolean}
     * @description Flag indicating if the fleet is registered.
     */
    this.isRegistered = false;

    /**
     * @type {boolean}
     * @description Flag indicating if the fleet has voice chat enabled.
     */
    this.voiceEnabled = false;

    /**
     * @type {Array<Wing>}
     * @description Array holding the wings of the fleet.
     */
    this.wings = [];

    /**
     * @type {Array<FleetMember>}
     * @description Array holding the members of the fleet.
     */
    this.members = [];
  }

  /**
   * Ensures that authentication is valid before making requests to the API.
   * Throws an error if authentication is not provided or invalid.
   * @throws {Error} Throws an error if authentication is not provided or invalid.
   * @returns {Promise<void>} Resolves if authentication is valid.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Fleet requests require auth');
    await this.auth.ensureValidToken();
  }

  /**
   * Loads detailed information about the fleet, such as registration status and voice chat availability.
   * Fetches data from the EVE Swagger Interface and updates the fleet's properties.
   * @returns {Promise<Object>} The data of the fleet, including free move status, registration status, and voice chat status.
   */
  async loadInfo() {
    await this.ensureAuth();
    const data = await this.api.getFleetsFleetId(this.fleetId, {
      datasource: 'tranquility'
    });

    this.isFreeMove = data.is_free_move;
    this.isRegistered = data.is_registered;
    this.voiceEnabled = data.is_voice_enabled;
    return data;
  }

  /**
   * Loads the wings of the fleet.
   * Fetches the list of wings from the EVE Swagger Interface and stores them in the `wings` property.
   * @returns {Promise<Array<Wing>>} The array of wings, each represented by an instance of the Wing class.
   */
  async loadWings() {
    await this.ensureAuth();
    const data = await this.api.getFleetsFleetIdWings(this.fleetId, {
      datasource: 'tranquility'
    });

    this.wings = data.map(w => new Wing(w));
    return this.wings;
  }

  /**
   * Loads the members of the fleet.
   * Fetches the list of fleet members from the EVE Swagger Interface and stores them in the `members` property.
   * @returns {Promise<Array<FleetMember>>} The array of fleet members, each represented by an instance of the FleetMember class.
   */
  async loadMembers() {
    await this.ensureAuth();
    const data = await this.api.getFleetsFleetIdMembers(this.fleetId, {
      datasource: 'tranquility'
    });

    this.members = data.map(m => new FleetMember(m.character_id, this.auth, m));
    return this.members;
  }

  /**
   * Converts the fleet instance into a plain JavaScript object.
   * The resulting object contains all relevant properties, including fleet information, wings, and members.
   * @returns {Object} The plain JavaScript object representing the fleet.
   */
  toJSON() {
    return {
      fleetId: this.fleetId,
      isFreeMove: this.isFreeMove,
      isRegistered: this.isRegistered,
      voiceEnabled: this.voiceEnabled,
      wings: this.wings.map(w => w.toJSON()),
      members: this.members.map(m => m.toJSON())
    };
  }
}
