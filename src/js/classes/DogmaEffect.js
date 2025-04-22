import { Api } from "../../../public/esi-client.js";
import DogmaAttribute from "./DogmaAttribute.js";

const apiClient = new Api({
  baseURL: "https://esi.evetech.net/latest",
  baseApiParams: { datasource: "tranquility" },
});
const dogmaApi = apiClient.dogma;

export default class DogmaEffect {
  constructor(id) {
    this.id = id;
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

    this.ready = this.load();
  }

  async load() {
    const { data } = await dogmaApi.getDogmaEffectsEffectId(this.id);
console.log(data);
    Object.assign(this, {
      name: data.name,
      description: data.description,
      displayName: data.display_name,
      published: data.published,
      effectCategory: data.effect_category,
      isAssistance: data.is_assistance,
      isOffensive: data.is_offensive,
      isWarpSafe: data.is_warp_safe,
      disallowAutoRepeat: data.disallow_auto_repeat,
      rangeChance: data.range_chance,
      electronicChance: data.electronic_chance,

      durationAttribute: new DogmaAttribute(data.duration_attribute_id),
      dischargeAttribute: new DogmaAttribute(data.discharge_attribute_id),
      rangeAttribute: new DogmaAttribute(data.range_attribute_id),
      falloffAttribute: new DogmaAttribute(data.falloff_attribute_id),
      trackingSpeedAttribute: new DogmaAttribute(data.tracking_speed_attribute_id),

      preExpression: data.pre_expression,
      postExpression: data.post_expression,
      iconId: data.icon_id,
    });

    this.modifiers = (data.modifiers || []).map(mod => ({
      domain: mod.domain,
      effect: new DogmaAttribute(mod.effect_id),
      func: mod.func,
      modifiedAttribute: new DogmaAttribute(mod.modified_attribute_id),
      modifyingAttribute: new DogmaAttribute(mod.modifying_attribute_id),
      operator: mod.operator,
    }));
  }
}
