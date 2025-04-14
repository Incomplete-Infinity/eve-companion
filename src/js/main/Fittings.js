const ESI = require('eve_swagger_interface');
const Fitting = require('./Fitting');

/**
 * Represents a collection of fittings for a specific character in the EVE Online universe.
 * This class provides methods to load, add, and delete fittings, as well as convert the fittings data to a plain JavaScript object.
 */
export default class Fittings {
  /**
   * Creates an instance of the Fittings class.
   * @param {number} characterId - The ID of the character whose fittings are being managed.
   * @param {Object} auth - The authentication object used to interact with the API.
   */
  constructor(characterId, auth) {
    /**
     * @type {number}
     * @description The character ID associated with the fittings.
     */
    this.characterId = characterId;

    /**
     * @type {Object}
     * @description The authentication object used for API requests.
     */
    this.auth = auth;

    /**
     * @type {ESI.FittingsApi}
     * @description The instance of the EVE Swagger Interface Fittings API.
     */
    this.api = new ESI.FittingsApi();

    /**
     * @type {Array<Fitting>}
     * @description Array holding all the fittings of the character.
     */
    this.fittings = [];
  }

  /**
   * Ensures that authentication is valid before making requests to the Fittings API.
   * Throws an error if authentication is not provided or invalid.
   * @throws {Error} Throws an error if authentication is not provided or invalid.
   * @returns {Promise<void>} Resolves if authentication is valid.
   */
  async ensureAuth() {
    if (!this.auth) throw new Error('Auth required for Fittings API');
    await this.auth.ensureValidToken();
  }

  /**
   * Loads the fittings associated with the character from the EVE Swagger Interface API.
   * Fetches the list of fittings and updates the `fittings` property with instances of the Fitting class.
   * @returns {Promise<Array<Fitting>>} The array of fittings, each represented by an instance of the Fitting class.
   */
  async load() {
    await this.ensureAuth();
    const data = await this.api.getCharactersCharacterIdFittings(this.characterId, {
      datasource: 'tranquility'
    });

    this.fittings = data.map(f => new Fitting(f));
    return this.fittings;
  }

  /**
   * Adds a new fitting to the character's fittings list.
   * Sends a request to the Fittings API to create the fitting and then adds it to the `fittings` array.
   * @param {Fitting} fitting - The fitting object to be added to the character's fittings.
   * @returns {Promise<Fitting>} The newly added fitting, including its ID assigned by the API.
   */
  async add(fitting) {
    await this.ensureAuth();
    const payload = {
      name: fitting.name,
      description: fitting.description,
      ship_type_id: fitting.shipTypeId,
      items: fitting.items
    };

    const result = await this.api.postCharactersCharacterIdFittings(this.characterId, {
      fitting: payload,
      datasource: 'tranquility'
    });

    fitting.id = result.fitting_id;
    this.fittings.push(fitting);
    return fitting;
  }

  /**
   * Deletes a fitting by its ID.
   * Sends a request to the Fittings API to delete the fitting and removes it from the `fittings` array.
   * @param {number} fittingId - The ID of the fitting to be deleted.
   * @returns {Promise<boolean>} Resolves to true if the fitting was successfully deleted.
   */
  async delete(fittingId) {
    await this.ensureAuth();
    await this.api.deleteCharactersCharacterIdFittingsFittingId(this.characterId, fittingId, {
      datasource: 'tranquility'
    });

    this.fittings = this.fittings.filter(f => f.id !== fittingId);
    return true;
  }

  /**
   * Converts the fittings array into a plain JavaScript object.
   * Each fitting is converted into its own JSON representation.
   * @returns {Object[]} An array of plain JavaScript objects representing the fittings.
   */
  toJSON() {
    return this.fittings.map(f => f.toJSON());
  }
}
