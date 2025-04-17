// main.js
const axios = require('axios');
const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL('file://' + path.join(__dirname + '/../html/', 'index.html'));

  // Example: Fetch data from ESI
  const fetchDataFromESI = async () => {
    try {
      // Fetching types
      const types = await axios.get('https://esi.evetech.net/latest/universe/types/');
      win.webContents.send('esiData', { type: 'types', data: types.data });
      
      // Fetching categories
      const categories = await axios.get('https://esi.evetech.net/latest/universe/categories/');
      win.webContents.send('esiData', { type: 'categories', data: categories.data });
      
      // Similarly, fetch data for other endpoints (regions, constellations, etc.)
    } catch (error) {
      console.error('Error fetching data from ESI:', error);
    }
  };

  fetchDataFromESI();
});
