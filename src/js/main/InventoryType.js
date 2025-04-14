const EveSwaggerInterface = require('eve_swagger_interface');
const Universe = require('../../../Universe');

/**
 * @class InventoryType
 * @classdesc Represents an item type in the EVE universe (ships, implants, modules, etc.).
 * Initialized with a type ID, and enriched with metadata and dogma attributes via `.load()`.
 */
export default class InventoryType {
  /**
   * Construct a new InventoryType with just the type ID.
   *
   * @constructor
   * @param {number} typeId - Unique inventory type ID.
   */
  constructor(typeId) {
    /** @type {number} Unique inventory type ID */
    this.id = typeId;

    const apiInstance = new Universe.UniverseApi();
        
    const opts = { 
      'acceptLanguage': "en-us", // String | Language to use in the response
      'datasource': "tranquility", // String | The server name you would like data from
      'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
      'language': "en-us" // String | Language to use in the response, takes precedence over Accept-Language
    };
    
    const callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('/Universe/Types/{TypeId} called successfully. Returned data: ' + data);
      }
    };
    apiInstance.getUniverseTypesTypeId(typeId, opts, callback);




    /** @type {string|null} Human-readable item name */
    this.name = null;

    /** @type {string|null} Description of the item */
    this.description = null;

    /** @type {number|null} Group ID the item belongs to */
    this.groupId = null;

    /** @type {number|null} Market group ID */
    this.marketGroupId = null;

    /** @type {boolean|null} Whether the item is published */
    this.published = null;

    /** @type {ESI.UniverseApi} Swagger client API */
    this.api = new ESI.UniverseApi();

    /** @type {Attribute[]} Dogma attributes bound to this item */
    this.attributes = [];
  }

  /**
   * Construct and immediately load full metadata for an InventoryType.
   *
   * @static
   * @param {number} typeId - EVE item type ID.
   * @returns {Promise<InventoryType>} Fully loaded instance.
   */
  static async fromTypeId(typeId) {
    const instance = new InventoryType(typeId);
    await instance.load();
    return instance;
  }

  /**
   * Fetch full metadata and dogma attributes for this type ID.
   *
   * @async
   * @returns {Promise<InventoryType>} This instance, enriched.
   */
  async load() {
    const data = await this.api.getUniverseTypesTypeId(this.id, {
      datasource: 'tranquility'
    });

    this.name = data.name;
    this.description = data.description;
    this.groupId = data.group_id;
    this.marketGroupId = data.market_group_id;
    this.published = data.published;

    if (Array.isArray(data.dogma_attributes)) {
      this.attributes = data.dogma_attributes.map(attr => new Attribute(attr));
    }

    return this;
  }

  /**
   * Serialize the InventoryType for transport or storage.
   *
   * @returns {Object} JSON-safe representation of this item type.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      groupId: this.groupId,
      marketGroupId: this.marketGroupId,
      published: this.published,
      attributes: this.attributes.map(a => a.toJSON())
    };
  }
}
