/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BadRequest,
  ErrorLimited,
  Forbidden,
  GatewayTimeout,
  InternalServerError,
  ServiceUnavailable,
  Unauthorized,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Corporations<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get a list of npc corporations --- Alternate route: `/dev/corporations/npccorps/` Alternate route: `/v2/corporations/npccorps/` --- This route expires daily at 11:05
   *
   * @tags Corporation
   * @name GetCorporationsNpccorps
   * @summary Get npc corporations
   * @request GET:/corporations/npccorps/
   */
  getCorporationsNpccorps = (
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      number[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/npccorps/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Public information about a corporation --- Alternate route: `/dev/corporations/{corporation_id}/` Alternate route: `/v5/corporations/{corporation_id}/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationId
   * @summary Get corporation information
   * @request GET:/corporations/{corporation_id}/
   */
  getCorporationsCorporationId = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_alliance_id
         * ID of the alliance that corporation is a member of, if any
         * @format int32
         */
        alliance_id?: number;
        /**
         * get_corporations_corporation_id_ceo_id
         * ceo_id integer
         * @format int32
         */
        ceo_id: number;
        /**
         * get_corporations_corporation_id_creator_id
         * creator_id integer
         * @format int32
         */
        creator_id: number;
        /**
         * get_corporations_corporation_id_date_founded
         * date_founded string
         * @format date-time
         */
        date_founded?: string;
        /**
         * get_corporations_corporation_id_description
         * description string
         */
        description?: string;
        /**
         * get_corporations_corporation_id_faction_id
         * faction_id integer
         * @format int32
         */
        faction_id?: number;
        /**
         * get_corporations_corporation_id_home_station_id
         * home_station_id integer
         * @format int32
         */
        home_station_id?: number;
        /**
         * get_corporations_corporation_id_member_count
         * member_count integer
         * @format int32
         */
        member_count: number;
        /**
         * get_corporations_corporation_id_name
         * the full name of the corporation
         */
        name: string;
        /**
         * get_corporations_corporation_id_shares
         * shares integer
         * @format int64
         */
        shares?: number;
        /**
         * get_corporations_corporation_id_tax_rate
         * tax_rate number
         * @format float
         * @min 0
         * @max 1
         */
        tax_rate: number;
        /**
         * get_corporations_corporation_id_ticker
         * the short name of the corporation
         */
        ticker: string;
        /**
         * get_corporations_corporation_id_url
         * url string
         */
        url?: string;
        /**
         * get_corporations_corporation_id_war_eligible
         * war_eligible boolean
         */
        war_eligible?: boolean;
      },
      | void
      | BadRequest
      | {
          /**
           * get_corporations_corporation_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of all the alliances a corporation has been a member of --- Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/` Alternate route: `/v3/corporations/{corporation_id}/alliancehistory/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdAlliancehistory
   * @summary Get alliance history
   * @request GET:/corporations/{corporation_id}/alliancehistory/
   */
  getCorporationsCorporationIdAlliancehistory = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_alliancehistory_alliance_id
         * alliance_id integer
         * @format int32
         */
        alliance_id?: number;
        /**
         * get_corporations_corporation_id_alliancehistory_is_deleted
         * True if the alliance has been closed
         */
        is_deleted?: boolean;
        /**
         * get_corporations_corporation_id_alliancehistory_record_id
         * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
         * @format int32
         */
        record_id: number;
        /**
         * get_corporations_corporation_id_alliancehistory_start_date
         * start_date string
         * @format date-time
         */
        start_date: string;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/alliancehistory/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of the corporation assets --- Alternate route: `/dev/corporations/{corporation_id}/assets/` Alternate route: `/legacy/corporations/{corporation_id}/assets/` Alternate route: `/v4/corporations/{corporation_id}/assets/` Alternate route: `/v5/corporations/{corporation_id}/assets/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Assets
   * @name GetCorporationsCorporationIdAssets
   * @summary Get corporation assets
   * @request GET:/corporations/{corporation_id}/assets/
   * @secure
   */
  getCorporationsCorporationIdAssets = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_assets_is_blueprint_copy
         * is_blueprint_copy boolean
         */
        is_blueprint_copy?: boolean;
        /**
         * get_corporations_corporation_id_assets_is_singleton
         * is_singleton boolean
         */
        is_singleton: boolean;
        /**
         * get_corporations_corporation_id_assets_item_id
         * item_id integer
         * @format int64
         */
        item_id: number;
        /**
         * get_corporations_corporation_id_assets_location_flag
         * location_flag string
         */
        location_flag:
          | "AssetSafety"
          | "AutoFit"
          | "Bonus"
          | "Booster"
          | "BoosterBay"
          | "Capsule"
          | "Cargo"
          | "CorpDeliveries"
          | "CorpSAG1"
          | "CorpSAG2"
          | "CorpSAG3"
          | "CorpSAG4"
          | "CorpSAG5"
          | "CorpSAG6"
          | "CorpSAG7"
          | "CorporationGoalDeliveries"
          | "CrateLoot"
          | "Deliveries"
          | "DroneBay"
          | "DustBattle"
          | "DustDatabank"
          | "FighterBay"
          | "FighterTube0"
          | "FighterTube1"
          | "FighterTube2"
          | "FighterTube3"
          | "FighterTube4"
          | "FleetHangar"
          | "FrigateEscapeBay"
          | "Hangar"
          | "HangarAll"
          | "HiSlot0"
          | "HiSlot1"
          | "HiSlot2"
          | "HiSlot3"
          | "HiSlot4"
          | "HiSlot5"
          | "HiSlot6"
          | "HiSlot7"
          | "HiddenModifiers"
          | "Implant"
          | "Impounded"
          | "InfrastructureHangar"
          | "JunkyardReprocessed"
          | "JunkyardTrashed"
          | "LoSlot0"
          | "LoSlot1"
          | "LoSlot2"
          | "LoSlot3"
          | "LoSlot4"
          | "LoSlot5"
          | "LoSlot6"
          | "LoSlot7"
          | "Locked"
          | "MedSlot0"
          | "MedSlot1"
          | "MedSlot2"
          | "MedSlot3"
          | "MedSlot4"
          | "MedSlot5"
          | "MedSlot6"
          | "MedSlot7"
          | "MobileDepotHold"
          | "MoonMaterialBay"
          | "OfficeFolder"
          | "Pilot"
          | "PlanetSurface"
          | "QuafeBay"
          | "QuantumCoreRoom"
          | "Reward"
          | "RigSlot0"
          | "RigSlot1"
          | "RigSlot2"
          | "RigSlot3"
          | "RigSlot4"
          | "RigSlot5"
          | "RigSlot6"
          | "RigSlot7"
          | "SecondaryStorage"
          | "ServiceSlot0"
          | "ServiceSlot1"
          | "ServiceSlot2"
          | "ServiceSlot3"
          | "ServiceSlot4"
          | "ServiceSlot5"
          | "ServiceSlot6"
          | "ServiceSlot7"
          | "ShipHangar"
          | "ShipOffline"
          | "Skill"
          | "SkillInTraining"
          | "SpecializedAmmoHold"
          | "SpecializedAsteroidHold"
          | "SpecializedCommandCenterHold"
          | "SpecializedFuelBay"
          | "SpecializedGasHold"
          | "SpecializedIceHold"
          | "SpecializedIndustrialShipHold"
          | "SpecializedLargeShipHold"
          | "SpecializedMaterialBay"
          | "SpecializedMediumShipHold"
          | "SpecializedMineralHold"
          | "SpecializedOreHold"
          | "SpecializedPlanetaryCommoditiesHold"
          | "SpecializedSalvageHold"
          | "SpecializedShipHold"
          | "SpecializedSmallShipHold"
          | "StructureActive"
          | "StructureFuel"
          | "StructureInactive"
          | "StructureOffline"
          | "SubSystemBay"
          | "SubSystemSlot0"
          | "SubSystemSlot1"
          | "SubSystemSlot2"
          | "SubSystemSlot3"
          | "SubSystemSlot4"
          | "SubSystemSlot5"
          | "SubSystemSlot6"
          | "SubSystemSlot7"
          | "Unlocked"
          | "Wallet"
          | "Wardrobe";
        /**
         * get_corporations_corporation_id_assets_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_assets_location_type
         * location_type string
         */
        location_type: "station" | "solar_system" | "item" | "other";
        /**
         * get_corporations_corporation_id_assets_quantity
         * quantity integer
         * @format int32
         */
        quantity: number;
        /**
         * get_corporations_corporation_id_assets_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/assets/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0) --- Alternate route: `/dev/corporations/{corporation_id}/assets/locations/` Alternate route: `/v2/corporations/{corporation_id}/assets/locations/` --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Assets
   * @name PostCorporationsCorporationIdAssetsLocations
   * @summary Get corporation asset locations
   * @request POST:/corporations/{corporation_id}/assets/locations/
   * @secure
   */
  postCorporationsCorporationIdAssetsLocations = (
    corporationId: number,
    item_ids: number[],
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * post_corporations_corporation_id_assets_locations_item_id
         * item_id integer
         * @format int64
         */
        item_id: number;
        /**
         * post_corporations_corporation_id_assets_locations_position
         * position object
         */
        position: {
          /**
           * post_corporations_corporation_id_assets_locations_x
           * x number
           * @format double
           */
          x: number;
          /**
           * post_corporations_corporation_id_assets_locations_y
           * y number
           * @format double
           */
          y: number;
          /**
           * post_corporations_corporation_id_assets_locations_z
           * z number
           * @format double
           */
          z: number;
        };
      }[],
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * post_corporations_corporation_id_assets_locations_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/assets/locations/`,
      method: "POST",
      query: query,
      body: item_ids,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships --- Alternate route: `/dev/corporations/{corporation_id}/assets/names/` Alternate route: `/legacy/corporations/{corporation_id}/assets/names/` Alternate route: `/v1/corporations/{corporation_id}/assets/names/` --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Assets
   * @name PostCorporationsCorporationIdAssetsNames
   * @summary Get corporation asset names
   * @request POST:/corporations/{corporation_id}/assets/names/
   * @secure
   */
  postCorporationsCorporationIdAssetsNames = (
    corporationId: number,
    item_ids: number[],
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * post_corporations_corporation_id_assets_names_item_id
         * item_id integer
         * @format int64
         */
        item_id: number;
        /**
         * post_corporations_corporation_id_assets_names_name
         * name string
         */
        name: string;
      }[],
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * post_corporations_corporation_id_assets_names_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/assets/names/`,
      method: "POST",
      query: query,
      body: item_ids,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of blueprints the corporation owns --- Alternate route: `/dev/corporations/{corporation_id}/blueprints/` Alternate route: `/v3/corporations/{corporation_id}/blueprints/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdBlueprints
   * @summary Get corporation blueprints
   * @request GET:/corporations/{corporation_id}/blueprints/
   * @secure
   */
  getCorporationsCorporationIdBlueprints = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_blueprints_item_id
         * Unique ID for this item.
         * @format int64
         */
        item_id: number;
        /**
         * get_corporations_corporation_id_blueprints_location_flag
         * Type of the location_id
         */
        location_flag:
          | "AssetSafety"
          | "AutoFit"
          | "Bonus"
          | "Booster"
          | "BoosterBay"
          | "Capsule"
          | "Cargo"
          | "CorpDeliveries"
          | "CorpSAG1"
          | "CorpSAG2"
          | "CorpSAG3"
          | "CorpSAG4"
          | "CorpSAG5"
          | "CorpSAG6"
          | "CorpSAG7"
          | "CrateLoot"
          | "Deliveries"
          | "DroneBay"
          | "DustBattle"
          | "DustDatabank"
          | "FighterBay"
          | "FighterTube0"
          | "FighterTube1"
          | "FighterTube2"
          | "FighterTube3"
          | "FighterTube4"
          | "FleetHangar"
          | "FrigateEscapeBay"
          | "Hangar"
          | "HangarAll"
          | "HiSlot0"
          | "HiSlot1"
          | "HiSlot2"
          | "HiSlot3"
          | "HiSlot4"
          | "HiSlot5"
          | "HiSlot6"
          | "HiSlot7"
          | "HiddenModifiers"
          | "Implant"
          | "Impounded"
          | "JunkyardReprocessed"
          | "JunkyardTrashed"
          | "LoSlot0"
          | "LoSlot1"
          | "LoSlot2"
          | "LoSlot3"
          | "LoSlot4"
          | "LoSlot5"
          | "LoSlot6"
          | "LoSlot7"
          | "Locked"
          | "MedSlot0"
          | "MedSlot1"
          | "MedSlot2"
          | "MedSlot3"
          | "MedSlot4"
          | "MedSlot5"
          | "MedSlot6"
          | "MedSlot7"
          | "OfficeFolder"
          | "Pilot"
          | "PlanetSurface"
          | "QuafeBay"
          | "QuantumCoreRoom"
          | "Reward"
          | "RigSlot0"
          | "RigSlot1"
          | "RigSlot2"
          | "RigSlot3"
          | "RigSlot4"
          | "RigSlot5"
          | "RigSlot6"
          | "RigSlot7"
          | "SecondaryStorage"
          | "ServiceSlot0"
          | "ServiceSlot1"
          | "ServiceSlot2"
          | "ServiceSlot3"
          | "ServiceSlot4"
          | "ServiceSlot5"
          | "ServiceSlot6"
          | "ServiceSlot7"
          | "ShipHangar"
          | "ShipOffline"
          | "Skill"
          | "SkillInTraining"
          | "SpecializedAmmoHold"
          | "SpecializedCommandCenterHold"
          | "SpecializedFuelBay"
          | "SpecializedGasHold"
          | "SpecializedIndustrialShipHold"
          | "SpecializedLargeShipHold"
          | "SpecializedMaterialBay"
          | "SpecializedMediumShipHold"
          | "SpecializedMineralHold"
          | "SpecializedOreHold"
          | "SpecializedPlanetaryCommoditiesHold"
          | "SpecializedSalvageHold"
          | "SpecializedShipHold"
          | "SpecializedSmallShipHold"
          | "StructureActive"
          | "StructureFuel"
          | "StructureInactive"
          | "StructureOffline"
          | "SubSystemBay"
          | "SubSystemSlot0"
          | "SubSystemSlot1"
          | "SubSystemSlot2"
          | "SubSystemSlot3"
          | "SubSystemSlot4"
          | "SubSystemSlot5"
          | "SubSystemSlot6"
          | "SubSystemSlot7"
          | "Unlocked"
          | "Wallet"
          | "Wardrobe";
        /**
         * get_corporations_corporation_id_blueprints_location_id
         * References a station, a ship or an item_id if this blueprint is located within a container.
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_blueprints_material_efficiency
         * Material Efficiency Level of the blueprint.
         * @format int32
         * @min 0
         * @max 25
         */
        material_efficiency: number;
        /**
         * get_corporations_corporation_id_blueprints_quantity
         * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
         * @format int32
         * @min -2
         */
        quantity: number;
        /**
         * get_corporations_corporation_id_blueprints_runs
         * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
         * @format int32
         * @min -1
         */
        runs: number;
        /**
         * get_corporations_corporation_id_blueprints_time_efficiency
         * Time Efficiency Level of the blueprint.
         * @format int32
         * @min 0
         * @max 20
         */
        time_efficiency: number;
        /**
         * get_corporations_corporation_id_blueprints_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/blueprints/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return contacts of a corporation --- Alternate route: `/dev/corporations/{corporation_id}/contacts/` Alternate route: `/v2/corporations/{corporation_id}/contacts/` --- This route is cached for up to 300 seconds
   *
   * @tags Contacts
   * @name GetCorporationsCorporationIdContacts
   * @summary Get corporation contacts
   * @request GET:/corporations/{corporation_id}/contacts/
   * @secure
   */
  getCorporationsCorporationIdContacts = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_contacts_contact_id
         * contact_id integer
         * @format int32
         */
        contact_id: number;
        /**
         * get_corporations_corporation_id_contacts_contact_type
         * contact_type string
         */
        contact_type: "character" | "corporation" | "alliance" | "faction";
        /**
         * get_corporations_corporation_id_contacts_is_watched
         * Whether this contact is being watched
         */
        is_watched?: boolean;
        /**
         * get_corporations_corporation_id_contacts_label_ids
         * label_ids array
         * @maxItems 63
         */
        label_ids?: number[];
        /**
         * get_corporations_corporation_id_contacts_standing
         * Standing of the contact
         * @format float
         */
        standing: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/contacts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return custom labels for a corporation's contacts --- Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/` Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/` Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/` --- This route is cached for up to 300 seconds
   *
   * @tags Contacts
   * @name GetCorporationsCorporationIdContactsLabels
   * @summary Get corporation contact labels
   * @request GET:/corporations/{corporation_id}/contacts/labels/
   * @secure
   */
  getCorporationsCorporationIdContactsLabels = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_contacts_labels_label_id
         * label_id integer
         * @format int64
         */
        label_id: number;
        /**
         * get_corporations_corporation_id_contacts_labels_label_name
         * label_name string
         */
        label_name: string;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/contacts/labels/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation --- Alternate route: `/dev/corporations/{corporation_id}/containers/logs/` Alternate route: `/v3/corporations/{corporation_id}/containers/logs/` --- This route is cached for up to 600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdContainersLogs
   * @summary Get all corporation ALSC logs
   * @request GET:/corporations/{corporation_id}/containers/logs/
   * @secure
   */
  getCorporationsCorporationIdContainersLogs = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_containers_logs_action
         * action string
         */
        action:
          | "add"
          | "assemble"
          | "configure"
          | "enter_password"
          | "lock"
          | "move"
          | "repackage"
          | "set_name"
          | "set_password"
          | "unlock";
        /**
         * get_corporations_corporation_id_containers_logs_character_id
         * ID of the character who performed the action.
         * @format int32
         */
        character_id: number;
        /**
         * get_corporations_corporation_id_containers_logs_container_id
         * ID of the container
         * @format int64
         */
        container_id: number;
        /**
         * get_corporations_corporation_id_containers_logs_container_type_id
         * Type ID of the container
         * @format int32
         */
        container_type_id: number;
        /**
         * get_corporations_corporation_id_containers_logs_location_flag
         * location_flag string
         */
        location_flag:
          | "AssetSafety"
          | "AutoFit"
          | "Bonus"
          | "Booster"
          | "BoosterBay"
          | "Capsule"
          | "Cargo"
          | "CorpDeliveries"
          | "CorpSAG1"
          | "CorpSAG2"
          | "CorpSAG3"
          | "CorpSAG4"
          | "CorpSAG5"
          | "CorpSAG6"
          | "CorpSAG7"
          | "CrateLoot"
          | "Deliveries"
          | "DroneBay"
          | "DustBattle"
          | "DustDatabank"
          | "FighterBay"
          | "FighterTube0"
          | "FighterTube1"
          | "FighterTube2"
          | "FighterTube3"
          | "FighterTube4"
          | "FleetHangar"
          | "FrigateEscapeBay"
          | "Hangar"
          | "HangarAll"
          | "HiSlot0"
          | "HiSlot1"
          | "HiSlot2"
          | "HiSlot3"
          | "HiSlot4"
          | "HiSlot5"
          | "HiSlot6"
          | "HiSlot7"
          | "HiddenModifiers"
          | "Implant"
          | "Impounded"
          | "JunkyardReprocessed"
          | "JunkyardTrashed"
          | "LoSlot0"
          | "LoSlot1"
          | "LoSlot2"
          | "LoSlot3"
          | "LoSlot4"
          | "LoSlot5"
          | "LoSlot6"
          | "LoSlot7"
          | "Locked"
          | "MedSlot0"
          | "MedSlot1"
          | "MedSlot2"
          | "MedSlot3"
          | "MedSlot4"
          | "MedSlot5"
          | "MedSlot6"
          | "MedSlot7"
          | "OfficeFolder"
          | "Pilot"
          | "PlanetSurface"
          | "QuafeBay"
          | "QuantumCoreRoom"
          | "Reward"
          | "RigSlot0"
          | "RigSlot1"
          | "RigSlot2"
          | "RigSlot3"
          | "RigSlot4"
          | "RigSlot5"
          | "RigSlot6"
          | "RigSlot7"
          | "SecondaryStorage"
          | "ServiceSlot0"
          | "ServiceSlot1"
          | "ServiceSlot2"
          | "ServiceSlot3"
          | "ServiceSlot4"
          | "ServiceSlot5"
          | "ServiceSlot6"
          | "ServiceSlot7"
          | "ShipHangar"
          | "ShipOffline"
          | "Skill"
          | "SkillInTraining"
          | "SpecializedAmmoHold"
          | "SpecializedCommandCenterHold"
          | "SpecializedFuelBay"
          | "SpecializedGasHold"
          | "SpecializedIndustrialShipHold"
          | "SpecializedLargeShipHold"
          | "SpecializedMaterialBay"
          | "SpecializedMediumShipHold"
          | "SpecializedMineralHold"
          | "SpecializedOreHold"
          | "SpecializedPlanetaryCommoditiesHold"
          | "SpecializedSalvageHold"
          | "SpecializedShipHold"
          | "SpecializedSmallShipHold"
          | "StructureActive"
          | "StructureFuel"
          | "StructureInactive"
          | "StructureOffline"
          | "SubSystemBay"
          | "SubSystemSlot0"
          | "SubSystemSlot1"
          | "SubSystemSlot2"
          | "SubSystemSlot3"
          | "SubSystemSlot4"
          | "SubSystemSlot5"
          | "SubSystemSlot6"
          | "SubSystemSlot7"
          | "Unlocked"
          | "Wallet"
          | "Wardrobe";
        /**
         * get_corporations_corporation_id_containers_logs_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_containers_logs_logged_at
         * Timestamp when this log was created
         * @format date-time
         */
        logged_at: string;
        /**
         * get_corporations_corporation_id_containers_logs_new_config_bitmask
         * new_config_bitmask integer
         * @format int32
         */
        new_config_bitmask?: number;
        /**
         * get_corporations_corporation_id_containers_logs_old_config_bitmask
         * old_config_bitmask integer
         * @format int32
         */
        old_config_bitmask?: number;
        /**
         * get_corporations_corporation_id_containers_logs_password_type
         * Type of password set if action is of type SetPassword or EnterPassword
         */
        password_type?: "config" | "general";
        /**
         * get_corporations_corporation_id_containers_logs_quantity
         * Quantity of the item being acted upon
         * @format int32
         */
        quantity?: number;
        /**
         * get_corporations_corporation_id_containers_logs_type_id
         * Type ID of the item being acted upon
         * @format int32
         */
        type_id?: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/containers/logs/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress". --- Alternate route: `/dev/corporations/{corporation_id}/contracts/` Alternate route: `/legacy/corporations/{corporation_id}/contracts/` Alternate route: `/v1/corporations/{corporation_id}/contracts/` --- This route is cached for up to 300 seconds
   *
   * @tags Contracts
   * @name GetCorporationsCorporationIdContracts
   * @summary Get corporation contracts
   * @request GET:/corporations/{corporation_id}/contracts/
   * @secure
   */
  getCorporationsCorporationIdContracts = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_contracts_acceptor_id
         * Who will accept the contract
         * @format int32
         */
        acceptor_id: number;
        /**
         * get_corporations_corporation_id_contracts_assignee_id
         * ID to whom the contract is assigned, can be corporation or character ID
         * @format int32
         */
        assignee_id: number;
        /**
         * get_corporations_corporation_id_contracts_availability
         * To whom the contract is available
         */
        availability: "public" | "personal" | "corporation" | "alliance";
        /**
         * get_corporations_corporation_id_contracts_buyout
         * Buyout price (for Auctions only)
         * @format double
         */
        buyout?: number;
        /**
         * get_corporations_corporation_id_contracts_collateral
         * Collateral price (for Couriers only)
         * @format double
         */
        collateral?: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id
         * contract_id integer
         * @format int32
         */
        contract_id: number;
        /**
         * get_corporations_corporation_id_contracts_date_accepted
         * Date of confirmation of contract
         * @format date-time
         */
        date_accepted?: string;
        /**
         * get_corporations_corporation_id_contracts_date_completed
         * Date of completed of contract
         * @format date-time
         */
        date_completed?: string;
        /**
         * get_corporations_corporation_id_contracts_date_expired
         * Expiration date of the contract
         * @format date-time
         */
        date_expired: string;
        /**
         * get_corporations_corporation_id_contracts_date_issued
         * Сreation date of the contract
         * @format date-time
         */
        date_issued: string;
        /**
         * get_corporations_corporation_id_contracts_days_to_complete
         * Number of days to perform the contract
         * @format int32
         */
        days_to_complete?: number;
        /**
         * get_corporations_corporation_id_contracts_end_location_id
         * End location ID (for Couriers contract)
         * @format int64
         */
        end_location_id?: number;
        /**
         * get_corporations_corporation_id_contracts_for_corporation
         * true if the contract was issued on behalf of the issuer's corporation
         */
        for_corporation: boolean;
        /**
         * get_corporations_corporation_id_contracts_issuer_corporation_id
         * Character's corporation ID for the issuer
         * @format int32
         */
        issuer_corporation_id: number;
        /**
         * get_corporations_corporation_id_contracts_issuer_id
         * Character ID for the issuer
         * @format int32
         */
        issuer_id: number;
        /**
         * get_corporations_corporation_id_contracts_price
         * Price of contract (for ItemsExchange and Auctions)
         * @format double
         */
        price?: number;
        /**
         * get_corporations_corporation_id_contracts_reward
         * Remuneration for contract (for Couriers only)
         * @format double
         */
        reward?: number;
        /**
         * get_corporations_corporation_id_contracts_start_location_id
         * Start location ID (for Couriers contract)
         * @format int64
         */
        start_location_id?: number;
        /**
         * get_corporations_corporation_id_contracts_status
         * Status of the the contract
         */
        status:
          | "outstanding"
          | "in_progress"
          | "finished_issuer"
          | "finished_contractor"
          | "finished"
          | "cancelled"
          | "rejected"
          | "failed"
          | "deleted"
          | "reversed";
        /**
         * get_corporations_corporation_id_contracts_title
         * Title of the contract
         */
        title?: string;
        /**
         * get_corporations_corporation_id_contracts_type
         * Type of the contract
         */
        type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
        /**
         * get_corporations_corporation_id_contracts_volume
         * Volume of items in the contract
         * @format double
         */
        volume?: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/contracts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Lists bids on a particular auction contract --- Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/` Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/` Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/` --- This route is cached for up to 3600 seconds
   *
   * @tags Contracts
   * @name GetCorporationsCorporationIdContractsContractIdBids
   * @summary Get corporation contract bids
   * @request GET:/corporations/{corporation_id}/contracts/{contract_id}/bids/
   * @secure
   */
  getCorporationsCorporationIdContractsContractIdBids = (
    contractId: number,
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_contracts_contract_id_bids_amount
         * The amount bid, in ISK
         * @format float
         */
        amount: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id_bids_bid_id
         * Unique ID for the bid
         * @format int32
         */
        bid_id: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id_bids_bidder_id
         * Character ID of the bidder
         * @format int32
         */
        bidder_id: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id_bids_date_bid
         * Datetime when the bid was placed
         * @format date-time
         */
        date_bid: string;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_corporations_corporation_id_contracts_contract_id_bids_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/contracts/${contractId}/bids/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Lists items of a particular contract --- Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/` Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/` Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/` --- This route is cached for up to 3600 seconds
   *
   * @tags Contracts
   * @name GetCorporationsCorporationIdContractsContractIdItems
   * @summary Get corporation contract items
   * @request GET:/corporations/{corporation_id}/contracts/{contract_id}/items/
   * @secure
   */
  getCorporationsCorporationIdContractsContractIdItems = (
    contractId: number,
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_contracts_contract_id_items_is_included
         * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
         */
        is_included: boolean;
        /**
         * get_corporations_corporation_id_contracts_contract_id_items_is_singleton
         * is_singleton boolean
         */
        is_singleton: boolean;
        /**
         * get_corporations_corporation_id_contracts_contract_id_items_quantity
         * Number of items in the stack
         * @format int32
         */
        quantity: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id_items_raw_quantity
         * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
         * @format int32
         */
        raw_quantity?: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id_items_record_id
         * Unique ID for the item
         * @format int64
         */
        record_id: number;
        /**
         * get_corporations_corporation_id_contracts_contract_id_items_type_id
         * Type ID for item
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_corporations_corporation_id_contracts_contract_id_items_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
      | {
          /**
           * get_corporations_corporation_id_contracts_contract_id_items_520_error_520
           * Error 520 message
           */
          error?: string;
        }
    >({
      path: `/corporations/${corporationId}/contracts/${contractId}/items/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List customs offices owned by a corporation --- Alternate route: `/dev/corporations/{corporation_id}/customs_offices/` Alternate route: `/legacy/corporations/{corporation_id}/customs_offices/` Alternate route: `/v1/corporations/{corporation_id}/customs_offices/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Planetary Interaction
   * @name GetCorporationsCorporationIdCustomsOffices
   * @summary List corporation customs offices
   * @request GET:/corporations/{corporation_id}/customs_offices/
   * @secure
   */
  getCorporationsCorporationIdCustomsOffices = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_customs_offices_alliance_tax_rate
         * Only present if alliance access is allowed
         * @format float
         */
        alliance_tax_rate?: number;
        /**
         * get_corporations_corporation_id_customs_offices_allow_access_with_standings
         * standing_level and any standing related tax rate only present when this is true
         */
        allow_access_with_standings: boolean;
        /**
         * get_corporations_corporation_id_customs_offices_allow_alliance_access
         * allow_alliance_access boolean
         */
        allow_alliance_access: boolean;
        /**
         * get_corporations_corporation_id_customs_offices_bad_standing_tax_rate
         * bad_standing_tax_rate number
         * @format float
         */
        bad_standing_tax_rate?: number;
        /**
         * get_corporations_corporation_id_customs_offices_corporation_tax_rate
         * corporation_tax_rate number
         * @format float
         */
        corporation_tax_rate?: number;
        /**
         * get_corporations_corporation_id_customs_offices_excellent_standing_tax_rate
         * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
         * @format float
         */
        excellent_standing_tax_rate?: number;
        /**
         * get_corporations_corporation_id_customs_offices_good_standing_tax_rate
         * good_standing_tax_rate number
         * @format float
         */
        good_standing_tax_rate?: number;
        /**
         * get_corporations_corporation_id_customs_offices_neutral_standing_tax_rate
         * neutral_standing_tax_rate number
         * @format float
         */
        neutral_standing_tax_rate?: number;
        /**
         * get_corporations_corporation_id_customs_offices_office_id
         * unique ID of this customs office
         * @format int64
         */
        office_id: number;
        /**
         * get_corporations_corporation_id_customs_offices_reinforce_exit_end
         * reinforce_exit_end integer
         * @format int32
         * @min 0
         * @max 23
         */
        reinforce_exit_end: number;
        /**
         * get_corporations_corporation_id_customs_offices_reinforce_exit_start
         * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
         * @format int32
         * @min 0
         * @max 23
         */
        reinforce_exit_start: number;
        /**
         * get_corporations_corporation_id_customs_offices_standing_level
         * Access is allowed only for entities with this level of standing or better
         */
        standing_level?: "bad" | "excellent" | "good" | "neutral" | "terrible";
        /**
         * get_corporations_corporation_id_customs_offices_system_id
         * ID of the solar system this customs office is located in
         * @format int32
         */
        system_id: number;
        /**
         * get_corporations_corporation_id_customs_offices_terrible_standing_tax_rate
         * terrible_standing_tax_rate number
         * @format float
         */
        terrible_standing_tax_rate?: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/customs_offices/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return corporation hangar and wallet division names, only show if a division is not using the default name --- Alternate route: `/dev/corporations/{corporation_id}/divisions/` Alternate route: `/v2/corporations/{corporation_id}/divisions/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdDivisions
   * @summary Get corporation divisions
   * @request GET:/corporations/{corporation_id}/divisions/
   * @secure
   */
  getCorporationsCorporationIdDivisions = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_divisions_hangar
         * hangar array
         * @maxItems 7
         */
        hangar?: {
          /**
           * get_corporations_corporation_id_divisions_division
           * division integer
           * @format int32
           * @min 1
           * @max 7
           */
          division?: number;
          /**
           * get_corporations_corporation_id_divisions_name
           * name string
           * @maxLength 50
           */
          name?: string;
        }[];
        /**
         * get_corporations_corporation_id_divisions_wallet
         * wallet array
         * @maxItems 7
         */
        wallet?: {
          /**
           * get_corporations_corporation_id_divisions_wallet_division
           * division integer
           * @format int32
           * @min 1
           * @max 7
           */
          division?: number;
          /**
           * get_corporations_corporation_id_divisions_wallet_name
           * name string
           * @maxLength 50
           */
          name?: string;
        }[];
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/divisions/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a corporation's facilities --- Alternate route: `/dev/corporations/{corporation_id}/facilities/` Alternate route: `/v2/corporations/{corporation_id}/facilities/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Factory_Manager
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdFacilities
   * @summary Get corporation facilities
   * @request GET:/corporations/{corporation_id}/facilities/
   * @secure
   */
  getCorporationsCorporationIdFacilities = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_facilities_facility_id
         * facility_id integer
         * @format int64
         */
        facility_id: number;
        /**
         * get_corporations_corporation_id_facilities_system_id
         * system_id integer
         * @format int32
         */
        system_id: number;
        /**
         * get_corporations_corporation_id_facilities_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/facilities/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Statistics about a corporation involved in faction warfare --- Alternate route: `/dev/corporations/{corporation_id}/fw/stats/` Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/` Alternate route: `/v1/corporations/{corporation_id}/fw/stats/` Alternate route: `/v2/corporations/{corporation_id}/fw/stats/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetCorporationsCorporationIdFwStats
   * @summary Overview of a corporation involved in faction warfare
   * @request GET:/corporations/{corporation_id}/fw/stats/
   * @secure
   */
  getCorporationsCorporationIdFwStats = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_fw_stats_enlisted_on
         * The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
         * @format date-time
         */
        enlisted_on?: string;
        /**
         * get_corporations_corporation_id_fw_stats_faction_id
         * The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
         * @format int32
         */
        faction_id?: number;
        /**
         * get_corporations_corporation_id_fw_stats_kills
         * Summary of kills done by the given corporation against enemy factions
         */
        kills: {
          /**
           * get_corporations_corporation_id_fw_stats_last_week
           * Last week's total number of kills by members of the given corporation against enemy factions
           * @format int32
           */
          last_week: number;
          /**
           * get_corporations_corporation_id_fw_stats_total
           * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
           * @format int32
           */
          total: number;
          /**
           * get_corporations_corporation_id_fw_stats_yesterday
           * Yesterday's total number of kills by members of the given corporation against enemy factions
           * @format int32
           */
          yesterday: number;
        };
        /**
         * get_corporations_corporation_id_fw_stats_pilots
         * How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
         * @format int32
         */
        pilots?: number;
        /**
         * get_corporations_corporation_id_fw_stats_victory_points
         * Summary of victory points gained by the given corporation for the enlisted faction
         */
        victory_points: {
          /**
           * get_corporations_corporation_id_fw_stats_victory_points_last_week
           * Last week's victory points gained by members of the given corporation
           * @format int32
           */
          last_week: number;
          /**
           * get_corporations_corporation_id_fw_stats_victory_points_total
           * Total victory points gained since the given corporation enlisted
           * @format int32
           */
          total: number;
          /**
           * get_corporations_corporation_id_fw_stats_victory_points_yesterday
           * Yesterday's victory points gained by members of the given corporation
           * @format int32
           */
          yesterday: number;
        };
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/fw/stats/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get the icon urls for a corporation --- Alternate route: `/dev/corporations/{corporation_id}/icons/` Alternate route: `/legacy/corporations/{corporation_id}/icons/` Alternate route: `/v1/corporations/{corporation_id}/icons/` Alternate route: `/v2/corporations/{corporation_id}/icons/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdIcons
   * @summary Get corporation icon
   * @request GET:/corporations/{corporation_id}/icons/
   */
  getCorporationsCorporationIdIcons = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_icons_px128x128
         * px128x128 string
         */
        px128x128?: string;
        /**
         * get_corporations_corporation_id_icons_px256x256
         * px256x256 string
         */
        px256x256?: string;
        /**
         * get_corporations_corporation_id_icons_px64x64
         * px64x64 string
         */
        px64x64?: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_corporations_corporation_id_icons_error
           * error message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/icons/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List industry jobs run by a corporation --- Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/` Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/` Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/` --- This route is cached for up to 300 seconds --- Requires one of the following EVE corporation role(s): Factory_Manager
   *
   * @tags Industry
   * @name GetCorporationsCorporationIdIndustryJobs
   * @summary List corporation industry jobs
   * @request GET:/corporations/{corporation_id}/industry/jobs/
   * @secure
   */
  getCorporationsCorporationIdIndustryJobs = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
       * @default false
       */
      include_completed?: boolean;
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_industry_jobs_activity_id
         * Job activity ID
         * @format int32
         */
        activity_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_blueprint_id
         * blueprint_id integer
         * @format int64
         */
        blueprint_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_blueprint_location_id
         * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
         * @format int64
         */
        blueprint_location_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_blueprint_type_id
         * blueprint_type_id integer
         * @format int32
         */
        blueprint_type_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_completed_character_id
         * ID of the character which completed this job
         * @format int32
         */
        completed_character_id?: number;
        /**
         * get_corporations_corporation_id_industry_jobs_completed_date
         * Date and time when this job was completed
         * @format date-time
         */
        completed_date?: string;
        /**
         * get_corporations_corporation_id_industry_jobs_cost
         * The sume of job installation fee and industry facility tax
         * @format double
         */
        cost?: number;
        /**
         * get_corporations_corporation_id_industry_jobs_duration
         * Job duration in seconds
         * @format int32
         */
        duration: number;
        /**
         * get_corporations_corporation_id_industry_jobs_end_date
         * Date and time when this job finished
         * @format date-time
         */
        end_date: string;
        /**
         * get_corporations_corporation_id_industry_jobs_facility_id
         * ID of the facility where this job is running
         * @format int64
         */
        facility_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_installer_id
         * ID of the character which installed this job
         * @format int32
         */
        installer_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_job_id
         * Unique job ID
         * @format int32
         */
        job_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_licensed_runs
         * Number of runs blueprint is licensed for
         * @format int32
         */
        licensed_runs?: number;
        /**
         * get_corporations_corporation_id_industry_jobs_location_id
         * ID of the location for the industry facility
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_output_location_id
         * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
         * @format int64
         */
        output_location_id: number;
        /**
         * get_corporations_corporation_id_industry_jobs_pause_date
         * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
         * @format date-time
         */
        pause_date?: string;
        /**
         * get_corporations_corporation_id_industry_jobs_probability
         * Chance of success for invention
         * @format float
         */
        probability?: number;
        /**
         * get_corporations_corporation_id_industry_jobs_product_type_id
         * Type ID of product (manufactured, copied or invented)
         * @format int32
         */
        product_type_id?: number;
        /**
         * get_corporations_corporation_id_industry_jobs_runs
         * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
         * @format int32
         */
        runs: number;
        /**
         * get_corporations_corporation_id_industry_jobs_start_date
         * Date and time when this job started
         * @format date-time
         */
        start_date: string;
        /**
         * get_corporations_corporation_id_industry_jobs_status
         * status string
         */
        status:
          | "active"
          | "cancelled"
          | "delivered"
          | "paused"
          | "ready"
          | "reverted";
        /**
         * get_corporations_corporation_id_industry_jobs_successful_runs
         * Number of successful runs for this job. Equal to runs unless this is an invention job
         * @format int32
         */
        successful_runs?: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/industry/jobs/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of a corporation's kills and losses going back 90 days --- Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/` Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/` Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/` --- This route is cached for up to 300 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Killmails
   * @name GetCorporationsCorporationIdKillmailsRecent
   * @summary Get a corporation's recent kills and losses
   * @request GET:/corporations/{corporation_id}/killmails/recent/
   * @secure
   */
  getCorporationsCorporationIdKillmailsRecent = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_killmails_recent_killmail_hash
         * A hash of this killmail
         */
        killmail_hash: string;
        /**
         * get_corporations_corporation_id_killmails_recent_killmail_id
         * ID of this killmail
         * @format int32
         */
        killmail_id: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/killmails/recent/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a corporation's medals --- Alternate route: `/dev/corporations/{corporation_id}/medals/` Alternate route: `/v2/corporations/{corporation_id}/medals/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdMedals
   * @summary Get corporation medals
   * @request GET:/corporations/{corporation_id}/medals/
   * @secure
   */
  getCorporationsCorporationIdMedals = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_medals_created_at
         * created_at string
         * @format date-time
         */
        created_at: string;
        /**
         * get_corporations_corporation_id_medals_creator_id
         * ID of the character who created this medal
         * @format int32
         */
        creator_id: number;
        /**
         * get_corporations_corporation_id_medals_description
         * description string
         * @maxLength 1000
         */
        description: string;
        /**
         * get_corporations_corporation_id_medals_medal_id
         * medal_id integer
         * @format int32
         */
        medal_id: number;
        /**
         * get_corporations_corporation_id_medals_title
         * title string
         * @maxLength 100
         */
        title: string;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/medals/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns medals issued by a corporation --- Alternate route: `/dev/corporations/{corporation_id}/medals/issued/` Alternate route: `/v2/corporations/{corporation_id}/medals/issued/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdMedalsIssued
   * @summary Get corporation issued medals
   * @request GET:/corporations/{corporation_id}/medals/issued/
   * @secure
   */
  getCorporationsCorporationIdMedalsIssued = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_medals_issued_character_id
         * ID of the character who was rewarded this medal
         * @format int32
         */
        character_id: number;
        /**
         * get_corporations_corporation_id_medals_issued_issued_at
         * issued_at string
         * @format date-time
         */
        issued_at: string;
        /**
         * get_corporations_corporation_id_medals_issued_issuer_id
         * ID of the character who issued the medal
         * @format int32
         */
        issuer_id: number;
        /**
         * get_corporations_corporation_id_medals_issued_medal_id
         * medal_id integer
         * @format int32
         */
        medal_id: number;
        /**
         * get_corporations_corporation_id_medals_issued_reason
         * reason string
         * @maxLength 1000
         */
        reason: string;
        /**
         * get_corporations_corporation_id_medals_issued_status
         * status string
         */
        status: "private" | "public";
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/medals/issued/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return the current member list of a corporation, the token's character need to be a member of the corporation. --- Alternate route: `/dev/corporations/{corporation_id}/members/` Alternate route: `/v4/corporations/{corporation_id}/members/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdMembers
   * @summary Get corporation members
   * @request GET:/corporations/{corporation_id}/members/
   * @secure
   */
  getCorporationsCorporationIdMembers = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      number[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/members/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a corporation's member limit, not including CEO himself --- Alternate route: `/dev/corporations/{corporation_id}/members/limit/` Alternate route: `/v2/corporations/{corporation_id}/members/limit/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdMembersLimit
   * @summary Get corporation member limit
   * @request GET:/corporations/{corporation_id}/members/limit/
   * @secure
   */
  getCorporationsCorporationIdMembersLimit = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      number,
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/members/limit/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a corporation's members' titles --- Alternate route: `/dev/corporations/{corporation_id}/members/titles/` Alternate route: `/v2/corporations/{corporation_id}/members/titles/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdMembersTitles
   * @summary Get corporation's members' titles
   * @request GET:/corporations/{corporation_id}/members/titles/
   * @secure
   */
  getCorporationsCorporationIdMembersTitles = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_members_titles_character_id
         * character_id integer
         * @format int32
         */
        character_id: number;
        /**
         * get_corporations_corporation_id_members_titles_titles
         * A list of title_id
         * @maxItems 16
         */
        titles: number[];
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/members/titles/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns additional information about a corporation's members which helps tracking their activities --- Alternate route: `/dev/corporations/{corporation_id}/membertracking/` Alternate route: `/v2/corporations/{corporation_id}/membertracking/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdMembertracking
   * @summary Track corporation members
   * @request GET:/corporations/{corporation_id}/membertracking/
   * @secure
   */
  getCorporationsCorporationIdMembertracking = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_membertracking_base_id
         * base_id integer
         * @format int32
         */
        base_id?: number;
        /**
         * get_corporations_corporation_id_membertracking_character_id
         * character_id integer
         * @format int32
         */
        character_id: number;
        /**
         * get_corporations_corporation_id_membertracking_location_id
         * location_id integer
         * @format int64
         */
        location_id?: number;
        /**
         * get_corporations_corporation_id_membertracking_logoff_date
         * logoff_date string
         * @format date-time
         */
        logoff_date?: string;
        /**
         * get_corporations_corporation_id_membertracking_logon_date
         * logon_date string
         * @format date-time
         */
        logon_date?: string;
        /**
         * get_corporations_corporation_id_membertracking_ship_type_id
         * ship_type_id integer
         * @format int32
         */
        ship_type_id?: number;
        /**
         * get_corporations_corporation_id_membertracking_start_date
         * start_date string
         * @format date-time
         */
        start_date?: string;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/membertracking/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List open market orders placed on behalf of a corporation --- Alternate route: `/dev/corporations/{corporation_id}/orders/` Alternate route: `/legacy/corporations/{corporation_id}/orders/` Alternate route: `/v2/corporations/{corporation_id}/orders/` Alternate route: `/v3/corporations/{corporation_id}/orders/` --- This route is cached for up to 1200 seconds --- Requires one of the following EVE corporation role(s): Accountant, Trader
   *
   * @tags Market
   * @name GetCorporationsCorporationIdOrders
   * @summary List open orders from a corporation
   * @request GET:/corporations/{corporation_id}/orders/
   * @secure
   */
  getCorporationsCorporationIdOrders = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_orders_duration
         * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
         * @format int32
         */
        duration: number;
        /**
         * get_corporations_corporation_id_orders_escrow
         * For buy orders, the amount of ISK in escrow
         * @format double
         */
        escrow?: number;
        /**
         * get_corporations_corporation_id_orders_is_buy_order
         * True if the order is a bid (buy) order
         */
        is_buy_order?: boolean;
        /**
         * get_corporations_corporation_id_orders_issued
         * Date and time when this order was issued
         * @format date-time
         */
        issued: string;
        /**
         * get_corporations_corporation_id_orders_issued_by
         * The character who issued this order
         * @format int32
         */
        issued_by: number;
        /**
         * get_corporations_corporation_id_orders_location_id
         * ID of the location where order was placed
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_orders_min_volume
         * For buy orders, the minimum quantity that will be accepted in a matching sell order
         * @format int32
         */
        min_volume?: number;
        /**
         * get_corporations_corporation_id_orders_order_id
         * Unique order ID
         * @format int64
         */
        order_id: number;
        /**
         * get_corporations_corporation_id_orders_price
         * Cost per unit for this order
         * @format double
         */
        price: number;
        /**
         * get_corporations_corporation_id_orders_range
         * Valid order range, numbers are ranges in jumps
         */
        range:
          | "1"
          | "10"
          | "2"
          | "20"
          | "3"
          | "30"
          | "4"
          | "40"
          | "5"
          | "region"
          | "solarsystem"
          | "station";
        /**
         * get_corporations_corporation_id_orders_region_id
         * ID of the region where order was placed
         * @format int32
         */
        region_id: number;
        /**
         * get_corporations_corporation_id_orders_type_id
         * The type ID of the item transacted in this order
         * @format int32
         */
        type_id: number;
        /**
         * get_corporations_corporation_id_orders_volume_remain
         * Quantity of items still required or offered
         * @format int32
         */
        volume_remain: number;
        /**
         * get_corporations_corporation_id_orders_volume_total
         * Quantity of items required or offered at time order was placed
         * @format int32
         */
        volume_total: number;
        /**
         * get_corporations_corporation_id_orders_wallet_division
         * The corporation wallet division used for this order.
         * @format int32
         * @min 1
         * @max 7
         */
        wallet_division: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/orders/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past. --- Alternate route: `/dev/corporations/{corporation_id}/orders/history/` Alternate route: `/legacy/corporations/{corporation_id}/orders/history/` Alternate route: `/v1/corporations/{corporation_id}/orders/history/` Alternate route: `/v2/corporations/{corporation_id}/orders/history/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant, Trader
   *
   * @tags Market
   * @name GetCorporationsCorporationIdOrdersHistory
   * @summary List historical orders from a corporation
   * @request GET:/corporations/{corporation_id}/orders/history/
   * @secure
   */
  getCorporationsCorporationIdOrdersHistory = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_orders_history_duration
         * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
         * @format int32
         */
        duration: number;
        /**
         * get_corporations_corporation_id_orders_history_escrow
         * For buy orders, the amount of ISK in escrow
         * @format double
         */
        escrow?: number;
        /**
         * get_corporations_corporation_id_orders_history_is_buy_order
         * True if the order is a bid (buy) order
         */
        is_buy_order?: boolean;
        /**
         * get_corporations_corporation_id_orders_history_issued
         * Date and time when this order was issued
         * @format date-time
         */
        issued: string;
        /**
         * get_corporations_corporation_id_orders_history_issued_by
         * The character who issued this order
         * @format int32
         */
        issued_by?: number;
        /**
         * get_corporations_corporation_id_orders_history_location_id
         * ID of the location where order was placed
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_orders_history_min_volume
         * For buy orders, the minimum quantity that will be accepted in a matching sell order
         * @format int32
         */
        min_volume?: number;
        /**
         * get_corporations_corporation_id_orders_history_order_id
         * Unique order ID
         * @format int64
         */
        order_id: number;
        /**
         * get_corporations_corporation_id_orders_history_price
         * Cost per unit for this order
         * @format double
         */
        price: number;
        /**
         * get_corporations_corporation_id_orders_history_range
         * Valid order range, numbers are ranges in jumps
         */
        range:
          | "1"
          | "10"
          | "2"
          | "20"
          | "3"
          | "30"
          | "4"
          | "40"
          | "5"
          | "region"
          | "solarsystem"
          | "station";
        /**
         * get_corporations_corporation_id_orders_history_region_id
         * ID of the region where order was placed
         * @format int32
         */
        region_id: number;
        /**
         * get_corporations_corporation_id_orders_history_state
         * Current order state
         */
        state: "cancelled" | "expired";
        /**
         * get_corporations_corporation_id_orders_history_type_id
         * The type ID of the item transacted in this order
         * @format int32
         */
        type_id: number;
        /**
         * get_corporations_corporation_id_orders_history_volume_remain
         * Quantity of items still required or offered
         * @format int32
         */
        volume_remain: number;
        /**
         * get_corporations_corporation_id_orders_history_volume_total
         * Quantity of items required or offered at time order was placed
         * @format int32
         */
        volume_total: number;
        /**
         * get_corporations_corporation_id_orders_history_wallet_division
         * The corporation wallet division used for this order
         * @format int32
         * @min 1
         * @max 7
         */
        wallet_division: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/orders/history/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return the roles of all members if the character has the personnel manager role or any grantable role. --- Alternate route: `/dev/corporations/{corporation_id}/roles/` Alternate route: `/v2/corporations/{corporation_id}/roles/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdRoles
   * @summary Get corporation member roles
   * @request GET:/corporations/{corporation_id}/roles/
   * @secure
   */
  getCorporationsCorporationIdRoles = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_roles_character_id
         * character_id integer
         * @format int32
         */
        character_id: number;
        /**
         * get_corporations_corporation_id_roles_grantable_roles
         * grantable_roles array
         * @maxItems 100
         */
        grantable_roles?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_grantable_roles_at_base
         * grantable_roles_at_base array
         * @maxItems 100
         */
        grantable_roles_at_base?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_grantable_roles_at_hq
         * grantable_roles_at_hq array
         * @maxItems 100
         */
        grantable_roles_at_hq?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_grantable_roles_at_other
         * grantable_roles_at_other array
         * @maxItems 100
         */
        grantable_roles_at_other?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_roles
         * roles array
         * @maxItems 100
         */
        roles?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_roles_at_base
         * roles_at_base array
         * @maxItems 100
         */
        roles_at_base?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_roles_at_hq
         * roles_at_hq array
         * @maxItems 100
         */
        roles_at_hq?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_roles_at_other
         * roles_at_other array
         * @maxItems 100
         */
        roles_at_other?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/roles/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return how roles have changed for a coporation's members, up to a month --- Alternate route: `/dev/corporations/{corporation_id}/roles/history/` Alternate route: `/v2/corporations/{corporation_id}/roles/history/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdRolesHistory
   * @summary Get corporation member roles history
   * @request GET:/corporations/{corporation_id}/roles/history/
   * @secure
   */
  getCorporationsCorporationIdRolesHistory = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_roles_history_changed_at
         * changed_at string
         * @format date-time
         */
        changed_at: string;
        /**
         * get_corporations_corporation_id_roles_history_character_id
         * The character whose roles are changed
         * @format int32
         */
        character_id: number;
        /**
         * get_corporations_corporation_id_roles_history_issuer_id
         * ID of the character who issued this change
         * @format int32
         */
        issuer_id: number;
        /**
         * get_corporations_corporation_id_roles_history_new_roles
         * new_roles array
         * @maxItems 50
         */
        new_roles: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_history_old_roles
         * old_roles array
         * @maxItems 50
         */
        old_roles: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_roles_history_role_type
         * role_type string
         */
        role_type:
          | "grantable_roles"
          | "grantable_roles_at_base"
          | "grantable_roles_at_hq"
          | "grantable_roles_at_other"
          | "roles"
          | "roles_at_base"
          | "roles_at_hq"
          | "roles_at_other";
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/roles/history/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return the current shareholders of a corporation. --- Alternate route: `/dev/corporations/{corporation_id}/shareholders/` Alternate route: `/legacy/corporations/{corporation_id}/shareholders/` Alternate route: `/v1/corporations/{corporation_id}/shareholders/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdShareholders
   * @summary Get corporation shareholders
   * @request GET:/corporations/{corporation_id}/shareholders/
   * @secure
   */
  getCorporationsCorporationIdShareholders = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_shareholders_share_count
         * share_count integer
         * @format int64
         */
        share_count: number;
        /**
         * get_corporations_corporation_id_shareholders_shareholder_id
         * shareholder_id integer
         * @format int32
         */
        shareholder_id: number;
        /**
         * get_corporations_corporation_id_shareholders_shareholder_type
         * shareholder_type string
         */
        shareholder_type: "character" | "corporation";
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/shareholders/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return corporation standings from agents, NPC corporations, and factions --- Alternate route: `/dev/corporations/{corporation_id}/standings/` Alternate route: `/v2/corporations/{corporation_id}/standings/` --- This route is cached for up to 3600 seconds
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdStandings
   * @summary Get corporation standings
   * @request GET:/corporations/{corporation_id}/standings/
   * @secure
   */
  getCorporationsCorporationIdStandings = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_standings_from_id
         * from_id integer
         * @format int32
         */
        from_id: number;
        /**
         * get_corporations_corporation_id_standings_from_type
         * from_type string
         */
        from_type: "agent" | "npc_corp" | "faction";
        /**
         * get_corporations_corporation_id_standings_standing
         * standing number
         * @format float
         */
        standing: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/standings/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns list of corporation starbases (POSes) --- Alternate route: `/dev/corporations/{corporation_id}/starbases/` Alternate route: `/v2/corporations/{corporation_id}/starbases/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdStarbases
   * @summary Get corporation starbases (POSes)
   * @request GET:/corporations/{corporation_id}/starbases/
   * @secure
   */
  getCorporationsCorporationIdStarbases = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_starbases_moon_id
         * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
         * @format int32
         */
        moon_id?: number;
        /**
         * get_corporations_corporation_id_starbases_onlined_since
         * When the POS onlined, for starbases (POSes) in online state
         * @format date-time
         */
        onlined_since?: string;
        /**
         * get_corporations_corporation_id_starbases_reinforced_until
         * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
         * @format date-time
         */
        reinforced_until?: string;
        /**
         * get_corporations_corporation_id_starbases_starbase_id
         * Unique ID for this starbase (POS)
         * @format int64
         */
        starbase_id: number;
        /**
         * get_corporations_corporation_id_starbases_state
         * state string
         */
        state?:
          | "offline"
          | "online"
          | "onlining"
          | "reinforced"
          | "unanchoring";
        /**
         * get_corporations_corporation_id_starbases_system_id
         * The solar system this starbase (POS) is in, unanchored POSes have this information
         * @format int32
         */
        system_id: number;
        /**
         * get_corporations_corporation_id_starbases_type_id
         * Starbase (POS) type
         * @format int32
         */
        type_id: number;
        /**
         * get_corporations_corporation_id_starbases_unanchor_at
         * When the POS started unanchoring, for starbases (POSes) in unanchoring state
         * @format date-time
         */
        unanchor_at?: string;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/starbases/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns various settings and fuels of a starbase (POS) --- Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/` Alternate route: `/v2/corporations/{corporation_id}/starbases/{starbase_id}/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdStarbasesStarbaseId
   * @summary Get starbase (POS) detail
   * @request GET:/corporations/{corporation_id}/starbases/{starbase_id}/
   * @secure
   */
  getCorporationsCorporationIdStarbasesStarbaseId = (
    corporationId: number,
    starbaseId: number,
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * The solar system this starbase (POS) is located in,
       * @format int32
       */
      system_id: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_starbases_starbase_id_allow_alliance_members
         * allow_alliance_members boolean
         */
        allow_alliance_members: boolean;
        /**
         * get_corporations_corporation_id_starbases_starbase_id_allow_corporation_members
         * allow_corporation_members boolean
         */
        allow_corporation_members: boolean;
        /**
         * get_corporations_corporation_id_starbases_starbase_id_anchor
         * Who can anchor starbase (POS) and its structures
         */
        anchor:
          | "alliance_member"
          | "config_starbase_equipment_role"
          | "corporation_member"
          | "starbase_fuel_technician_role";
        /**
         * get_corporations_corporation_id_starbases_starbase_id_attack_if_at_war
         * attack_if_at_war boolean
         */
        attack_if_at_war: boolean;
        /**
         * get_corporations_corporation_id_starbases_starbase_id_attack_if_other_security_status_dropping
         * attack_if_other_security_status_dropping boolean
         */
        attack_if_other_security_status_dropping: boolean;
        /**
         * get_corporations_corporation_id_starbases_starbase_id_attack_security_status_threshold
         * Starbase (POS) will attack if target's security standing is lower than this value
         * @format float
         */
        attack_security_status_threshold?: number;
        /**
         * get_corporations_corporation_id_starbases_starbase_id_attack_standing_threshold
         * Starbase (POS) will attack if target's standing is lower than this value
         * @format float
         */
        attack_standing_threshold?: number;
        /**
         * get_corporations_corporation_id_starbases_starbase_id_fuel_bay_take
         * Who can take fuel blocks out of the starbase (POS)'s fuel bay
         */
        fuel_bay_take:
          | "alliance_member"
          | "config_starbase_equipment_role"
          | "corporation_member"
          | "starbase_fuel_technician_role";
        /**
         * get_corporations_corporation_id_starbases_starbase_id_fuel_bay_view
         * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
         */
        fuel_bay_view:
          | "alliance_member"
          | "config_starbase_equipment_role"
          | "corporation_member"
          | "starbase_fuel_technician_role";
        /**
         * get_corporations_corporation_id_starbases_starbase_id_fuels
         * Fuel blocks and other things that will be consumed when operating a starbase (POS)
         * @maxItems 20
         */
        fuels?: {
          /**
           * get_corporations_corporation_id_starbases_starbase_id_quantity
           * quantity integer
           * @format int32
           */
          quantity: number;
          /**
           * get_corporations_corporation_id_starbases_starbase_id_type_id
           * type_id integer
           * @format int32
           */
          type_id: number;
        }[];
        /**
         * get_corporations_corporation_id_starbases_starbase_id_offline
         * Who can offline starbase (POS) and its structures
         */
        offline:
          | "alliance_member"
          | "config_starbase_equipment_role"
          | "corporation_member"
          | "starbase_fuel_technician_role";
        /**
         * get_corporations_corporation_id_starbases_starbase_id_online
         * Who can online starbase (POS) and its structures
         */
        online:
          | "alliance_member"
          | "config_starbase_equipment_role"
          | "corporation_member"
          | "starbase_fuel_technician_role";
        /**
         * get_corporations_corporation_id_starbases_starbase_id_unanchor
         * Who can unanchor starbase (POS) and its structures
         */
        unanchor:
          | "alliance_member"
          | "config_starbase_equipment_role"
          | "corporation_member"
          | "starbase_fuel_technician_role";
        /**
         * get_corporations_corporation_id_starbases_starbase_id_use_alliance_standings
         * True if the starbase (POS) is using alliance standings, otherwise using corporation's
         */
        use_alliance_standings: boolean;
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/starbases/${starbaseId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th --- Alternate route: `/dev/corporations/{corporation_id}/structures/` Alternate route: `/v4/corporations/{corporation_id}/structures/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Station_Manager
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdStructures
   * @summary Get corporation structures
   * @request GET:/corporations/{corporation_id}/structures/
   * @secure
   */
  getCorporationsCorporationIdStructures = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Language to use in the response, takes precedence over Accept-Language
       * @default "en"
       */
      language?:
        | "en"
        | "en-us"
        | "de"
        | "fr"
        | "ja"
        | "ru"
        | "zh"
        | "ko"
        | "es";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_structures_corporation_id
         * ID of the corporation that owns the structure
         * @format int32
         */
        corporation_id: number;
        /**
         * get_corporations_corporation_id_structures_fuel_expires
         * Date on which the structure will run out of fuel
         * @format date-time
         */
        fuel_expires?: string;
        /**
         * get_corporations_corporation_id_structures_name
         * The structure name
         */
        name?: string;
        /**
         * get_corporations_corporation_id_structures_next_reinforce_apply
         * The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect
         * @format date-time
         */
        next_reinforce_apply?: string;
        /**
         * get_corporations_corporation_id_structures_next_reinforce_hour
         * The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply
         * @format int32
         * @min 0
         * @max 23
         */
        next_reinforce_hour?: number;
        /**
         * get_corporations_corporation_id_structures_profile_id
         * The id of the ACL profile for this citadel
         * @format int32
         */
        profile_id: number;
        /**
         * get_corporations_corporation_id_structures_reinforce_hour
         * The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property
         * @format int32
         * @min 0
         * @max 23
         */
        reinforce_hour?: number;
        /**
         * get_corporations_corporation_id_structures_services
         * Contains a list of service upgrades, and their state
         * @maxItems 10
         */
        services?: {
          /**
           * get_corporations_corporation_id_structures_service_name
           * name string
           */
          name: string;
          /**
           * get_corporations_corporation_id_structures_service_state
           * state string
           */
          state: "online" | "offline" | "cleanup";
        }[];
        /**
         * get_corporations_corporation_id_structures_state
         * state string
         */
        state:
          | "anchor_vulnerable"
          | "anchoring"
          | "armor_reinforce"
          | "armor_vulnerable"
          | "deploy_vulnerable"
          | "fitting_invulnerable"
          | "hull_reinforce"
          | "hull_vulnerable"
          | "online_deprecated"
          | "onlining_vulnerable"
          | "shield_vulnerable"
          | "unanchored"
          | "unknown";
        /**
         * get_corporations_corporation_id_structures_state_timer_end
         * Date at which the structure will move to it's next state
         * @format date-time
         */
        state_timer_end?: string;
        /**
         * get_corporations_corporation_id_structures_state_timer_start
         * Date at which the structure entered it's current state
         * @format date-time
         */
        state_timer_start?: string;
        /**
         * get_corporations_corporation_id_structures_structure_id
         * The Item ID of the structure
         * @format int64
         */
        structure_id: number;
        /**
         * get_corporations_corporation_id_structures_system_id
         * The solar system the structure is in
         * @format int32
         */
        system_id: number;
        /**
         * get_corporations_corporation_id_structures_type_id
         * The type id of the structure
         * @format int32
         */
        type_id: number;
        /**
         * get_corporations_corporation_id_structures_unanchors_at
         * Date at which the structure will unanchor
         * @format date-time
         */
        unanchors_at?: string;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/structures/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a corporation's titles --- Alternate route: `/dev/corporations/{corporation_id}/titles/` Alternate route: `/v2/corporations/{corporation_id}/titles/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
   *
   * @tags Corporation
   * @name GetCorporationsCorporationIdTitles
   * @summary Get corporation titles
   * @request GET:/corporations/{corporation_id}/titles/
   * @secure
   */
  getCorporationsCorporationIdTitles = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_titles_grantable_roles
         * grantable_roles array
         * @maxItems 50
         */
        grantable_roles?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_grantable_roles_at_base
         * grantable_roles_at_base array
         * @maxItems 50
         */
        grantable_roles_at_base?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_grantable_roles_at_hq
         * grantable_roles_at_hq array
         * @maxItems 50
         */
        grantable_roles_at_hq?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_grantable_roles_at_other
         * grantable_roles_at_other array
         * @maxItems 50
         */
        grantable_roles_at_other?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_name
         * name string
         */
        name?: string;
        /**
         * get_corporations_corporation_id_titles_roles
         * roles array
         * @maxItems 50
         */
        roles?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_roles_at_base
         * roles_at_base array
         * @maxItems 50
         */
        roles_at_base?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_roles_at_hq
         * roles_at_hq array
         * @maxItems 50
         */
        roles_at_hq?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_roles_at_other
         * roles_at_other array
         * @maxItems 50
         */
        roles_at_other?: (
          | "Account_Take_1"
          | "Account_Take_2"
          | "Account_Take_3"
          | "Account_Take_4"
          | "Account_Take_5"
          | "Account_Take_6"
          | "Account_Take_7"
          | "Accountant"
          | "Auditor"
          | "Brand_Manager"
          | "Communications_Officer"
          | "Config_Equipment"
          | "Config_Starbase_Equipment"
          | "Container_Take_1"
          | "Container_Take_2"
          | "Container_Take_3"
          | "Container_Take_4"
          | "Container_Take_5"
          | "Container_Take_6"
          | "Container_Take_7"
          | "Contract_Manager"
          | "Deliveries_Container_Take"
          | "Deliveries_Query"
          | "Deliveries_Take"
          | "Diplomat"
          | "Director"
          | "Factory_Manager"
          | "Fitting_Manager"
          | "Hangar_Query_1"
          | "Hangar_Query_2"
          | "Hangar_Query_3"
          | "Hangar_Query_4"
          | "Hangar_Query_5"
          | "Hangar_Query_6"
          | "Hangar_Query_7"
          | "Hangar_Take_1"
          | "Hangar_Take_2"
          | "Hangar_Take_3"
          | "Hangar_Take_4"
          | "Hangar_Take_5"
          | "Hangar_Take_6"
          | "Hangar_Take_7"
          | "Junior_Accountant"
          | "Personnel_Manager"
          | "Project_Manager"
          | "Rent_Factory_Facility"
          | "Rent_Office"
          | "Rent_Research_Facility"
          | "Security_Officer"
          | "Skill_Plan_Manager"
          | "Starbase_Defense_Operator"
          | "Starbase_Fuel_Technician"
          | "Station_Manager"
          | "Trader"
        )[];
        /**
         * get_corporations_corporation_id_titles_title_id
         * title_id integer
         * @format int32
         */
        title_id?: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/titles/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get a corporation's wallets --- Alternate route: `/dev/corporations/{corporation_id}/wallets/` Alternate route: `/legacy/corporations/{corporation_id}/wallets/` Alternate route: `/v1/corporations/{corporation_id}/wallets/` --- This route is cached for up to 300 seconds --- Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
   *
   * @tags Wallet
   * @name GetCorporationsCorporationIdWallets
   * @summary Returns a corporation's wallet balance
   * @request GET:/corporations/{corporation_id}/wallets/
   * @secure
   */
  getCorporationsCorporationIdWallets = (
    corporationId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_wallets_balance
         * balance number
         * @format double
         */
        balance: number;
        /**
         * get_corporations_corporation_id_wallets_division
         * division integer
         * @format int32
         * @min 1
         * @max 7
         */
        division: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/wallets/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve the given corporation's wallet journal for the given division going 30 days back --- Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/` Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/journal/` Alternate route: `/v3/corporations/{corporation_id}/wallets/{division}/journal/` Alternate route: `/v4/corporations/{corporation_id}/wallets/{division}/journal/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
   *
   * @tags Wallet
   * @name GetCorporationsCorporationIdWalletsDivisionJournal
   * @summary Get corporation wallet journal
   * @request GET:/corporations/{corporation_id}/wallets/{division}/journal/
   * @secure
   */
  getCorporationsCorporationIdWalletsDivisionJournal = (
    corporationId: number,
    division: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_wallets_division_journal_amount
         * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
         * @format double
         */
        amount?: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_balance
         * Wallet balance after transaction occurred
         * @format double
         */
        balance?: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_context_id
         * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
         * @format int64
         */
        context_id?: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_context_id_type
         * The type of the given context_id if present
         */
        context_id_type?:
          | "structure_id"
          | "station_id"
          | "market_transaction_id"
          | "character_id"
          | "corporation_id"
          | "alliance_id"
          | "eve_system"
          | "industry_job_id"
          | "contract_id"
          | "planet_id"
          | "system_id"
          | "type_id";
        /**
         * get_corporations_corporation_id_wallets_division_journal_date
         * Date and time of transaction
         * @format date-time
         */
        date: string;
        /**
         * get_corporations_corporation_id_wallets_division_journal_description
         * The reason for the transaction, mirrors what is seen in the client
         */
        description: string;
        /**
         * get_corporations_corporation_id_wallets_division_journal_first_party_id
         * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
         * @format int32
         */
        first_party_id?: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_id
         * Unique journal reference ID
         * @format int64
         */
        id: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_reason
         * The user stated reason for the transaction. Only applies to some ref_types
         */
        reason?: string;
        /**
         * get_corporations_corporation_id_wallets_division_journal_ref_type
         * "The transaction type for the given. transaction. Different transaction types will populate different attributes. Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can look at the following file to see string->int mappings: https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py"
         */
        ref_type:
          | "acceleration_gate_fee"
          | "advertisement_listing_fee"
          | "agent_donation"
          | "agent_location_services"
          | "agent_miscellaneous"
          | "agent_mission_collateral_paid"
          | "agent_mission_collateral_refunded"
          | "agent_mission_reward"
          | "agent_mission_reward_corporation_tax"
          | "agent_mission_time_bonus_reward"
          | "agent_mission_time_bonus_reward_corporation_tax"
          | "agent_security_services"
          | "agent_services_rendered"
          | "agents_preward"
          | "alliance_maintainance_fee"
          | "alliance_registration_fee"
          | "allignment_based_gate_toll"
          | "asset_safety_recovery_tax"
          | "bounty"
          | "bounty_prize"
          | "bounty_prize_corporation_tax"
          | "bounty_prizes"
          | "bounty_reimbursement"
          | "bounty_surcharge"
          | "brokers_fee"
          | "clone_activation"
          | "clone_transfer"
          | "contraband_fine"
          | "contract_auction_bid"
          | "contract_auction_bid_corp"
          | "contract_auction_bid_refund"
          | "contract_auction_sold"
          | "contract_brokers_fee"
          | "contract_brokers_fee_corp"
          | "contract_collateral"
          | "contract_collateral_deposited_corp"
          | "contract_collateral_payout"
          | "contract_collateral_refund"
          | "contract_deposit"
          | "contract_deposit_corp"
          | "contract_deposit_refund"
          | "contract_deposit_sales_tax"
          | "contract_price"
          | "contract_price_payment_corp"
          | "contract_reversal"
          | "contract_reward"
          | "contract_reward_deposited"
          | "contract_reward_deposited_corp"
          | "contract_reward_refund"
          | "contract_sales_tax"
          | "copying"
          | "corporate_reward_payout"
          | "corporate_reward_tax"
          | "corporation_account_withdrawal"
          | "corporation_bulk_payment"
          | "corporation_dividend_payment"
          | "corporation_liquidation"
          | "corporation_logo_change_cost"
          | "corporation_payment"
          | "corporation_registration_fee"
          | "cosmetic_market_component_item_purchase"
          | "cosmetic_market_skin_purchase"
          | "cosmetic_market_skin_sale"
          | "cosmetic_market_skin_sale_broker_fee"
          | "cosmetic_market_skin_sale_tax"
          | "cosmetic_market_skin_transaction"
          | "courier_mission_escrow"
          | "cspa"
          | "cspaofflinerefund"
          | "daily_challenge_reward"
          | "daily_goal_payouts"
          | "daily_goal_payouts_tax"
          | "datacore_fee"
          | "dna_modification_fee"
          | "docking_fee"
          | "duel_wager_escrow"
          | "duel_wager_payment"
          | "duel_wager_refund"
          | "ess_escrow_transfer"
          | "external_trade_delivery"
          | "external_trade_freeze"
          | "external_trade_thaw"
          | "factory_slot_rental_fee"
          | "flux_payout"
          | "flux_tax"
          | "flux_ticket_repayment"
          | "flux_ticket_sale"
          | "gm_cash_transfer"
          | "industry_job_tax"
          | "infrastructure_hub_maintenance"
          | "inheritance"
          | "insurance"
          | "insurgency_corruption_contribution_reward"
          | "insurgency_suppression_contribution_reward"
          | "item_trader_payment"
          | "jump_clone_activation_fee"
          | "jump_clone_installation_fee"
          | "kill_right_fee"
          | "lp_store"
          | "manufacturing"
          | "market_escrow"
          | "market_fine_paid"
          | "market_provider_tax"
          | "market_transaction"
          | "medal_creation"
          | "medal_issued"
          | "milestone_reward_payment"
          | "mission_completion"
          | "mission_cost"
          | "mission_expiration"
          | "mission_reward"
          | "office_rental_fee"
          | "operation_bonus"
          | "opportunity_reward"
          | "planetary_construction"
          | "planetary_export_tax"
          | "planetary_import_tax"
          | "player_donation"
          | "player_trading"
          | "project_discovery_reward"
          | "project_discovery_tax"
          | "project_payouts"
          | "reaction"
          | "redeemed_isk_token"
          | "release_of_impounded_property"
          | "repair_bill"
          | "reprocessing_tax"
          | "researching_material_productivity"
          | "researching_technology"
          | "researching_time_productivity"
          | "resource_wars_reward"
          | "reverse_engineering"
          | "season_challenge_reward"
          | "security_processing_fee"
          | "shares"
          | "skill_purchase"
          | "sovereignity_bill"
          | "store_purchase"
          | "store_purchase_refund"
          | "structure_gate_jump"
          | "transaction_tax"
          | "under_construction"
          | "upkeep_adjustment_fee"
          | "war_ally_contract"
          | "war_fee"
          | "war_fee_surrender";
        /**
         * get_corporations_corporation_id_wallets_division_journal_second_party_id
         * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
         * @format int32
         */
        second_party_id?: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_tax
         * Tax amount received. Only applies to tax related transactions
         * @format double
         */
        tax?: number;
        /**
         * get_corporations_corporation_id_wallets_division_journal_tax_receiver_id
         * The corporation ID receiving any tax paid. Only applies to tax related transactions
         * @format int32
         */
        tax_receiver_id?: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/wallets/${division}/journal/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get wallet transactions of a corporation --- Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/` Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/` Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
   *
   * @tags Wallet
   * @name GetCorporationsCorporationIdWalletsDivisionTransactions
   * @summary Get corporation wallet transactions
   * @request GET:/corporations/{corporation_id}/wallets/{division}/transactions/
   * @secure
   */
  getCorporationsCorporationIdWalletsDivisionTransactions = (
    corporationId: number,
    division: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Only show journal entries happened before the transaction referenced by this id
       * @format int64
       */
      from_id?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_corporations_corporation_id_wallets_division_transactions_client_id
         * client_id integer
         * @format int32
         */
        client_id: number;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_date
         * Date and time of transaction
         * @format date-time
         */
        date: string;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_is_buy
         * is_buy boolean
         */
        is_buy: boolean;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_journal_ref_id
         * -1 if there is no corresponding wallet journal entry
         * @format int64
         */
        journal_ref_id: number;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_quantity
         * quantity integer
         * @format int32
         */
        quantity: number;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_transaction_id
         * Unique transaction ID
         * @format int64
         */
        transaction_id: number;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
        /**
         * get_corporations_corporation_id_wallets_division_transactions_unit_price
         * Amount paid per unit
         * @format double
         */
        unit_price: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/corporations/${corporationId}/wallets/${division}/transactions/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
