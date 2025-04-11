class Squad {
    constructor({ squad_id, name = null }) {
      this.id = squad_id;
      this.name = name;
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name
      };
    }
  }
  
  module.exports = Squad;
  