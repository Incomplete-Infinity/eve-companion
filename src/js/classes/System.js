import Universe from "./ESIClient.js";
import Station from "./Station.js";
import Star from "./Star.js";
import Stargate from "./Stargate.js";
import Planet from "./Planet.js";

import Universe from "./Universe.js";



const universeApi = new ESIClient().universe;
export default class System {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.position = { x: 0, y: 0, z: 0 };
    this.stations = [];
    this.stargates = [];
    this.planets = [];
    this.star = null;
    this.securityStatus = null;
    this.securityClass = null;
    this.loaded = false;
  }
  async load(recursions = 1) {
    if (this.loaded) return;
    const { data } = await universeApi.getUniverseSystemsSystemId(this.id);
    this.name = data.name;
    const { x, y, z } = data.position;
    this.position = { x, y, z };
    this.securityClass = data.security_class;
    this.securityStatus = data.security_status;
    this.stargates = (data.stargates || []).map((gid) => new Stargate(gid));
    this.stations = (data.stations || []).map((sid) => new Station(sid));
    this.planets = (data.planets || []).map((p) => new Planet(p));
    this.star = data.star_id && new Star(data.star_id);
    await this.star.load(recursions - 1);
    
    if (recursions <= 0) return;
    await Promise.all([
      ...this.stations.map((s) => s.load(recursions - 1)),
      ...this.planets.map((p) => p.load(recursions - 1)),
      ...(this.star ? [this.star.load(recursions - 1)] : []),
    ]);
    this.loaded = true;
  }
}
