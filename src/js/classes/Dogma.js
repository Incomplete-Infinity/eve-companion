const ESI = require('eve_swagger_interface');
const Attribute = require('./Attribute');
const Effect = require('./Effect');
const Item = require('./Item');

class Dogma {
  constructor() {
    this.api = new ESI.DogmaApi();
  }

  async getAllAttributes() {
    return await this.api.getDogmaAttributes({ datasource: 'tranquility' });
  }

  async getAttribute(attributeId) {
    const data = await this.api.getDogmaAttributesAttributeId(attributeId, {
      datasource: 'tranquility',
    });

    return new Attribute(data);
  }

  async getAllEffects() {
    return await this.api.getDogmaEffects({ datasource: 'tranquility' });
  }

  async getEffect(effectId) {
    const data = await this.api.getDogmaEffectsEffectId(effectId, {
      datasource: 'tranquility',
    });

    return new Effect(data);
  }

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

module.exports = Dogma;

/*
const Dogma = require('./Dogma');
const dogma = new Dogma();

const attribute = await dogma.getAttribute(70); // powergrid
const effect = await dogma.getEffect(11); // cloaking

const item = await dogma.getItem(596); // Caracal base typeId
console.log(item.toJSON());
*/