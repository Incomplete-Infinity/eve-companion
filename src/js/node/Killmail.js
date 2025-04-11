class Killmail {
    constructor({
      killmail_id,
      killmail_hash,
      killmail_time,
      solar_system_id,
      attacker_count = 0,
      victim = {},
      attackers = [],
      zkb = null // zKillboard enrichment if applicable
    }) {
      this.id = killmail_id;
      this.hash = killmail_hash;
      this.time = killmail_time;
      this.systemId = solar_system_id;
      this.attackerCount = attacker_count || attackers.length;
      this.victim = victim;
      this.attackers = attackers;
      this.zkb = zkb;
    }
  
    toJSON() {
      return {
        id: this.id,
        hash: this.hash,
        time: this.time,
        systemId: this.systemId,
        attackerCount: this.attackerCount,
        victim: this.victim,
        attackers: this.attackers,
        zkb: this.zkb
      };
    }
  }
  
  module.exports = Killmail;
  