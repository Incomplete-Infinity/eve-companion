export default class WebWorker {
    constructor(workerScriptPath) {
      this.worker = new Worker(new URL(workerScriptPath, import.meta.url), { type: 'module' });
    }
  
    post(message) {
      this.worker.postMessage(message);
    }
  
    on(callback) {
      this.worker.onmessage = (e) => callback(e.data);
    }
  
    terminate() {
      this.worker.terminate();
    }
  }
  