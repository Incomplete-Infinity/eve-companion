const ESI = require('eve_swagger_interface');

class Status {
  constructor() {
    this.api = new ESI.StatusApi();
    this.status = null;
  }

  async load() {
    const data = await this.api.getStatus({ datasource: 'tranquility' });
    this.status = data;
    return data;
  }

  isOnline() {
    return this.status?.players > 0;
  }

  toJSON() {
    return this.status;
  }
}

module.exports = Status;
/*
const Status = require('./Status');
const status = new Status();

await status.load();
console.log(status.isOnline() ? 'Online' : 'Offline');
console.log(status.toJSON());

*/