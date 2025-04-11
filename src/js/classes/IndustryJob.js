class IndustryJob {
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
      this.id = job_id;
      this.installerId = installer_id;
      this.facilityId = facility_id;
      this.stationId = station_id;
      this.activityId = activity_id;
      this.blueprintId = blueprint_id;
      this.blueprintTypeId = blueprint_type_id;
      this.blueprintLocationId = blueprint_location_id;
      this.outputLocationId = output_location_id;
      this.runs = runs;
      this.cost = cost;
      this.licensedRuns = licensed_runs;
      this.duration = duration;
      this.startDate = start_date;
      this.endDate = end_date;
      this.completedDate = completed_date;
      this.status = status;
      this.completedBy = completed_character_id;
      this.successfulRuns = successful_runs;
      this.systemId = system_id;
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  module.exports = IndustryJob;
  