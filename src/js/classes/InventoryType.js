import { Api } from '../../../public/esi-client.js';
import DogmaAttribute from './DogmaAttribute.js';
import DogmaEffect from './DogmaEffect.js';

const universeApi = new Api({
  baseURL: 'https://esi.evetech.net/latest',
  baseApiParams: { datasource: 'tranquility' }
}).universe;

export default class InventoryType {
  constructor(id) {
    console.log(`starting constructor for InventoryType(${id}).`);
    this.id = id;
    this.name = '';
    this.description = '';
    this.group_id = null;
    this.market_group_id = null;
    this.volume = null;
    this.packaged_volume = null;
    this.published = false;
    this.dogma_attributes = [];
    this.dogma_effects = [];
  }

  async load(recursions = 1, options = { skipUnpublished: true }) {
    const { data } = await universeApi.getUniverseTypesTypeId(this.id);
    this.name = data.name;
    this.published = data.published;
    if ((recursions <= 0) || (options.skipUnpublished && !this.published)) return null;
    this.description = data.description;
    this.group_id = data.group_id;
    this.market_group_id = data.market_group_id;
    this.volume = data.volume;
    this.packaged_volume = data.packaged_volume;

    this.dogmaAttributes = data.dogma_attributes.map(a => new DogmaAttribute(a.effect_id)) || [];
    this.dogmaEffects = data.dogma_effects.map(e => new DogmaEffect(e)) || [];
  }
}