class UserInterface {
    constructor() {
      this.subscribers = new Map(); // event → [callback, ...]
    }
  
    subscribe(event, callback) {
      if (!this.subscribers.has(event)) this.subscribers.set(event, []);
      this.subscribers.get(event).push(callback);
    }
  
    dispatch(event, payload) {
      const listeners = this.subscribers.get(event) || [];
      listeners.forEach(fn => fn(payload));
    }
  
    updateComponent(componentId, data) {
      this.dispatch(`update:${componentId}`, data);
    }
  
    sendToFrontend(type, data) {
      // Assume frontend listens for structured messages
      this.dispatch(`frontend:${type}`, data);
    }
  
    log(message, data = null) {
      this.dispatch('log', { message, data });
    }
  
    toJSON() {
      return {
        events: [...this.subscribers.keys()]
      };
    }
  }
  
  module.exports = UserInterface;
/*
const UI = require('./UserInterface');
const ui = new UI();

ui.subscribe('update:characterPanel', (char) => {
  console.log('Update character panel with:', char.name);
});

ui.updateComponent('characterPanel', { name: 'Tibus Heth' });
*/