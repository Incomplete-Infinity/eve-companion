const ESI = require('eve_swagger_interface');

class Routes {
  constructor() {
    this.api = new ESI.RoutesApi();
  }

  async getShortest(fromSystemId, toSystemId) {
    return await this.api.getRouteOriginDestination(fromSystemId, toSystemId, {
      datasource: 'tranquility',
      flag: 'shortest'
    });
  }

  async getSecure(fromSystemId, toSystemId) {
    return await this.api.getRouteOriginDestination(fromSystemId, toSystemId, {
      datasource: 'tranquility',
      flag: 'secure'
    });
  }

  async getUnsafe(fromSystemId, toSystemId) {
    return await this.api.getRouteOriginDestination(fromSystemId, toSystemId, {
      datasource: 'tranquility',
      flag: 'insecure'
    });
  }
}

module.exports = Routes;
/*
const Routes = require('./Routes');
const routes = new Routes();

const jumps = await routes.getShortest(30000142, 30002510);
console.log(jumps); // array of system_ids
*/