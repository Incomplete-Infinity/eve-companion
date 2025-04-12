const ESI = require('eve_swagger_interface');
const Attribute = require('../Attribute');
const Effect = require('../../js/classes/Effect');
const Item = require('../../inventory/Item');

/**
 * Represents the dogma system in the EVE Online universe.
 * Dogma defines attributes, effects, and items, which influence ships, modules, and other in-game objects.
 * This class allows retrieval and management of dogma attributes and effects, and associates them with items.
 */
export default class Dogma {
  /**
   * Creates an instance of the Dogma class.
   * Initializes the ESI Dogma API client for interacting with dogma-related data.
   */
  constructor() {
    /**
     * @type {ESI.DogmaApi}
     * @description Instance of the EVE Swagger Interface Dogma API for retrieving dogma-related data.
     */
    this.api = new ESI.DogmaApi();
  }

  /**
   * Retrieves all dogma attributes from the EVE Swagger Interface API.
   * @returns {Promise<Object[]>} A promise that resolves to an array of dogma attributes.
   */
  async getAllAttributes() {
    return await this.api.getDogmaAttributes({ datasource: 'tranquility' });
  }

  /**
   * Retrieves a specific dogma attribute by its ID.
   * @param {number} attributeId - The ID of the attribute to retrieve.
   * @returns {Promise<Attribute>} A promise that resolves to an instance of the `Attribute` class representing the dogma attribute.
   */
  async getAttribute(attributeId) {
    const data = await this.api.getDogmaAttributesAttributeId(attributeId, {
      datasource: 'tranquility',
    });

    return new Attribute(data);
  }

  /**
   * Retrieves all dogma effects from the EVE Swagger Interface API.
   * @returns {Promise<Object[]>} A promise that resolves to an array of dogma effects.
   */
  async getAllEffects() {
    return await this.api.getDogmaEffects({ datasource: 'tranquility' });
  }

  /**
   * Retrieves a specific dogma effect by its ID.
   * @param {number} effectId - The ID of the effect to retrieve.
   * @returns {Promise<Effect>} A promise that resolves to an instance of the `Effect` class representing the dogma effect.
   */
  async getEffect(effectId) {
    const data = await this.api.getDogmaEffectsEffectId(effectId, {
      datasource: 'tranquility',
    });

    return new Effect(data);
  }

  /**
   * Retrieves an item by its type ID and optionally its item ID, and associates dogma attributes and effects with it.
   * @param {number} typeId - The type ID of the item.
   * @param {number|null} [itemId=null] - The item ID, if applicable (used for specific items, such as modules or ships).
   * @returns {Promise<Item>} A promise that resolves to an instance of the `Item` class, enriched with dogma attributes and effects.
   */
  async getItem(typeId, itemId = null) {
    const fn = itemId
      ? this.api.getDogmaDynamicItemsTypeIdItemId
      : this.api.getDogmaDynamicItemsTypeId;

    const data = await fn.call(this.api, typeId, itemId, {
      datasource: 'tranquility',
    });

    const item = new Item(typeId, itemId);
    item.setAttributes(data.dogma_attributes.map(attr => new Attribute(attr)));
    item.setEffects(data.dogma_effects.map(eff => new Effect(eff)));

    return item;
  }
}