class Facility {
  constructor({
    facility_id,
    owner_id,
    region_id,
    solar_system_id,
    tax,
    type_id
  }) {
    this.id = facility_id;
    this.ownerId = owner_id;
    this.regionId = region_id;
    this.systemId = solar_system_id;
    this.tax = tax;
    this.typeId = type_id;
  }

  toJSON() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      regionId: this.regionId,
      systemId: this.systemId,
      tax: this.tax,
      typeId: this.typeId
    };
  }
}

module.exports = Facility;
