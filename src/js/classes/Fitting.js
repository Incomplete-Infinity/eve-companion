class Fitting {
    constructor({
      fitting_id = null,
      name,
      description,
      ship_type_id,
      items = []
    }) {
      this.id = fitting_id;
      this.name = name;
      this.description = description;
      this.shipTypeId = ship_type_id;
      this.items = items; // {type_id, flag, quantity}
    }
    static fromEFT(eftString) {
        const lines = eftString
          .split(/\r?\n/)
          .map(line => line.trim())
          .filter(Boolean);
      
        if (!lines.length || !lines[0].startsWith('[')) {
          throw new Error('Invalid EFT format');
        }
      
        const [shipSection, name] = lines[0]
          .slice(1, -1)
          .split(',')
          .map(s => s.trim());
      
        const shipTypeId = parseInt(shipSection); // fallback, override this if needed
        const items = [];
      
        const flagMap = [
          11, // High
          12, // Mid
          13, // Low
          14, // Rig
          92  // Subsystem
        ];
      
        let currentFlag = 11;
        let group = 0;
      
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
      
          if (line === '') continue;
      
          if (line.startsWith('[')) {
            group++;
            currentFlag = flagMap[group] || 11;
            continue;
          }
      
          const item = {
            type_id: 0, // You’ll map this from the item name later
            flag: currentFlag,
            quantity: 1,
            name: line
          };
      
          items.push(item);
        }
      
        const fitting = new Fitting({
          name: name || 'Imported Fit',
          description: 'Parsed from EFT',
          ship_type_id: shipTypeId,
          items
        });
      
        return fitting;
      }
      static fromDNA(dnaString) {
        const [shipPart, ...items] = dnaString.split(':');
        const [shipTypeId] = shipPart.split(';').map(Number);
        const fittingItems = [];
      
        items.forEach(entry => {
          const [typeIdStr, qtyStr, flagStr] = entry.split(';');
          if (!typeIdStr || !qtyStr || !flagStr) return;
      
          fittingItems.push({
            type_id: Number(typeIdStr),
            quantity: Number(qtyStr),
            flag: Number(flagStr),
          });
        });
      
        return new Fitting({
          name: 'DNA Imported',
          description: 'Parsed from DNA string',
          ship_type_id: shipTypeId,
          items: fittingItems
        });
      }
      const xml2js = require('xml2js');

static async fromXML(xmlString) {
  const parsed = await xml2js.parseStringPromise(xmlString, { explicitArray: false });

  const fit = parsed.fitting;
  const name = fit.$.name || 'XML Fit';
  const shipTypeId = parseInt(fit.ship.$.typeID);
  const items = [];

  const slotList = Array.isArray(fit.hardware) ? fit.hardware : [fit.hardware];

  slotList.forEach(h => {
    items.push({
      type_id: parseInt(h.$.typeID),
      quantity: parseInt(h.$.quantity) || 1,
      flag: parseInt(h.$.flag),
    });
  });

  return new Fitting({
    name,
    description: 'Parsed from XML',
    ship_type_id: shipTypeId,
    items
  });
}
static async detectAndParse(input) {
    input = input.trim();
  
    if (input.startsWith('[')) {
      return Fitting.fromEFT(input);
    } else if (/^\d+:/.test(input)) {
      return Fitting.fromDNA(input);
    } else if (input.startsWith('<fitting')) {
      return await Fitting.fromXML(input);
    }
  
    throw new Error('Unknown fitting format');
  }
  const InventoryType = require('./InventoryType');
  const Dogma = require('./Dogma');
  
  async resolveItems() {
    const dogma = new Dogma();
  
    for (const item of this.items) {
      const inv = await InventoryType.fromTypeId(item.type_id);
      const enriched = await dogma.getItem(item.type_id);
      inv.setDogma(enriched);
      item.resolved = inv;
    }
  }
    
    toJSON() {
      return {
        fitting_id: this.id,
        name: this.name,
        description: this.description,
        ship_type_id: this.shipTypeId,
        items: this.items
      };
    }
  }
  
  module.exports = Fitting;
  
  /*
  const Fitting = require('./Fitting');

const eft = `[Tristan, Scram kite]
5MN Microwarpdrive I
Warp Disruptor I
Stasis Webifier I

Light Neutron Blaster I
Light Neutron Blaster I
[Empty High slot]

Small Ancillary Current Router I
Small Anti-EM Screen Reinforcer I
Small Anti-Thermal Screen Reinforcer I`;

const fit = Fitting.fromEFT(eft);
console.log(fit.toJSON());
*/