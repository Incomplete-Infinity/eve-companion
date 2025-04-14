/**
 * @class Killmail
 * @description Represents a detailed killmail, including attackers, victim, and optional zKillboard enrichment.
 */
export default class Killmail {
  /**
   * @constructor
   * @param {Object} data
   * @param {number} data.killmail_id - Unique ID of the killmail.
   * @param {string} data.killmail_hash - Verification hash used to fetch detailed killmail data.
   * @param {string} data.killmail_time - ISO timestamp of when the kill occurred.
   * @param {number} data.solar_system_id - ID of the solar system where the kill occurred.
   * @param {number} [data.attacker_count=0] - Number of attackers, fallback to `attackers.length` if 0.
   * @param {Object} [data.victim={}] - Victim details object from ESI.
   * @param {Array<Object>} [data.attackers=[]] - List of attackers.
   * @param {Object|null} [data.zkb=null] - Optional zKillboard enrichment data.
   */
  constructor({
    killmail_id,
    killmail_hash,
    killmail_time,
    solar_system_id,
    attacker_count = 0,
    victim = {},
    attackers = [],
    zkb = null
  }) {
    /** @type {number} */
    this.id = killmail_id;

    /** @type {string} */
    this.hash = killmail_hash;

    /** @type {string} ISO timestamp */
    this.time = killmail_time;

    /** @type {number} */
    this.systemId = solar_system_id;

    /** @type {number} */
    this.attackerCount = attacker_count || attackers.length;

    /** @type {Object} */
    this.victim = victim;

    /** @type {Array<Object>} */
    this.attackers = attackers;

    /** @type {Object|null} */
    this.zkb = zkb;
  }

  /**
   * Converts the killmail into a plain JSON object.
   * @returns {Object}
   */
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
