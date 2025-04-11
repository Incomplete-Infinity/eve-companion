const ESI = require('eve_swagger_interface');

class Search {
  constructor(auth = null) {
    this.auth = auth;
    this.api = new ESI.SearchApi();
  }

  async ensureAuth() {
    if (this.auth) await this.auth.ensureValidToken();
  }

  async search(query, categories = ['inventory_type'], strict = false) {
    const opts = {
      search: query,
      categories,
      strict,
      datasource: 'tranquility'
    };

    if (this.auth) opts.token = this.auth.accessToken;

    await this.ensureAuth();

    const result = await this.api.getSearch(opts);
    return result;
  }

  async searchPublic(query, categories = ['inventory_type']) {
    return await this.search(query, categories, false);
  }

  toJSON() {
    return {
      supportsAuth: !!this.auth
    };
  }
}

module.exports = Search;
/*
const Search = require('./Search');
const search = new Search();

const results = await search.searchPublic('Rifter', ['inventory_type']);
console.log(results); // { inventory_type: [587] }

*/