const ESI = require('eve_swagger_interface');

class Insurance {
  constructor() {
    this.api = new ESI.InsuranceApi();
    this.plans = [];
  }

  async load() {
    this.plans = await this.api.getInsurancePrices({ datasource: 'tranquility' });
    return this.plans;
  }

  getByType(typeId) {
    return this.plans.find(p => p.type_id === typeId) || null;
  }

  getPayout(typeId, level = 'Platinum') {
    const plan = this.getByType(typeId);
    return plan?.levels.find(l => l.name === level) || null;
  }

  toJSON() {
    return this.plans;
  }
}

module.exports = Insurance;
/*
const Insurance = require('./Insurance');
const insurance = new Insurance();

await insurance.load();
const payout = insurance.getPayout(17841, 'Gold');
console.log(payout);
*/