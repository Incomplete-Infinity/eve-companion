import Universe from "./Universe.js";
const { universe } = Universe.esiClient;

export default class Stargate {
  constructor(id) {
    this.id = id;
    this.typeId = null;
    this.name = "";
    this.position = { x: 0, y: 0, z: 0 };
    this.destination = null;
    this.loaded = false;
  }
  async load(recursions) {
    if (this.loaded || recursions <= 0) return;

    const { data } = await globalThrottle(() =>
      universeApi.getUniverseStargatesStargateId(this.id)
    );
    this.typeId = new InventoryType(data.type_id);
    this.name = data.name;
    const { x, y, z } = data.position;
    this.position = { x, y, z };
    this.destination = data.destination;

    this.loaded = true;
  }
}
