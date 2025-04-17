// renderer.js
const { ipcRenderer } = require('electron');
const Dexie = require('dexie');

// Initialize IndexedDB
const db = new Dexie("esiData");
db.version(1).stores({
  types: 'id,name',
  categories: 'id,name',
  regions: 'id,name',
  constellations: 'id,name',
  systems: 'id,name',
  // You can define more stores for other data
});

// Listen for incoming data from the main process
ipcRenderer.on('esiData', (event, data) => {
  switch (data.type) {
    case 'types':
      // Store types data
      data.data.forEach(item => {
        db.types.put(item);
      });
      break;
    case 'categories':
      // Store categories data
      data.data.forEach(item => {
        db.categories.put(item);
      });
      break;
    // Handle other data types similarly
    default:
      console.log('Unknown data type:', data.type);
  }
});
