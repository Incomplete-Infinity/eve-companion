class Effect {
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
      this.id = effect_id;
      this.name = name;
      this.description = description;
      this.iconId = icon_id;
      this.isAssistance = is_assistance;
      this.isOffensive = is_offensive;
      this.isWarpSafe = is_warp_safe;
      this.preExpression = pre_expression;
      this.postExpression = post_expression;
    }
  
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
  
  module.exports = Effect;
  