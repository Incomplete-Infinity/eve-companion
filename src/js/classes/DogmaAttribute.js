import { Api } from '../../../public/esi-client.js';

const dogmaApi = new Api({
  baseURL: 'https://esi.evetech.net/latest',
  baseApiParams: { datasource: 'tranquility' }
}).dogma;

export default class DogmaAttribute {
  constructor(id) {
    console.log(`starting constructor for DogmaAttribute(${id}).`);
    this.id = id;
    this.defaultValue = null
    this.description = null;
    this.displayName = '';
    this.highIsGood = false;
    this.name = '';
    this.published = false;
    this.stackable = false;
  this.unitId = null;
}

  async load(options = { skipUnpublished: true }) {
    const { data } = await dogmaApi.getDogmaAttributesAttributeId(this.id);
    this.name = data.name;
    this.published = data.published;
    if (options.skipUnpublished && !data.published) return null;
    this.defaultValue = data.default_value;
    this.description = data.description;
    this.displayName = data.display_name;
    this.highIsGood = data.high_is_good;
    this.stackable = data.stackable;
    this.unitId = data.unit_id;
  }
}