const xml2js = require('xml2js');
const InventoryType = require('./InventoryType');
const Dogma = require('../dogma/Dogma');

/**
 * Represents a fitting for a ship in the EVE Online universe.
 * This class provides methods to handle and parse different fitting formats (EFT, DNA, XML),
 * as well as resolve item details and convert the fitting to a plain JavaScript object.
 */
export default class Fitting {
  /**
   * Creates an instance of the Fitting class.
   * @param {Object} fittingData - The fitting data.
   * @param {number} [fittingData.fitting_id=null] - The ID of the fitting.
   * @param {string} fittingData.name - The name of the fitting.
   * @param {string} fittingData.description - The description of the fitting.
   * @param {number} fittingData.ship_type_id - The type ID of the ship being fitted.
   * @param {Array<Object>} [fittingData.items=[]] - A list of items in the fitting, each containing `type_id`, `flag`, and `quantity`.
   */
  constructor({
    fitting_id = null,
    name,
    description,
    ship_type_id,
    items = []
  }) {
    /**
     * @type {number}
     * @description The unique ID of the fitting.
     */
    this.id = fitting_id;

    /**
     * @type {string}
     * @description The name of the fitting.
     */
    this.name = name;

    /**
     * @type {string}
     * @description The description of the fitting.
     */
    this.description = description;

    /**
     * @type {number}
     * @description The type ID of the ship being fitted.
     */
    this.shipTypeId = ship_type_id;

    /**
     * @type {Array<Object>}
     * @description The items that make up the fitting, each containing `type_id`, `flag`, and `quantity`.
     */
    this.items = items; // {type_id, flag, quantity}
  }

  /**
   * Parses an EFT (EVE Fitting Tool) string into a Fitting object.
   * @param {string} eftString - The EFT format fitting string.
   * @returns {Fitting} The parsed Fitting instance.
   * @throws {Error} Throws an error if the EFT string is invalid.
   */
  static fromEFT(eftString) {
    const lines = eftString
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean);

    if (!lines.length || !lines[0].startsWith('[')) {
      throw new Error('Invalid EFT format');
    }

    const [shipSection, name] = lines[0]
      .slice(1, -1)
      .split(',')
      .map(s => s.trim());

    const shipTypeId = parseInt(shipSection); // fallback, override this if needed
    const items = [];

    const flagMap = [
      11, // High
      12, // Mid
      13, // Low
      14, // Rig
      92  // Subsystem
    ];

    let currentFlag = 11;
    let group = 0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];

      if (line === '') continue;

      if (line.startsWith('[')) {
        group++;
        currentFlag = flagMap[group] || 11;
        continue;
      }

      const item = {
        type_id: 0, // You’ll map this from the item name later
        flag: currentFlag,
        quantity: 1,
        name: line
      };

      items.push(item);
    }

    const fitting = new Fitting({
      name: name || 'Imported Fit',
      description: 'Parsed from EFT',
      ship_type_id: shipTypeId,
      items
    });

    return fitting;
  }

  /**
   * Parses a DNA (direct ship fitting string) format string into a Fitting object.
   * @param {string} dnaString - The DNA string format fitting string.
   * @returns {Fitting} The parsed Fitting instance.
   */
  static fromDNA(dnaString) {
    const [shipPart, ...items] = dnaString.split(':');
    const [shipTypeId] = shipPart.split(';').map(Number);
    const fittingItems = [];

    items.forEach(entry => {
      const [typeIdStr, qtyStr, flagStr] = entry.split(';');
      if (!typeIdStr || !qtyStr || !flagStr) return;

      fittingItems.push({
        type_id: Number(typeIdStr),
        quantity: Number(qtyStr),
        flag: Number(flagStr),
      });
    });

    return new Fitting({
      name: 'DNA Imported',
      description: 'Parsed from DNA string',
      ship_type_id: shipTypeId,
      items: fittingItems
    });
  }

  /**
   * Parses an XML fitting string into a Fitting object.
   * @param {string} xmlString - The XML string fitting data.
   * @returns {Promise<Fitting>} A promise that resolves to a parsed Fitting instance.
   */
  static async fromXML(xmlString) {
    const parsed = await xml2js.parseStringPromise(xmlString, { explicitArray: false });

    const fit = parsed.fitting;
    const name = fit.$.name || 'XML Fit';
    const shipTypeId = parseInt(fit.ship.$.typeID);
    const items = [];

    const slotList = Array.isArray(fit.hardware) ? fit.hardware : [fit.hardware];

    slotList.forEach(h => {
      items.push({
        type_id: parseInt(h.$.typeID),
        quantity: parseInt(h.$.quantity) || 1,
        flag: parseInt(h.$.flag),
      });
    });

    return new Fitting({
      name,
      description: 'Parsed from XML',
      ship_type_id: shipTypeId,
      items
    });
  }

  /**
   * Detects and parses an input string in one of the supported fitting formats (EFT, DNA, XML).
   * @param {string} input - The input fitting string to be detected and parsed.
   * @returns {Promise<Fitting>} A promise that resolves to the parsed Fitting instance.
   * @throws {Error} Throws an error if the format of the input is unknown.
   */
  static async detectAndParse(input) {
    input = input.trim();

    if (input.startsWith('[')) {
      return Fitting.fromEFT(input);
    } else if (/^\d+:/.test(input)) {
      return Fitting.fromDNA(input);
    } else if (input.startsWith('<fitting')) {
      return await Fitting.fromXML(input);
    }

    throw new Error('Unknown fitting format');
  }

  /**
   * Resolves the items in the fitting by enriching them with dogma data.
   * This method queries the inventory type and dogma effects for each item.
   * @returns {Promise<void>} Resolves once all items are enriched with their corresponding dogma data.
   */
  async resolveItems() {
    const dogma = new Dogma();

    for (const item of this.items) {
      const inv = await InventoryType.fromTypeId(item.type_id);
      const enriched = await dogma.getItem(item.type_id);
      inv.setDogma(enriched);
      item.resolved = inv;
    }
  }

  /**
   * Converts the fitting instance into a plain JavaScript object.
   * @returns {Object} The plain JavaScript object representing the fitting.
   */
  toJSON() {
    return {
      fitting_id: this.id,
      name: this.name,
      description: this.description,
      ship_type_id: this.shipTypeId,
      items: this.items
    };
  }
}
