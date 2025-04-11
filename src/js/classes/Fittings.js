const ESI = require('eve_swagger_interface');
const Fitting = require('./Fitting');

class Fittings {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.FittingsApi();
    this.fittings = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Auth required for Fittings API');
    await this.auth.ensureValidToken();
  }

  async load() {
    await this.ensureAuth();
    const data = await this.api.getCharactersCharacterIdFittings(this.characterId, {
      datasource: 'tranquility'
    });

    this.fittings = data.map(f => new Fitting(f));
    return this.fittings;
  }

  async add(fitting) {
    await this.ensureAuth();
    const payload = {
      name: fitting.name,
      description: fitting.description,
      ship_type_id: fitting.shipTypeId,
      items: fitting.items
    };

    const result = await this.api.postCharactersCharacterIdFittings(this.characterId, {
      fitting: payload,
      datasource: 'tranquility'
    });

    fitting.id = result.fitting_id;
    this.fittings.push(fitting);
    return fitting;
  }

  async delete(fittingId) {
    await this.ensureAuth();
    await this.api.deleteCharactersCharacterIdFittingsFittingId(this.characterId, fittingId, {
      datasource: 'tranquility'
    });

    this.fittings = this.fittings.filter(f => f.id !== fittingId);
    return true;
  }

  toJSON() {
    return this.fittings.map(f => f.toJSON());
  }
}

module.exports = Fittings;

/*
const Fittings = require('./Fittings');
const Fitting = require('./Fitting');

const fittings = new Fittings(charId, auth);
await fittings.load();

const newFit = new Fitting({
  name: 'Rifter T1',
  description: 'Basic fit',
  ship_type_id: 587,
  items: [{ type_id: 123, quantity: 1, flag: 11 }]
});

await fittings.add(newFit);
await fittings.delete(newFit.id);

*/