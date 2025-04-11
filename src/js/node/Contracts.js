const ESI = require('eve_swagger_interface');
const Contract = require('./Contract');

class Contracts {
  constructor(ownerId, { auth = null, scope = 'character' } = {}) {
    this.ownerId = ownerId;
    this.auth = auth;
    this.scope = scope; // 'character' | 'corporation' | 'public'
    this.api = new ESI.ContractsApi();
    this.contracts = [];
  }

  async ensureAuth() {
    if (this.scope !== 'public' && !this.auth)
      throw new Error('Authenticated contract list requires auth');
    if (this.auth) await this.auth.ensureValidToken();
  }

  async load({ regionId = null, page = 1 } = {}) {
    const opts = { datasource: 'tranquility', page };

    let raw;
    if (this.scope === 'character') {
      await this.ensureAuth();
      raw = await this.api.getCharactersCharacterIdContracts(this.ownerId, opts);
    } else if (this.scope === 'corporation') {
      await this.ensureAuth();
      raw = await this.api.getCorporationsCorporationIdContracts(this.ownerId, opts);
    } else if (this.scope === 'public') {
      if (!regionId) throw new Error('Region ID required for public contracts');
      raw = await this.api.getContractsPublicRegionId(regionId, opts);
    } else {
      throw new Error('Invalid contract scope');
    }

    this.contracts = raw.map(entry =>
      new Contract(this.ownerId, entry.contract_id, {
        auth: this.auth,
        scope: this.scope
      })
    );

    return this.contracts;
  }

  toJSON() {
    return this.contracts.map(c => c.toJSON());
  }
}

module.exports = Contracts;

/*
const Contracts = require('./Contracts');

const charContracts = new Contracts(charId, { auth, scope: 'character' });
await charContracts.load();

const detailed = await charContracts.contracts[0].loadDetails();
console.log(detailed);

*/