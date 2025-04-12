/**
 * Represents an effect in the EVE Online universe.
 * Effects are attributes or modifiers applied to various entities in the game, such as ships, modules, or items.
 */
export default class Effect {
  /**
   * Creates an instance of the Effect class.
   * @param {Object} effectData - The data for the effect.
   * @param {number} effectData.effect_id - The unique ID of the effect.
   * @param {string} effectData.name - The name of the effect.
   * @param {string} effectData.description - The description of the effect.
   * @param {number} effectData.icon_id - The ID of the icon associated with the effect.
   * @param {boolean} effectData.is_assistance - Whether the effect provides assistance.
   * @param {boolean} effectData.is_offensive - Whether the effect is offensive.
   * @param {boolean} effectData.is_warp_safe - Whether the effect is warp-safe.
   * @param {string} effectData.pre_expression - The pre-expression formula of the effect, if applicable.
   * @param {string} effectData.post_expression - The post-expression formula of the effect, if applicable.
   */
  constructor({
    effect_id,
    name,
    description,
    icon_id,
    is_assistance,
    is_offensive,
    is_warp_safe,
    pre_expression,
    post_expression,
  }) {
    /**
     * @type {number}
     * @description The unique ID of the effect.
     */
    this.id = effect_id;

    /**
     * @type {string}
     * @description The name of the effect.
     */
    this.name = name;

    /**
     * @type {string}
     * @description The description of the effect.
     */
    this.description = description;

    /**
     * @type {number}
     * @description The ID of the icon associated with the effect.
     */
    this.iconId = icon_id;

    /**
     * @type {boolean}
     * @description Whether the effect provides assistance.
     */
    this.isAssistance = is_assistance;

    /**
     * @type {boolean}
     * @description Whether the effect is offensive.
     */
    this.isOffensive = is_offensive;

    /**
     * @type {boolean}
     * @description Whether the effect is warp-safe.
     */
    this.isWarpSafe = is_warp_safe;

    /**
     * @type {string}
     * @description The pre-expression formula of the effect, if applicable.
     */
    this.preExpression = pre_expression;

    /**
     * @type {string}
     * @description The post-expression formula of the effect, if applicable.
     */
    this.postExpression = post_expression;
  }

  /**
   * Converts the effect instance into a plain JavaScript object.
   * This allows for easier serialization and manipulation of the effect data.
   * @returns {Object} The plain JavaScript object representing the effect.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      iconId: this.iconId,
      isAssistance: this.isAssistance,
      isOffensive: this.isOffensive,
      isWarpSafe: this.isWarpSafe,
      preExpression: this.preExpression,
      postExpression: this.postExpression,
    };
  }
}
