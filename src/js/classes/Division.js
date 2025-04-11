class Division {
    constructor({ division, name }) {
      this.divisionId = division;
      this.name = name;
    }
  
    toJSON() {
      return {
        divisionId: this.divisionId,
        name: this.name
      };
    }
  }
  
  module.exports = Division;
  