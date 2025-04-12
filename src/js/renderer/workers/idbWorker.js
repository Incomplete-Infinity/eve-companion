self.onmessage = async ({ data }) => {
    const { action, store, key, value } = data;
  
    const db = await new Promise((resolve, reject) => {
      const req = indexedDB.open('eve-companion', 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  
    const tx = db.transaction(store, action === 'get' ? 'readonly' : 'readwrite');
    const objectStore = tx.objectStore(store);
  
    if (action === 'get') {
      const result = await objectStore.get(key);
      postMessage({ key, result });
    } else if (action === 'set') {
      await objectStore.put(value, key);
      postMessage({ key, success: true });
    }
  };
  