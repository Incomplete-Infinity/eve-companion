class Starbase {
    constructor({ item_id, type_id, location_id, state, state_timer_start, state_timer_end, reinforce_timer_end }) {
      this.id = item_id;
      this.typeId = type_id;
      this.locationId = location_id;
      this.state = state;
      this.stateStart = state_timer_start;
      this.stateEnd = state_timer_end;
      this.reinforceEnd = reinforce_timer_end;
    }
  
    toJSON() {
      return {
        id: this.id,
        typeId: this.typeId,
        locationId: this.locationId,
        state: this.state,
        stateStart: this.stateStart,
        stateEnd: this.stateEnd,
        reinforceEnd: this.reinforceEnd
      };
    }
  }
  
  module.exports = Starbase;
  