import { Api } from '../../../../public/esi-client.js';

export default class ESIClient {
  static queue = [];
  static active = 0;
  static concurrency = 6;
  static delay = 200;

  constructor() {
    const api = new Api({
      baseURL: 'https://esi.evetech.net/latest',
      baseApiParams: { datasource: 'tranquility' }
    });

    ESIClient.wrapAll(api);
    return api;
  }

  static throttle(fn) {
    return new Promise(resolve => {
      this.queue.push({ fn, resolve });
      this.processQueue();
    });
  }

  static processQueue() {
    if (this.active >= this.concurrency || this.queue.length === 0) return;

    const { fn, resolve } = this.queue.shift();
    this.active++;

    Promise.resolve(fn())
      .then(resolve)
      .finally(() => {
        this.active--;
        setTimeout(() => this.processQueue(), this.delay);
      });
  }

  static wrapAll(target) {
    for (const key of Object.keys(target)) {
      const value = target[key];

      if (typeof value === 'function' && /^(get|post|put|delete)/i.test(key)) {
        const original = value;
        target[key] = (...args) => this.throttle(async () => {
          if (args.length === 1 && isNaN(parseInt(args[0]))) {
            console.warn(`\u26A0\uFE0F ESIClient: ${key} called with ${typeof args[0]} instead of ID`, args[0]);
          }

          const result = await original.call(target, ...args);

          if (result?.data && Array.isArray(result.data)) {
            result.data = result.data
              .filter(item => item.published !== false)
              .map(({ published, ...rest }) => rest);
          }

          return result;
        });
      } else if (value && typeof value === 'object') {
        this.wrapAll(value);
      }
    }
  }
}
