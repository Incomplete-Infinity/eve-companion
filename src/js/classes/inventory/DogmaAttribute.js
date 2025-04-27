import ESIClient from "../utility/ESIClient.js";

const { dogmaApi } = new ESIClient().dogma;

export default class DogmaAttribute {
  constructor(id) {
    this.id = typeof id === "object" && id?.id ? id.id : id;
    this.defaultValue = null;
    this.description = null;
    this.displayName = '';
    this.highIsGood = false;
    this.name = '';
    this.published = false;
    this.stackable = false;
    this.unitId = null;

    this.loaded = false;
    this.ready = this.load();
  }

  async load(recursions = 1) {
    if (this.loaded || recursions <= 0) return;
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

    this.loaded = true;
  }
}
