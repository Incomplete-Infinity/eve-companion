const ESI = require('eve_swagger_interface');

class Loyalty {
  constructor() {
    this.api = new ESI.LoyaltyApi();
    this.offers = new Map(); // key: corp_id, value: offers[]
  }

  async loadOffers(corporationId) {
    if (this.offers.has(corporationId)) return this.offers.get(corporationId);

    const data = await this.api.getLoyaltyStoresCorporationIdOffers(corporationId, {
      datasource: 'tranquility'
    });

    this.offers.set(corporationId, data);
    return data;
  }

  getOffers(corporationId) {
    return this.offers.get(corporationId) || [];
  }

  toJSON() {
    return Object.fromEntries(this.offers);
  }
}

module.exports = Loyalty;

/*
const Loyalty = require('./Loyalty');
const loyalty = new Loyalty();

await loyalty.loadOffers(1000169); // Republic Fleet
console.log(loyalty.getOffers(1000169));
*/