/**
 * @class IndustryJob
 * @classdesc Represents an individual industry job (manufacturing, copying, invention, etc.) in EVE Online.
 */
export default class IndustryJob {
  /**
   * Create a new IndustryJob instance from ESI job data.
   * @param {Object} data - ESI job data.
   * @param {number} data.job_id
   * @param {number} data.installer_id
   * @param {number} data.facility_id
   * @param {number} data.station_id
   * @param {number} data.activity_id
   * @param {number} data.blueprint_id
   * @param {number} data.blueprint_type_id
   * @param {number} data.blueprint_location_id
   * @param {number} data.output_location_id
   * @param {number} data.runs
   * @param {number} data.cost
   * @param {number} data.licensed_runs
   * @param {number} data.duration
   * @param {string} data.start_date
   * @param {string} data.end_date
   * @param {string} [data.completed_date]
   * @param {string} data.status
   * @param {number} [data.completed_character_id]
   * @param {number} data.successful_runs
   * @param {number} data.system_id
   */
  constructor({
    job_id,
    installer_id,
    facility_id,
    station_id,
    activity_id,
    blueprint_id,
    blueprint_type_id,
    blueprint_location_id,
    output_location_id,
    runs,
    cost,
    licensed_runs,
    duration,
    start_date,
    end_date,
    completed_date,
    status,
    completed_character_id,
    successful_runs,
    system_id
  }) {
    /** @type {number} Unique job ID */
    this.id = job_id;

    /** @type {number} Character ID of the installer */
    this.installerId = installer_id;

    /** @type {number} Facility ID where job is installed */
    this.facilityId = facility_id;

    /** @type {number} Station ID */
    this.stationId = station_id;

    /** @type {number} Activity ID (e.g. manufacturing, copying) */
    this.activityId = activity_id;

    /** @type {number} Blueprint item ID */
    this.blueprintId = blueprint_id;

    /** @type {number} Blueprint type ID */
    this.blueprintTypeId = blueprint_type_id;

    /** @type {number} Location ID of blueprint */
    this.blueprintLocationId = blueprint_location_id;

    /** @type {number} Output location ID */
    this.outputLocationId = output_location_id;

    /** @type {number} Number of runs requested */
    this.runs = runs;

    /** @type {number} ISK cost of the job */
    this.cost = cost;

    /** @type {number} Number of licensed runs (for copies) */
    this.licensedRuns = licensed_runs;

    /** @type {number} Duration in seconds */
    this.duration = duration;

    /** @type {string} Start datetime (ISO string) */
    this.startDate = start_date;

    /** @type {string} End datetime (ISO string) */
    this.endDate = end_date;

    /** @type {string|null} Completion datetime (ISO string), if completed */
    this.completedDate = completed_date;

    /** @type {string} Job status (e.g., active, delivered, cancelled) */
    this.status = status;

    /** @type {number|null} Character ID of the person who completed it */
    this.completedBy = completed_character_id;

    /** @type {number} Number of successful runs completed */
    this.successfulRuns = successful_runs;

    /** @type {number} System ID where job was performed */
    this.systemId = system_id;
  }

  /**
   * Serialize the job to a plain object for JSON usage.
   * @returns {Object}
   */
  toJSON() {
    return { ...this };
  }
}
