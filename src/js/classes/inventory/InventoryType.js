import ESIClient from '../utility/ESIClient.js';
import Dogma from "./Dogma.js";

const universeApi = new ESIClient().universe;

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
    this.loaded = false;
    this.ready = this.load();
  }

  async load(recursions = 1, options = { skipUnpublished: true }) {
    if (this.loaded || recursions <= 0) return;
    const { data } = await universeApi.getUniverseTypesTypeId(this.id);
    this.name = data.name;
    this.description = data.description;
    this.group_id = data.group_id;
    this.market_group_id = data.market_group_id;
    this.volume = data.volume;
    this.packaged_volume = data.packaged_volume;

    this.dogmaAttributes = data.dogma_attributes.map(a => new Dogma.dogmaAttribute(a.attribute_id)) || [];
    this.dogmaEffects = data.dogma_effects.map(e => {
      return new Dogma.dogmaEffect(e.effect_id) || []
    });
    this.loaded = true;
  }
}