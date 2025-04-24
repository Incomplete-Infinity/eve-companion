import Universe from "./Universe.js";
import DogmaAttribute from "./DogmaAttribute.js";

const dogmaApi = new Universe().esiClient().dogma;

export default class DogmaEffect {
  constructor(id) {
    this.id = typeof id === "object" && id?.id ? id.id : id;
    if (typeof this.id !== 'number' && typeof this.id !== 'string') {
      throw new TypeError(`DogmaEffect constructor received invalid ID: ${JSON.stringify(id)}`);
    }
    this.name = null;
    this.description = null;
    this.display_name = null;
    this.published = null;
    this.effect_category = null;
    this.is_assistance = null;
    this.is_offensive = null;
    this.is_warp_safe = null;
    this.disallow_auto_repeat = null;
    this.range_chance = null;
    this.electronic_chance = null;

    this.duration_attribute_id = null;
    this.discharge_attribute_id = null;
    this.range_attribute_id = null;
    this.falloff_attribute_id = null;
    this.tracking_speed_attribute_id = null;

    this.pre_expression = null;
    this.post_expression = null;

    this.icon_id = null;
    this.modifiers = [];

    this.loaded = false;

    this.ready = this.load();
  }

  async load() {
    if (this.loaded) return;

    const { data } = await dogmaApi.getDogmaEffectsEffectId(this.id);
  
    // Assign primitives
    Object.assign(this, {
      name: data.name,
      description: data.description,
      display_name: data.display_name,
      published: data.published,
      effect_category: data.effect_category,
      is_assistance: data.is_assistance,
      is_offensive: data.is_offensive,
      is_warp_safe: data.is_warp_safe,
      disallow_auto_repeat: data.disallow_auto_repeat,
      range_chance: data.range_chance,
      electronic_chance: data.electronic_chance,
      pre_expression: data.pre_expression,
      post_expression: data.post_expression,
      icon_id: data.icon_id,
    });
  
    // Load DogmaAttribute instances and await
    this.duration_attribute = (typeof this.duration_attribute != "undefined") && await new DogmaAttribute(data.duration_attribute_id).load();
    this.discharge_attribute = (typeof this.discharge_attribute != "undefined") && await new DogmaAttribute(data.discharge_attribute_id).load();
    this.range_attribute = (typeof this.range_attribute != "undefined") && await new DogmaAttribute(data.range_attribute_id).load();
    this.falloff_attribute = (typeof this.falloff_attribute != "undefined") && await new DogmaAttribute(data.falloff_attribute_id).load();
    this.tracking_speed_attribute = (typeof this.tracking_speed_attribute != "undefined") && await new DogmaAttribute(data.tracking_speed_attribute_id).load();
  
    // Load modifiers, if present
    this.modifiers = await Promise.all((data.modifiers || []).map(async mod => ({
      domain: mod.domain,
      effect: (typeof mod.effect_id != "undefined") && await new DogmaAttribute(mod.effect_id).load(),
      func: mod.func,
      modifiedAttribute: (typeof mod.modified_attribute_id != "undefined") && await new DogmaAttribute(mod.modified_attribute_id).load(),
      modifyingAttribute: (typeof mod.modifying_attribute_id != "undefined") && await new DogmaAttribute(mod.modifying_attribute_id).load(),
      operator: mod.operator,
    })));

    this.loaded = true;
  }
  
}
