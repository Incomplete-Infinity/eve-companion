import Universe from "./Universe.js";
const { universe } = Universe.esiClient;

export default class Belt {
  constructor(id) {
    this.id = typeof id === "object" && id?.id ? id.id : id;
  }
  async load(recursions) {
    if (recursions <= 0) return;
    const { data } = await globalThrottle(() =>
      universe.getUniverseAsteroidBeltsAsteroidBeltId(this.id)
    );
    this.name = data.name;
    const { x, y, z } = data.position;
    this.position = { x, y, z };
  }
}
