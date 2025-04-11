const ESI = require('eve_swagger_interface');

class Contract {
  constructor(ownerId, contractId, { auth = null, scope = 'character' } = {}) {
    this.ownerId = ownerId;
    this.contractId = contractId;
    this.auth = auth;
    this.scope = scope; // 'character' | 'corporation'
    this.api = new ESI.ContractsApi();

    this.data = null;
    this.items = [];
    this.bids = [];
  }

  async ensureAuth() {
    if (this.scope !== 'public' && !this.auth)
      throw new Error('Contract API requires authentication');
    if (this.auth) await this.auth.ensureValidToken();
  }

  async loadDetails() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    const fn = this.scope === 'corporation'
      ? this.api.getCorporationsCorporationIdContractsContractId
      : this.api.getCharactersCharacterIdContractsContractId;

    this.data = await fn(this.ownerId, this.contractId, opts);
    return this.data;
  }

  async loadItems() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    const fn = this.scope === 'corporation'
      ? this.api.getCorporationsCorporationIdContractsContractIdItems
      : this.api.getCharactersCharacterIdContractsContractIdItems;

    this.items = await fn(this.ownerId, this.contractId, opts);
    return this.items;
  }

  async loadBids() {
    await this.ensureAuth();
    const opts = { datasource: 'tranquility' };

    const fn = this.scope === 'corporation'
      ? this.api.getCorporationsCorporationIdContractsContractIdBids
      : this.api.getCharactersCharacterIdContractsContractIdBids;

    this.bids = await fn(this.ownerId, this.contractId, opts);
    return this.bids;
  }

  toJSON() {
    return {
      contractId: this.contractId,
      ...this.data,
      items: this.items,
      bids: this.bids
    };
  }
}

module.exports = Contract;
