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

export class Characters<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Bulk lookup of character IDs to corporation, alliance and faction --- Alternate route: `/dev/characters/affiliation/` Alternate route: `/legacy/characters/affiliation/` Alternate route: `/v1/characters/affiliation/` Alternate route: `/v2/characters/affiliation/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name PostCharactersAffiliation
   * @summary Character affiliation
   * @request POST:/characters/affiliation/
   */
  postCharactersAffiliation = (
    characters: number[],
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
         * post_characters_affiliation_alliance_id
         * The character's alliance ID, if their corporation is in an alliance
         * @format int32
         */
        alliance_id?: number;
        /**
         * post_characters_affiliation_character_id
         * The character's ID
         * @format int32
         */
        character_id: number;
        /**
         * post_characters_affiliation_corporation_id
         * The character's corporation ID
         * @format int32
         */
        corporation_id: number;
        /**
         * post_characters_affiliation_faction_id
         * The character's faction ID, if their corporation is in a faction
         * @format int32
         */
        faction_id?: number;
      }[],
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/affiliation/`,
      method: "POST",
      query: query,
      body: characters,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Public information about a character --- Alternate route: `/dev/characters/{character_id}/` Alternate route: `/legacy/characters/{character_id}/` Alternate route: `/v5/characters/{character_id}/` --- This route is cached for up to 604800 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterId
   * @summary Get character's public information
   * @request GET:/characters/{character_id}/
   */
  getCharactersCharacterId = (
    characterId: number,
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
         * get_characters_character_id_alliance_id
         * The character's alliance ID
         * @format int32
         */
        alliance_id?: number;
        /**
         * get_characters_character_id_birthday
         * Creation date of the character
         * @format date-time
         */
        birthday: string;
        /**
         * get_characters_character_id_bloodline_id
         * bloodline_id integer
         * @format int32
         */
        bloodline_id: number;
        /**
         * get_characters_character_id_corporation_id
         * The character's corporation ID
         * @format int32
         */
        corporation_id: number;
        /**
         * get_characters_character_id_description
         * description string
         */
        description?: string;
        /**
         * get_characters_character_id_faction_id
         * ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
         * @format int32
         */
        faction_id?: number;
        /**
         * get_characters_character_id_gender
         * gender string
         */
        gender: "female" | "male";
        /**
         * get_characters_character_id_name
         * name string
         */
        name: string;
        /**
         * get_characters_character_id_race_id
         * race_id integer
         * @format int32
         */
        race_id: number;
        /**
         * get_characters_character_id_security_status
         * security_status number
         * @format float
         * @min -10
         * @max 10
         */
        security_status?: number;
        /**
         * get_characters_character_id_title
         * The individual title of the character
         */
        title?: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_characters_character_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate) --- Alternate route: `/dev/characters/{character_id}/agents_research/` Alternate route: `/v2/characters/{character_id}/agents_research/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdAgentsResearch
   * @summary Get agents research
   * @request GET:/characters/{character_id}/agents_research/
   * @secure
   */
  getCharactersCharacterIdAgentsResearch = (
    characterId: number,
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
         * get_characters_character_id_agents_research_agent_id
         * agent_id integer
         * @format int32
         */
        agent_id: number;
        /**
         * get_characters_character_id_agents_research_points_per_day
         * points_per_day number
         * @format float
         */
        points_per_day: number;
        /**
         * get_characters_character_id_agents_research_remainder_points
         * remainder_points number
         * @format float
         */
        remainder_points: number;
        /**
         * get_characters_character_id_agents_research_skill_type_id
         * skill_type_id integer
         * @format int32
         */
        skill_type_id: number;
        /**
         * get_characters_character_id_agents_research_started_at
         * started_at string
         * @format date-time
         */
        started_at: string;
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
      path: `/characters/${characterId}/agents_research/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of the characters assets --- Alternate route: `/dev/characters/{character_id}/assets/` Alternate route: `/legacy/characters/{character_id}/assets/` Alternate route: `/v4/characters/{character_id}/assets/` Alternate route: `/v5/characters/{character_id}/assets/` --- This route is cached for up to 3600 seconds
   *
   * @tags Assets
   * @name GetCharactersCharacterIdAssets
   * @summary Get character assets
   * @request GET:/characters/{character_id}/assets/
   * @secure
   */
  getCharactersCharacterIdAssets = (
    characterId: number,
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
         * get_characters_character_id_assets_is_blueprint_copy
         * is_blueprint_copy boolean
         */
        is_blueprint_copy?: boolean;
        /**
         * get_characters_character_id_assets_is_singleton
         * is_singleton boolean
         */
        is_singleton: boolean;
        /**
         * get_characters_character_id_assets_item_id
         * item_id integer
         * @format int64
         */
        item_id: number;
        /**
         * get_characters_character_id_assets_location_flag
         * location_flag string
         */
        location_flag:
          | "AssetSafety"
          | "AutoFit"
          | "BoosterBay"
          | "Cargo"
          | "CorporationGoalDeliveries"
          | "CorpseBay"
          | "Deliveries"
          | "DroneBay"
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
          | "InfrastructureHangar"
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
          | "QuafeBay"
          | "RigSlot0"
          | "RigSlot1"
          | "RigSlot2"
          | "RigSlot3"
          | "RigSlot4"
          | "RigSlot5"
          | "RigSlot6"
          | "RigSlot7"
          | "ShipHangar"
          | "Skill"
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
          | "StructureDeedBay"
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
          | "Wardrobe";
        /**
         * get_characters_character_id_assets_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_characters_character_id_assets_location_type
         * location_type string
         */
        location_type: "station" | "solar_system" | "item" | "other";
        /**
         * get_characters_character_id_assets_quantity
         * quantity integer
         * @format int32
         */
        quantity: number;
        /**
         * get_characters_character_id_assets_type_id
         * type_id integer
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
           * get_characters_character_id_assets_error
           * error message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/assets/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0) --- Alternate route: `/dev/characters/{character_id}/assets/locations/` Alternate route: `/v2/characters/{character_id}/assets/locations/`
   *
   * @tags Assets
   * @name PostCharactersCharacterIdAssetsLocations
   * @summary Get character asset locations
   * @request POST:/characters/{character_id}/assets/locations/
   * @secure
   */
  postCharactersCharacterIdAssetsLocations = (
    characterId: number,
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
         * post_characters_character_id_assets_locations_item_id
         * item_id integer
         * @format int64
         */
        item_id: number;
        /**
         * post_characters_character_id_assets_locations_position
         * position object
         */
        position: {
          /**
           * post_characters_character_id_assets_locations_x
           * x number
           * @format double
           */
          x: number;
          /**
           * post_characters_character_id_assets_locations_y
           * y number
           * @format double
           */
          y: number;
          /**
           * post_characters_character_id_assets_locations_z
           * z number
           * @format double
           */
          z: number;
        };
      }[],
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/assets/locations/`,
      method: "POST",
      query: query,
      body: item_ids,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships. --- Alternate route: `/dev/characters/{character_id}/assets/names/` Alternate route: `/legacy/characters/{character_id}/assets/names/` Alternate route: `/v1/characters/{character_id}/assets/names/`
   *
   * @tags Assets
   * @name PostCharactersCharacterIdAssetsNames
   * @summary Get character asset names
   * @request POST:/characters/{character_id}/assets/names/
   * @secure
   */
  postCharactersCharacterIdAssetsNames = (
    characterId: number,
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
         * post_characters_character_id_assets_names_item_id
         * item_id integer
         * @format int64
         */
        item_id: number;
        /**
         * post_characters_character_id_assets_names_name
         * name string
         */
        name: string;
      }[],
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/assets/names/`,
      method: "POST",
      query: query,
      body: item_ids,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return attributes of a character --- Alternate route: `/dev/characters/{character_id}/attributes/` Alternate route: `/legacy/characters/{character_id}/attributes/` Alternate route: `/v1/characters/{character_id}/attributes/` --- This route is cached for up to 120 seconds
   *
   * @tags Skills
   * @name GetCharactersCharacterIdAttributes
   * @summary Get character attributes
   * @request GET:/characters/{character_id}/attributes/
   * @secure
   */
  getCharactersCharacterIdAttributes = (
    characterId: number,
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
         * get_characters_character_id_attributes_accrued_remap_cooldown_date
         * Neural remapping cooldown after a character uses remap accrued over time
         * @format date-time
         */
        accrued_remap_cooldown_date?: string;
        /**
         * get_characters_character_id_attributes_bonus_remaps
         * Number of available bonus character neural remaps
         * @format int32
         */
        bonus_remaps?: number;
        /**
         * get_characters_character_id_attributes_charisma
         * charisma integer
         * @format int32
         */
        charisma: number;
        /**
         * get_characters_character_id_attributes_intelligence
         * intelligence integer
         * @format int32
         */
        intelligence: number;
        /**
         * get_characters_character_id_attributes_last_remap_date
         * Datetime of last neural remap, including usage of bonus remaps
         * @format date-time
         */
        last_remap_date?: string;
        /**
         * get_characters_character_id_attributes_memory
         * memory integer
         * @format int32
         */
        memory: number;
        /**
         * get_characters_character_id_attributes_perception
         * perception integer
         * @format int32
         */
        perception: number;
        /**
         * get_characters_character_id_attributes_willpower
         * willpower integer
         * @format int32
         */
        willpower: number;
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
      path: `/characters/${characterId}/attributes/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of blueprints the character owns --- Alternate route: `/dev/characters/{character_id}/blueprints/` Alternate route: `/v3/characters/{character_id}/blueprints/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdBlueprints
   * @summary Get blueprints
   * @request GET:/characters/{character_id}/blueprints/
   * @secure
   */
  getCharactersCharacterIdBlueprints = (
    characterId: number,
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
         * get_characters_character_id_blueprints_item_id
         * Unique ID for this item.
         * @format int64
         */
        item_id: number;
        /**
         * get_characters_character_id_blueprints_location_flag
         * Type of the location_id
         */
        location_flag:
          | "AutoFit"
          | "Cargo"
          | "CorpseBay"
          | "DroneBay"
          | "FleetHangar"
          | "Deliveries"
          | "HiddenModifiers"
          | "Hangar"
          | "HangarAll"
          | "LoSlot0"
          | "LoSlot1"
          | "LoSlot2"
          | "LoSlot3"
          | "LoSlot4"
          | "LoSlot5"
          | "LoSlot6"
          | "LoSlot7"
          | "MedSlot0"
          | "MedSlot1"
          | "MedSlot2"
          | "MedSlot3"
          | "MedSlot4"
          | "MedSlot5"
          | "MedSlot6"
          | "MedSlot7"
          | "HiSlot0"
          | "HiSlot1"
          | "HiSlot2"
          | "HiSlot3"
          | "HiSlot4"
          | "HiSlot5"
          | "HiSlot6"
          | "HiSlot7"
          | "AssetSafety"
          | "Locked"
          | "Unlocked"
          | "Implant"
          | "QuafeBay"
          | "RigSlot0"
          | "RigSlot1"
          | "RigSlot2"
          | "RigSlot3"
          | "RigSlot4"
          | "RigSlot5"
          | "RigSlot6"
          | "RigSlot7"
          | "ShipHangar"
          | "SpecializedFuelBay"
          | "SpecializedOreHold"
          | "SpecializedGasHold"
          | "SpecializedMineralHold"
          | "SpecializedSalvageHold"
          | "SpecializedShipHold"
          | "SpecializedSmallShipHold"
          | "SpecializedMediumShipHold"
          | "SpecializedLargeShipHold"
          | "SpecializedIndustrialShipHold"
          | "SpecializedAmmoHold"
          | "SpecializedCommandCenterHold"
          | "SpecializedPlanetaryCommoditiesHold"
          | "SpecializedMaterialBay"
          | "SubSystemSlot0"
          | "SubSystemSlot1"
          | "SubSystemSlot2"
          | "SubSystemSlot3"
          | "SubSystemSlot4"
          | "SubSystemSlot5"
          | "SubSystemSlot6"
          | "SubSystemSlot7"
          | "FighterBay"
          | "FighterTube0"
          | "FighterTube1"
          | "FighterTube2"
          | "FighterTube3"
          | "FighterTube4"
          | "Module";
        /**
         * get_characters_character_id_blueprints_location_id
         * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
         * @format int64
         */
        location_id: number;
        /**
         * get_characters_character_id_blueprints_material_efficiency
         * Material Efficiency Level of the blueprint.
         * @format int32
         * @min 0
         * @max 25
         */
        material_efficiency: number;
        /**
         * get_characters_character_id_blueprints_quantity
         * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
         * @format int32
         * @min -2
         */
        quantity: number;
        /**
         * get_characters_character_id_blueprints_runs
         * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
         * @format int32
         * @min -1
         */
        runs: number;
        /**
         * get_characters_character_id_blueprints_time_efficiency
         * Time Efficiency Level of the blueprint.
         * @format int32
         * @min 0
         * @max 20
         */
        time_efficiency: number;
        /**
         * get_characters_character_id_blueprints_type_id
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
      path: `/characters/${characterId}/blueprints/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event --- Alternate route: `/dev/characters/{character_id}/calendar/` Alternate route: `/legacy/characters/{character_id}/calendar/` Alternate route: `/v1/characters/{character_id}/calendar/` Alternate route: `/v2/characters/{character_id}/calendar/` --- This route is cached for up to 5 seconds
   *
   * @tags Calendar
   * @name GetCharactersCharacterIdCalendar
   * @summary List calendar event summaries
   * @request GET:/characters/{character_id}/calendar/
   * @secure
   */
  getCharactersCharacterIdCalendar = (
    characterId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * The event ID to retrieve events from
       * @format int32
       */
      from_event?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_characters_character_id_calendar_event_date
         * event_date string
         * @format date-time
         */
        event_date?: string;
        /**
         * get_characters_character_id_calendar_event_id
         * event_id integer
         * @format int32
         */
        event_id?: number;
        /**
         * get_characters_character_id_calendar_event_response
         * event_response string
         */
        event_response?:
          | "declined"
          | "not_responded"
          | "accepted"
          | "tentative";
        /**
         * get_characters_character_id_calendar_importance
         * importance integer
         * @format int32
         */
        importance?: number;
        /**
         * get_characters_character_id_calendar_title
         * title string
         */
        title?: string;
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
      path: `/characters/${characterId}/calendar/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get all the information for a specific event --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/` Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/` --- This route is cached for up to 5 seconds
   *
   * @tags Calendar
   * @name GetCharactersCharacterIdCalendarEventId
   * @summary Get an event
   * @request GET:/characters/{character_id}/calendar/{event_id}/
   * @secure
   */
  getCharactersCharacterIdCalendarEventId = (
    characterId: number,
    eventId: number,
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
         * get_characters_character_id_calendar_event_id_date
         * date string
         * @format date-time
         */
        date: string;
        /**
         * get_characters_character_id_calendar_event_id_duration
         * Length in minutes
         * @format int32
         */
        duration: number;
        /**
         * get_characters_character_id_calendar_event_id_event_id
         * event_id integer
         * @format int32
         */
        event_id: number;
        /**
         * get_characters_character_id_calendar_event_id_importance
         * importance integer
         * @format int32
         */
        importance: number;
        /**
         * get_characters_character_id_calendar_event_id_owner_id
         * owner_id integer
         * @format int32
         */
        owner_id: number;
        /**
         * get_characters_character_id_calendar_event_id_owner_name
         * owner_name string
         */
        owner_name: string;
        /**
         * get_characters_character_id_calendar_event_id_owner_type
         * owner_type string
         */
        owner_type:
          | "eve_server"
          | "corporation"
          | "faction"
          | "character"
          | "alliance";
        /**
         * get_characters_character_id_calendar_event_id_response
         * response string
         */
        response: string;
        /**
         * get_characters_character_id_calendar_event_id_text
         * text string
         */
        text: string;
        /**
         * get_characters_character_id_calendar_event_id_title
         * title string
         */
        title: string;
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_characters_character_id_calendar_event_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/calendar/${eventId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Set your response status to an event --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/` Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/` --- This route is cached for up to 5 seconds
   *
   * @tags Calendar
   * @name PutCharactersCharacterIdCalendarEventId
   * @summary Respond to an event
   * @request PUT:/characters/{character_id}/calendar/{event_id}/
   * @secure
   */
  putCharactersCharacterIdCalendarEventId = (
    characterId: number,
    eventId: number,
    response: {
      /**
       * put_characters_character_id_calendar_event_id_response_response
       * response string
       */
      response: "accepted" | "declined" | "tentative";
    },
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/calendar/${eventId}/`,
      method: "PUT",
      query: query,
      body: response,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Get all invited attendees for a given event --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/` Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/` Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/` Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/` --- This route is cached for up to 600 seconds
   *
   * @tags Calendar
   * @name GetCharactersCharacterIdCalendarEventIdAttendees
   * @summary Get attendees
   * @request GET:/characters/{character_id}/calendar/{event_id}/attendees/
   * @secure
   */
  getCharactersCharacterIdCalendarEventIdAttendees = (
    characterId: number,
    eventId: number,
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
         * get_characters_character_id_calendar_event_id_attendees_character_id
         * character_id integer
         * @format int32
         */
        character_id?: number;
        /**
         * get_characters_character_id_calendar_event_id_attendees_event_response
         * event_response string
         */
        event_response?:
          | "declined"
          | "not_responded"
          | "accepted"
          | "tentative";
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_characters_character_id_calendar_event_id_attendees_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/calendar/${eventId}/attendees/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description A list of the character's clones --- Alternate route: `/dev/characters/{character_id}/clones/` Alternate route: `/legacy/characters/{character_id}/clones/` Alternate route: `/v2/characters/{character_id}/clones/` Alternate route: `/v3/characters/{character_id}/clones/` Alternate route: `/v4/characters/{character_id}/clones/` --- This route is cached for up to 120 seconds
   *
   * @tags Clones
   * @name GetCharactersCharacterIdClones
   * @summary Get clones
   * @request GET:/characters/{character_id}/clones/
   * @secure
   */
  getCharactersCharacterIdClones = (
    characterId: number,
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
         * get_characters_character_id_clones_home_location
         * home_location object
         */
        home_location?: {
          /**
           * get_characters_character_id_clones_location_id
           * location_id integer
           * @format int64
           */
          location_id?: number;
          /**
           * get_characters_character_id_clones_location_type
           * location_type string
           */
          location_type?: "station" | "structure";
        };
        /**
         * get_characters_character_id_clones_jump_clones
         * jump_clones array
         * @maxItems 64
         */
        jump_clones: {
          /**
           * get_characters_character_id_clones_implants
           * implants array
           * @maxItems 64
           */
          implants: number[];
          /**
           * get_characters_character_id_clones_jump_clone_id
           * jump_clone_id integer
           * @format int32
           */
          jump_clone_id: number;
          /**
           * get_characters_character_id_clones_jump_clone_location_id
           * location_id integer
           * @format int64
           */
          location_id: number;
          /**
           * get_characters_character_id_clones_jump_clone_location_type
           * location_type string
           */
          location_type: "station" | "structure";
          /**
           * get_characters_character_id_clones_name
           * name string
           */
          name?: string;
        }[];
        /**
         * get_characters_character_id_clones_last_clone_jump_date
         * last_clone_jump_date string
         * @format date-time
         */
        last_clone_jump_date?: string;
        /**
         * get_characters_character_id_clones_last_station_change_date
         * last_station_change_date string
         * @format date-time
         */
        last_station_change_date?: string;
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
      path: `/characters/${characterId}/clones/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Bulk delete contacts --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/legacy/characters/{character_id}/contacts/` Alternate route: `/v1/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * @tags Contacts
   * @name DeleteCharactersCharacterIdContacts
   * @summary Delete contacts
   * @request DELETE:/characters/{character_id}/contacts/
   * @secure
   */
  deleteCharactersCharacterIdContacts = (
    characterId: number,
    query: {
      /**
       * A list of contacts to delete
       * @maxItems 20
       * @minItems 1
       */
      contact_ids: number[];
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/contacts/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Return contacts of a character --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/` --- This route is cached for up to 300 seconds
   *
   * @tags Contacts
   * @name GetCharactersCharacterIdContacts
   * @summary Get contacts
   * @request GET:/characters/{character_id}/contacts/
   * @secure
   */
  getCharactersCharacterIdContacts = (
    characterId: number,
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
         * get_characters_character_id_contacts_contact_id
         * contact_id integer
         * @format int32
         */
        contact_id: number;
        /**
         * get_characters_character_id_contacts_contact_type
         * contact_type string
         */
        contact_type: "character" | "corporation" | "alliance" | "faction";
        /**
         * get_characters_character_id_contacts_is_blocked
         * Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
         */
        is_blocked?: boolean;
        /**
         * get_characters_character_id_contacts_is_watched
         * Whether this contact is being watched
         */
        is_watched?: boolean;
        /**
         * get_characters_character_id_contacts_label_ids
         * label_ids array
         * @maxItems 63
         */
        label_ids?: number[];
        /**
         * get_characters_character_id_contacts_standing
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
      path: `/characters/${characterId}/contacts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Bulk add contacts with same settings --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * @tags Contacts
   * @name PostCharactersCharacterIdContacts
   * @summary Add contacts
   * @request POST:/characters/{character_id}/contacts/
   * @secure
   */
  postCharactersCharacterIdContacts = (
    characterId: number,
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Add custom labels to the new contact
       * @maxItems 63
       */
      label_ids?: number[];
      /**
       * Standing for the contact
       * @format float
       * @min -10
       * @max 10
       */
      standing: number;
      /** Access token to use if unable to set a header */
      token?: string;
      /**
       * Whether the contact should be watched, note this is only effective on characters
       * @default false
       */
      watched?: boolean;
    },
    contact_ids: number[],
    params: RequestParams = {},
  ) =>
    this.request<
      number[],
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
      | {
          /**
           * post_characters_character_id_contacts_520_error_520
           * Error 520 message
           */
          error?: string;
        }
    >({
      path: `/characters/${characterId}/contacts/`,
      method: "POST",
      query: query,
      body: contact_ids,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Bulk edit contacts with same settings --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * @tags Contacts
   * @name PutCharactersCharacterIdContacts
   * @summary Edit contacts
   * @request PUT:/characters/{character_id}/contacts/
   * @secure
   */
  putCharactersCharacterIdContacts = (
    characterId: number,
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Add custom labels to the contact
       * @maxItems 63
       */
      label_ids?: number[];
      /**
       * Standing for the contact
       * @format float
       * @min -10
       * @max 10
       */
      standing: number;
      /** Access token to use if unable to set a header */
      token?: string;
      /**
       * Whether the contact should be watched, note this is only effective on characters
       * @default false
       */
      watched?: boolean;
    },
    contact_ids: number[],
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/contacts/`,
      method: "PUT",
      query: query,
      body: contact_ids,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Return custom labels for a character's contacts --- Alternate route: `/dev/characters/{character_id}/contacts/labels/` Alternate route: `/legacy/characters/{character_id}/contacts/labels/` Alternate route: `/v1/characters/{character_id}/contacts/labels/` --- This route is cached for up to 300 seconds
   *
   * @tags Contacts
   * @name GetCharactersCharacterIdContactsLabels
   * @summary Get contact labels
   * @request GET:/characters/{character_id}/contacts/labels/
   * @secure
   */
  getCharactersCharacterIdContactsLabels = (
    characterId: number,
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
         * get_characters_character_id_contacts_labels_label_id
         * label_id integer
         * @format int64
         */
        label_id: number;
        /**
         * get_characters_character_id_contacts_labels_label_name
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
      path: `/characters/${characterId}/contacts/labels/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress". --- Alternate route: `/dev/characters/{character_id}/contracts/` Alternate route: `/legacy/characters/{character_id}/contracts/` Alternate route: `/v1/characters/{character_id}/contracts/` --- This route is cached for up to 300 seconds
   *
   * @tags Contracts
   * @name GetCharactersCharacterIdContracts
   * @summary Get contracts
   * @request GET:/characters/{character_id}/contracts/
   * @secure
   */
  getCharactersCharacterIdContracts = (
    characterId: number,
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
         * get_characters_character_id_contracts_acceptor_id
         * Who will accept the contract
         * @format int32
         */
        acceptor_id: number;
        /**
         * get_characters_character_id_contracts_assignee_id
         * ID to whom the contract is assigned, can be alliance, corporation or character ID
         * @format int32
         */
        assignee_id: number;
        /**
         * get_characters_character_id_contracts_availability
         * To whom the contract is available
         */
        availability: "public" | "personal" | "corporation" | "alliance";
        /**
         * get_characters_character_id_contracts_buyout
         * Buyout price (for Auctions only)
         * @format double
         */
        buyout?: number;
        /**
         * get_characters_character_id_contracts_collateral
         * Collateral price (for Couriers only)
         * @format double
         */
        collateral?: number;
        /**
         * get_characters_character_id_contracts_contract_id
         * contract_id integer
         * @format int32
         */
        contract_id: number;
        /**
         * get_characters_character_id_contracts_date_accepted
         * Date of confirmation of contract
         * @format date-time
         */
        date_accepted?: string;
        /**
         * get_characters_character_id_contracts_date_completed
         * Date of completed of contract
         * @format date-time
         */
        date_completed?: string;
        /**
         * get_characters_character_id_contracts_date_expired
         * Expiration date of the contract
         * @format date-time
         */
        date_expired: string;
        /**
         * get_characters_character_id_contracts_date_issued
         * Сreation date of the contract
         * @format date-time
         */
        date_issued: string;
        /**
         * get_characters_character_id_contracts_days_to_complete
         * Number of days to perform the contract
         * @format int32
         */
        days_to_complete?: number;
        /**
         * get_characters_character_id_contracts_end_location_id
         * End location ID (for Couriers contract)
         * @format int64
         */
        end_location_id?: number;
        /**
         * get_characters_character_id_contracts_for_corporation
         * true if the contract was issued on behalf of the issuer's corporation
         */
        for_corporation: boolean;
        /**
         * get_characters_character_id_contracts_issuer_corporation_id
         * Character's corporation ID for the issuer
         * @format int32
         */
        issuer_corporation_id: number;
        /**
         * get_characters_character_id_contracts_issuer_id
         * Character ID for the issuer
         * @format int32
         */
        issuer_id: number;
        /**
         * get_characters_character_id_contracts_price
         * Price of contract (for ItemsExchange and Auctions)
         * @format double
         */
        price?: number;
        /**
         * get_characters_character_id_contracts_reward
         * Remuneration for contract (for Couriers only)
         * @format double
         */
        reward?: number;
        /**
         * get_characters_character_id_contracts_start_location_id
         * Start location ID (for Couriers contract)
         * @format int64
         */
        start_location_id?: number;
        /**
         * get_characters_character_id_contracts_status
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
         * get_characters_character_id_contracts_title
         * Title of the contract
         */
        title?: string;
        /**
         * get_characters_character_id_contracts_type
         * Type of the contract
         */
        type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
        /**
         * get_characters_character_id_contracts_volume
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
      path: `/characters/${characterId}/contracts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Lists bids on a particular auction contract --- Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/` Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/` Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/` --- This route is cached for up to 300 seconds
   *
   * @tags Contracts
   * @name GetCharactersCharacterIdContractsContractIdBids
   * @summary Get contract bids
   * @request GET:/characters/{character_id}/contracts/{contract_id}/bids/
   * @secure
   */
  getCharactersCharacterIdContractsContractIdBids = (
    characterId: number,
    contractId: number,
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
         * get_characters_character_id_contracts_contract_id_bids_amount
         * The amount bid, in ISK
         * @format float
         */
        amount: number;
        /**
         * get_characters_character_id_contracts_contract_id_bids_bid_id
         * Unique ID for the bid
         * @format int32
         */
        bid_id: number;
        /**
         * get_characters_character_id_contracts_contract_id_bids_bidder_id
         * Character ID of the bidder
         * @format int32
         */
        bidder_id: number;
        /**
         * get_characters_character_id_contracts_contract_id_bids_date_bid
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
           * get_characters_character_id_contracts_contract_id_bids_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/contracts/${contractId}/bids/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Lists items of a particular contract --- Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/` Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/` Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/` --- This route is cached for up to 3600 seconds
   *
   * @tags Contracts
   * @name GetCharactersCharacterIdContractsContractIdItems
   * @summary Get contract items
   * @request GET:/characters/{character_id}/contracts/{contract_id}/items/
   * @secure
   */
  getCharactersCharacterIdContractsContractIdItems = (
    characterId: number,
    contractId: number,
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
         * get_characters_character_id_contracts_contract_id_items_is_included
         * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
         */
        is_included: boolean;
        /**
         * get_characters_character_id_contracts_contract_id_items_is_singleton
         * is_singleton boolean
         */
        is_singleton: boolean;
        /**
         * get_characters_character_id_contracts_contract_id_items_quantity
         * Number of items in the stack
         * @format int32
         */
        quantity: number;
        /**
         * get_characters_character_id_contracts_contract_id_items_raw_quantity
         * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
         * @format int32
         */
        raw_quantity?: number;
        /**
         * get_characters_character_id_contracts_contract_id_items_record_id
         * Unique ID for the item
         * @format int64
         */
        record_id: number;
        /**
         * get_characters_character_id_contracts_contract_id_items_type_id
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
           * get_characters_character_id_contracts_contract_id_items_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/contracts/${contractId}/items/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of all the corporations a character has been a member of --- Alternate route: `/dev/characters/{character_id}/corporationhistory/` Alternate route: `/v2/characters/{character_id}/corporationhistory/` --- This route is cached for up to 86400 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdCorporationhistory
   * @summary Get corporation history
   * @request GET:/characters/{character_id}/corporationhistory/
   */
  getCharactersCharacterIdCorporationhistory = (
    characterId: number,
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
         * get_characters_character_id_corporationhistory_corporation_id
         * corporation_id integer
         * @format int32
         */
        corporation_id: number;
        /**
         * get_characters_character_id_corporationhistory_is_deleted
         * True if the corporation has been deleted
         */
        is_deleted?: boolean;
        /**
         * get_characters_character_id_corporationhistory_record_id
         * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
         * @format int32
         */
        record_id: number;
        /**
         * get_characters_character_id_corporationhistory_start_date
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
      path: `/characters/${characterId}/corporationhistory/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost --- Alternate route: `/dev/characters/{character_id}/cspa/` Alternate route: `/v5/characters/{character_id}/cspa/`
   *
   * @tags Character
   * @name PostCharactersCharacterIdCspa
   * @summary Calculate a CSPA charge cost
   * @request POST:/characters/{character_id}/cspa/
   * @secure
   */
  postCharactersCharacterIdCspa = (
    characterId: number,
    characters: number[],
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
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/cspa/`,
      method: "POST",
      query: query,
      body: characters,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return a character's jump activation and fatigue information --- Alternate route: `/dev/characters/{character_id}/fatigue/` Alternate route: `/v2/characters/{character_id}/fatigue/` --- This route is cached for up to 300 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdFatigue
   * @summary Get jump fatigue
   * @request GET:/characters/{character_id}/fatigue/
   * @secure
   */
  getCharactersCharacterIdFatigue = (
    characterId: number,
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
         * get_characters_character_id_fatigue_jump_fatigue_expire_date
         * Character's jump fatigue expiry
         * @format date-time
         */
        jump_fatigue_expire_date?: string;
        /**
         * get_characters_character_id_fatigue_last_jump_date
         * Character's last jump activation
         * @format date-time
         */
        last_jump_date?: string;
        /**
         * get_characters_character_id_fatigue_last_update_date
         * Character's last jump update
         * @format date-time
         */
        last_update_date?: string;
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
      path: `/characters/${characterId}/fatigue/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return fittings of a character --- Alternate route: `/dev/characters/{character_id}/fittings/` Alternate route: `/v2/characters/{character_id}/fittings/` --- This route is cached for up to 300 seconds
   *
   * @tags Fittings
   * @name GetCharactersCharacterIdFittings
   * @summary Get fittings
   * @request GET:/characters/{character_id}/fittings/
   * @secure
   */
  getCharactersCharacterIdFittings = (
    characterId: number,
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
         * get_characters_character_id_fittings_description
         * description string
         */
        description: string;
        /**
         * get_characters_character_id_fittings_fitting_id
         * fitting_id integer
         * @format int32
         */
        fitting_id: number;
        /**
         * get_characters_character_id_fittings_items
         * items array
         * @maxItems 512
         */
        items: {
          /**
           * get_characters_character_id_fittings_flag
           * flag string
           */
          flag:
            | "Cargo"
            | "DroneBay"
            | "FighterBay"
            | "HiSlot0"
            | "HiSlot1"
            | "HiSlot2"
            | "HiSlot3"
            | "HiSlot4"
            | "HiSlot5"
            | "HiSlot6"
            | "HiSlot7"
            | "Invalid"
            | "LoSlot0"
            | "LoSlot1"
            | "LoSlot2"
            | "LoSlot3"
            | "LoSlot4"
            | "LoSlot5"
            | "LoSlot6"
            | "LoSlot7"
            | "MedSlot0"
            | "MedSlot1"
            | "MedSlot2"
            | "MedSlot3"
            | "MedSlot4"
            | "MedSlot5"
            | "MedSlot6"
            | "MedSlot7"
            | "RigSlot0"
            | "RigSlot1"
            | "RigSlot2"
            | "ServiceSlot0"
            | "ServiceSlot1"
            | "ServiceSlot2"
            | "ServiceSlot3"
            | "ServiceSlot4"
            | "ServiceSlot5"
            | "ServiceSlot6"
            | "ServiceSlot7"
            | "SubSystemSlot0"
            | "SubSystemSlot1"
            | "SubSystemSlot2"
            | "SubSystemSlot3";
          /**
           * get_characters_character_id_fittings_quantity
           * quantity integer
           * @format int32
           */
          quantity: number;
          /**
           * get_characters_character_id_fittings_type_id
           * type_id integer
           * @format int32
           */
          type_id: number;
        }[];
        /**
         * get_characters_character_id_fittings_name
         * name string
         */
        name: string;
        /**
         * get_characters_character_id_fittings_ship_type_id
         * ship_type_id integer
         * @format int32
         */
        ship_type_id: number;
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
      path: `/characters/${characterId}/fittings/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Save a new fitting for a character --- Alternate route: `/dev/characters/{character_id}/fittings/` Alternate route: `/legacy/characters/{character_id}/fittings/` Alternate route: `/v1/characters/{character_id}/fittings/` Alternate route: `/v2/characters/{character_id}/fittings/`
   *
   * @tags Fittings
   * @name PostCharactersCharacterIdFittings
   * @summary Create fitting
   * @request POST:/characters/{character_id}/fittings/
   * @secure
   */
  postCharactersCharacterIdFittings = (
    characterId: number,
    fitting: {
      /**
       * post_characters_character_id_fittings_description
       * description string
       * @minLength 0
       * @maxLength 500
       */
      description: string;
      /**
       * post_characters_character_id_fittings_items
       * items array
       * @maxItems 512
       * @minItems 1
       */
      items: {
        /**
         * post_characters_character_id_fittings_flag
         * Fitting location for the item. Entries placed in 'Invalid' will be discarded. If this leaves the fitting with nothing, it will cause an error.
         */
        flag:
          | "Cargo"
          | "DroneBay"
          | "FighterBay"
          | "HiSlot0"
          | "HiSlot1"
          | "HiSlot2"
          | "HiSlot3"
          | "HiSlot4"
          | "HiSlot5"
          | "HiSlot6"
          | "HiSlot7"
          | "Invalid"
          | "LoSlot0"
          | "LoSlot1"
          | "LoSlot2"
          | "LoSlot3"
          | "LoSlot4"
          | "LoSlot5"
          | "LoSlot6"
          | "LoSlot7"
          | "MedSlot0"
          | "MedSlot1"
          | "MedSlot2"
          | "MedSlot3"
          | "MedSlot4"
          | "MedSlot5"
          | "MedSlot6"
          | "MedSlot7"
          | "RigSlot0"
          | "RigSlot1"
          | "RigSlot2"
          | "ServiceSlot0"
          | "ServiceSlot1"
          | "ServiceSlot2"
          | "ServiceSlot3"
          | "ServiceSlot4"
          | "ServiceSlot5"
          | "ServiceSlot6"
          | "ServiceSlot7"
          | "SubSystemSlot0"
          | "SubSystemSlot1"
          | "SubSystemSlot2"
          | "SubSystemSlot3";
        /**
         * post_characters_character_id_fittings_quantity
         * quantity integer
         * @format int32
         */
        quantity: number;
        /**
         * post_characters_character_id_fittings_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      }[];
      /**
       * post_characters_character_id_fittings_name
       * name string
       * @minLength 1
       * @maxLength 50
       */
      name: string;
      /**
       * post_characters_character_id_fittings_ship_type_id
       * ship_type_id integer
       * @format int32
       */
      ship_type_id: number;
    },
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
         * post_characters_character_id_fittings_fitting_id
         * fitting_id integer
         * @format int32
         */
        fitting_id: number;
      },
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/fittings/`,
      method: "POST",
      query: query,
      body: fitting,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a fitting from a character --- Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/` Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/` Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`
   *
   * @tags Fittings
   * @name DeleteCharactersCharacterIdFittingsFittingId
   * @summary Delete fitting
   * @request DELETE:/characters/{character_id}/fittings/{fitting_id}/
   * @secure
   */
  deleteCharactersCharacterIdFittingsFittingId = (
    characterId: number,
    fittingId: number,
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/fittings/${fittingId}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Return the fleet ID the character is in, if any. --- Alternate route: `/dev/characters/{character_id}/fleet/` Alternate route: `/legacy/characters/{character_id}/fleet/` Alternate route: `/v1/characters/{character_id}/fleet/` Alternate route: `/v2/characters/{character_id}/fleet/` --- This route is cached for up to 60 seconds
   *
   * @tags Fleets
   * @name GetCharactersCharacterIdFleet
   * @summary Get character fleet info
   * @request GET:/characters/{character_id}/fleet/
   * @secure
   */
  getCharactersCharacterIdFleet = (
    characterId: number,
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
         * get_characters_character_id_fleet_fleet_boss_id
         * Character ID of the current fleet boss
         * @format int64
         */
        fleet_boss_id: number;
        /**
         * get_characters_character_id_fleet_fleet_id
         * The character's current fleet ID
         * @format int64
         */
        fleet_id: number;
        /**
         * get_characters_character_id_fleet_role
         * Member’s role in fleet
         */
        role:
          | "fleet_commander"
          | "squad_commander"
          | "squad_member"
          | "wing_commander";
        /**
         * get_characters_character_id_fleet_squad_id
         * ID of the squad the member is in. If not applicable, will be set to -1
         * @format int64
         */
        squad_id: number;
        /**
         * get_characters_character_id_fleet_wing_id
         * ID of the wing the member is in. If not applicable, will be set to -1
         * @format int64
         */
        wing_id: number;
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_characters_character_id_fleet_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/fleet/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Statistical overview of a character involved in faction warfare --- Alternate route: `/dev/characters/{character_id}/fw/stats/` Alternate route: `/legacy/characters/{character_id}/fw/stats/` Alternate route: `/v1/characters/{character_id}/fw/stats/` Alternate route: `/v2/characters/{character_id}/fw/stats/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetCharactersCharacterIdFwStats
   * @summary Overview of a character involved in faction warfare
   * @request GET:/characters/{character_id}/fw/stats/
   * @secure
   */
  getCharactersCharacterIdFwStats = (
    characterId: number,
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
         * get_characters_character_id_fw_stats_current_rank
         * The given character's current faction rank
         * @format int32
         * @min 0
         * @max 9
         */
        current_rank?: number;
        /**
         * get_characters_character_id_fw_stats_enlisted_on
         * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
         * @format date-time
         */
        enlisted_on?: string;
        /**
         * get_characters_character_id_fw_stats_faction_id
         * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
         * @format int32
         */
        faction_id?: number;
        /**
         * get_characters_character_id_fw_stats_highest_rank
         * The given character's highest faction rank achieved
         * @format int32
         * @min 0
         * @max 9
         */
        highest_rank?: number;
        /**
         * get_characters_character_id_fw_stats_kills
         * Summary of kills done by the given character against enemy factions
         */
        kills: {
          /**
           * get_characters_character_id_fw_stats_last_week
           * Last week's total number of kills by a given character against enemy factions
           * @format int32
           */
          last_week: number;
          /**
           * get_characters_character_id_fw_stats_total
           * Total number of kills by a given character against enemy factions since the character enlisted
           * @format int32
           */
          total: number;
          /**
           * get_characters_character_id_fw_stats_yesterday
           * Yesterday's total number of kills by a given character against enemy factions
           * @format int32
           */
          yesterday: number;
        };
        /**
         * get_characters_character_id_fw_stats_victory_points
         * Summary of victory points gained by the given character for the enlisted faction
         */
        victory_points: {
          /**
           * get_characters_character_id_fw_stats_victory_points_last_week
           * Last week's victory points gained by the given character
           * @format int32
           */
          last_week: number;
          /**
           * get_characters_character_id_fw_stats_victory_points_total
           * Total victory points gained since the given character enlisted
           * @format int32
           */
          total: number;
          /**
           * get_characters_character_id_fw_stats_victory_points_yesterday
           * Yesterday's victory points gained by the given character
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
      path: `/characters/${characterId}/fw/stats/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return implants on the active clone of a character --- Alternate route: `/dev/characters/{character_id}/implants/` Alternate route: `/legacy/characters/{character_id}/implants/` Alternate route: `/v1/characters/{character_id}/implants/` Alternate route: `/v2/characters/{character_id}/implants/` --- This route is cached for up to 120 seconds
   *
   * @tags Clones
   * @name GetCharactersCharacterIdImplants
   * @summary Get active implants
   * @request GET:/characters/{character_id}/implants/
   * @secure
   */
  getCharactersCharacterIdImplants = (
    characterId: number,
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
      path: `/characters/${characterId}/implants/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List industry jobs placed by a character --- Alternate route: `/dev/characters/{character_id}/industry/jobs/` Alternate route: `/legacy/characters/{character_id}/industry/jobs/` Alternate route: `/v1/characters/{character_id}/industry/jobs/` --- This route is cached for up to 300 seconds
   *
   * @tags Industry
   * @name GetCharactersCharacterIdIndustryJobs
   * @summary List character industry jobs
   * @request GET:/characters/{character_id}/industry/jobs/
   * @secure
   */
  getCharactersCharacterIdIndustryJobs = (
    characterId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days */
      include_completed?: boolean;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_characters_character_id_industry_jobs_activity_id
         * Job activity ID
         * @format int32
         */
        activity_id: number;
        /**
         * get_characters_character_id_industry_jobs_blueprint_id
         * blueprint_id integer
         * @format int64
         */
        blueprint_id: number;
        /**
         * get_characters_character_id_industry_jobs_blueprint_location_id
         * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
         * @format int64
         */
        blueprint_location_id: number;
        /**
         * get_characters_character_id_industry_jobs_blueprint_type_id
         * blueprint_type_id integer
         * @format int32
         */
        blueprint_type_id: number;
        /**
         * get_characters_character_id_industry_jobs_completed_character_id
         * ID of the character which completed this job
         * @format int32
         */
        completed_character_id?: number;
        /**
         * get_characters_character_id_industry_jobs_completed_date
         * Date and time when this job was completed
         * @format date-time
         */
        completed_date?: string;
        /**
         * get_characters_character_id_industry_jobs_cost
         * The sume of job installation fee and industry facility tax
         * @format double
         */
        cost?: number;
        /**
         * get_characters_character_id_industry_jobs_duration
         * Job duration in seconds
         * @format int32
         */
        duration: number;
        /**
         * get_characters_character_id_industry_jobs_end_date
         * Date and time when this job finished
         * @format date-time
         */
        end_date: string;
        /**
         * get_characters_character_id_industry_jobs_facility_id
         * ID of the facility where this job is running
         * @format int64
         */
        facility_id: number;
        /**
         * get_characters_character_id_industry_jobs_installer_id
         * ID of the character which installed this job
         * @format int32
         */
        installer_id: number;
        /**
         * get_characters_character_id_industry_jobs_job_id
         * Unique job ID
         * @format int32
         */
        job_id: number;
        /**
         * get_characters_character_id_industry_jobs_licensed_runs
         * Number of runs blueprint is licensed for
         * @format int32
         */
        licensed_runs?: number;
        /**
         * get_characters_character_id_industry_jobs_output_location_id
         * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
         * @format int64
         */
        output_location_id: number;
        /**
         * get_characters_character_id_industry_jobs_pause_date
         * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
         * @format date-time
         */
        pause_date?: string;
        /**
         * get_characters_character_id_industry_jobs_probability
         * Chance of success for invention
         * @format float
         */
        probability?: number;
        /**
         * get_characters_character_id_industry_jobs_product_type_id
         * Type ID of product (manufactured, copied or invented)
         * @format int32
         */
        product_type_id?: number;
        /**
         * get_characters_character_id_industry_jobs_runs
         * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
         * @format int32
         */
        runs: number;
        /**
         * get_characters_character_id_industry_jobs_start_date
         * Date and time when this job started
         * @format date-time
         */
        start_date: string;
        /**
         * get_characters_character_id_industry_jobs_station_id
         * ID of the station where industry facility is located
         * @format int64
         */
        station_id: number;
        /**
         * get_characters_character_id_industry_jobs_status
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
         * get_characters_character_id_industry_jobs_successful_runs
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
      path: `/characters/${characterId}/industry/jobs/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of a character's kills and losses going back 90 days --- Alternate route: `/dev/characters/{character_id}/killmails/recent/` Alternate route: `/legacy/characters/{character_id}/killmails/recent/` Alternate route: `/v1/characters/{character_id}/killmails/recent/` --- This route is cached for up to 300 seconds
   *
   * @tags Killmails
   * @name GetCharactersCharacterIdKillmailsRecent
   * @summary Get a character's recent kills and losses
   * @request GET:/characters/{character_id}/killmails/recent/
   * @secure
   */
  getCharactersCharacterIdKillmailsRecent = (
    characterId: number,
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
         * get_characters_character_id_killmails_recent_killmail_hash
         * A hash of this killmail
         */
        killmail_hash: string;
        /**
         * get_characters_character_id_killmails_recent_killmail_id
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
      path: `/characters/${characterId}/killmails/recent/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable --- Alternate route: `/dev/characters/{character_id}/location/` Alternate route: `/legacy/characters/{character_id}/location/` Alternate route: `/v1/characters/{character_id}/location/` Alternate route: `/v2/characters/{character_id}/location/` --- This route is cached for up to 5 seconds
   *
   * @tags Location
   * @name GetCharactersCharacterIdLocation
   * @summary Get character location
   * @request GET:/characters/{character_id}/location/
   * @secure
   */
  getCharactersCharacterIdLocation = (
    characterId: number,
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
         * get_characters_character_id_location_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_characters_character_id_location_station_id
         * station_id integer
         * @format int32
         */
        station_id?: number;
        /**
         * get_characters_character_id_location_structure_id
         * structure_id integer
         * @format int64
         */
        structure_id?: number;
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
      path: `/characters/${characterId}/location/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of loyalty points for all corporations the character has worked for --- Alternate route: `/dev/characters/{character_id}/loyalty/points/` Alternate route: `/legacy/characters/{character_id}/loyalty/points/` Alternate route: `/v1/characters/{character_id}/loyalty/points/` --- This route is cached for up to 3600 seconds
   *
   * @tags Loyalty
   * @name GetCharactersCharacterIdLoyaltyPoints
   * @summary Get loyalty points
   * @request GET:/characters/{character_id}/loyalty/points/
   * @secure
   */
  getCharactersCharacterIdLoyaltyPoints = (
    characterId: number,
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
         * get_characters_character_id_loyalty_points_corporation_id
         * corporation_id integer
         * @format int32
         */
        corporation_id: number;
        /**
         * get_characters_character_id_loyalty_points_loyalty_points
         * loyalty_points integer
         * @format int32
         */
        loyalty_points: number;
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
      path: `/characters/${characterId}/loyalty/points/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards --- Alternate route: `/dev/characters/{character_id}/mail/` Alternate route: `/legacy/characters/{character_id}/mail/` Alternate route: `/v1/characters/{character_id}/mail/` --- This route is cached for up to 30 seconds
   *
   * @tags Mail
   * @name GetCharactersCharacterIdMail
   * @summary Return mail headers
   * @request GET:/characters/{character_id}/mail/
   * @secure
   */
  getCharactersCharacterIdMail = (
    characterId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Fetch only mails that match one or more of the given labels
       * @maxItems 25
       * @minItems 1
       * @uniqueItems true
       */
      labels?: number[];
      /**
       * List only mail with an ID lower than the given ID, if present
       * @format int32
       */
      last_mail_id?: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_characters_character_id_mail_from
         * From whom the mail was sent
         * @format int32
         */
        from?: number;
        /**
         * get_characters_character_id_mail_is_read
         * is_read boolean
         */
        is_read?: boolean;
        /**
         * get_characters_character_id_mail_labels
         * labels array
         * @min 0
         * @maxItems 25
         * @uniqueItems true
         */
        labels?: number[];
        /**
         * get_characters_character_id_mail_mail_id
         * mail_id integer
         * @format int32
         */
        mail_id?: number;
        /**
         * get_characters_character_id_mail_recipients
         * Recipients of the mail
         * @maxItems 52
         * @minItems 0
         * @uniqueItems true
         */
        recipients?: {
          /**
           * get_characters_character_id_mail_recipient_id
           * recipient_id integer
           * @format int32
           */
          recipient_id: number;
          /**
           * get_characters_character_id_mail_recipient_type
           * recipient_type string
           */
          recipient_type:
            | "alliance"
            | "character"
            | "corporation"
            | "mailing_list";
        }[];
        /**
         * get_characters_character_id_mail_subject
         * Mail subject
         */
        subject?: string;
        /**
         * get_characters_character_id_mail_timestamp
         * When the mail was sent
         * @format date-time
         */
        timestamp?: string;
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
      path: `/characters/${characterId}/mail/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create and send a new mail --- Alternate route: `/dev/characters/{character_id}/mail/` Alternate route: `/legacy/characters/{character_id}/mail/` Alternate route: `/v1/characters/{character_id}/mail/`
   *
   * @tags Mail
   * @name PostCharactersCharacterIdMail
   * @summary Send a new mail
   * @request POST:/characters/{character_id}/mail/
   * @secure
   */
  postCharactersCharacterIdMail = (
    characterId: number,
    mail: {
      /**
       * post_characters_character_id_mail_approved_cost
       * approved_cost integer
       * @format int64
       * @default 0
       */
      approved_cost?: number;
      /**
       * post_characters_character_id_mail_body
       * body string
       * @maxLength 10000
       */
      body: string;
      /**
       * post_characters_character_id_mail_recipients
       * recipients array
       * @maxItems 50
       * @minItems 1
       */
      recipients: {
        /**
         * post_characters_character_id_mail_recipient_id
         * recipient_id integer
         * @format int32
         */
        recipient_id: number;
        /**
         * post_characters_character_id_mail_recipient_type
         * recipient_type string
         */
        recipient_type:
          | "alliance"
          | "character"
          | "corporation"
          | "mailing_list";
      }[];
      /**
       * post_characters_character_id_mail_subject
       * subject string
       * @maxLength 1000
       */
      subject: string;
    },
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
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
      | {
          /**
           * post_characters_character_id_mail_520_error_520
           * Error 520 message
           */
          error?: string;
        }
    >({
      path: `/characters/${characterId}/mail/`,
      method: "POST",
      query: query,
      body: mail,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of the users mail labels, unread counts for each label and a total unread count. --- Alternate route: `/dev/characters/{character_id}/mail/labels/` Alternate route: `/v3/characters/{character_id}/mail/labels/` --- This route is cached for up to 30 seconds
   *
   * @tags Mail
   * @name GetCharactersCharacterIdMailLabels
   * @summary Get mail labels and unread counts
   * @request GET:/characters/{character_id}/mail/labels/
   * @secure
   */
  getCharactersCharacterIdMailLabels = (
    characterId: number,
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
         * get_characters_character_id_mail_labels_labels
         * labels array
         * @maxItems 30
         */
        labels?: {
          /**
           * get_characters_character_id_mail_labels_color
           * color string
           * @default "#ffffff"
           */
          color?:
            | "#0000fe"
            | "#006634"
            | "#0099ff"
            | "#00ff33"
            | "#01ffff"
            | "#349800"
            | "#660066"
            | "#666666"
            | "#999999"
            | "#99ffff"
            | "#9a0000"
            | "#ccff9a"
            | "#e6e6e6"
            | "#fe0000"
            | "#ff6600"
            | "#ffff01"
            | "#ffffcd"
            | "#ffffff";
          /**
           * get_characters_character_id_mail_labels_label_id
           * label_id integer
           * @format int32
           * @min 0
           */
          label_id?: number;
          /**
           * get_characters_character_id_mail_labels_name
           * name string
           * @maxLength 40
           */
          name?: string;
          /**
           * get_characters_character_id_mail_labels_unread_count
           * unread_count integer
           * @format int32
           * @min 0
           */
          unread_count?: number;
        }[];
        /**
         * get_characters_character_id_mail_labels_total_unread_count
         * total_unread_count integer
         * @format int32
         * @min 0
         */
        total_unread_count?: number;
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
      path: `/characters/${characterId}/mail/labels/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create a mail label --- Alternate route: `/dev/characters/{character_id}/mail/labels/` Alternate route: `/legacy/characters/{character_id}/mail/labels/` Alternate route: `/v2/characters/{character_id}/mail/labels/`
   *
   * @tags Mail
   * @name PostCharactersCharacterIdMailLabels
   * @summary Create a mail label
   * @request POST:/characters/{character_id}/mail/labels/
   * @secure
   */
  postCharactersCharacterIdMailLabels = (
    characterId: number,
    label: {
      /**
       * post_characters_character_id_mail_labels_color
       * Hexadecimal string representing label color, in RGB format
       * @default "#ffffff"
       */
      color?:
        | "#0000fe"
        | "#006634"
        | "#0099ff"
        | "#00ff33"
        | "#01ffff"
        | "#349800"
        | "#660066"
        | "#666666"
        | "#999999"
        | "#99ffff"
        | "#9a0000"
        | "#ccff9a"
        | "#e6e6e6"
        | "#fe0000"
        | "#ff6600"
        | "#ffff01"
        | "#ffffcd"
        | "#ffffff";
      /**
       * post_characters_character_id_mail_labels_name
       * name string
       * @minLength 1
       * @maxLength 40
       */
      name: string;
    },
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
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/mail/labels/`,
      method: "POST",
      query: query,
      body: label,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a mail label --- Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/` Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/` Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`
   *
   * @tags Mail
   * @name DeleteCharactersCharacterIdMailLabelsLabelId
   * @summary Delete a mail label
   * @request DELETE:/characters/{character_id}/mail/labels/{label_id}/
   * @secure
   */
  deleteCharactersCharacterIdMailLabelsLabelId = (
    characterId: number,
    labelId: number,
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | {
          /**
           * delete_characters_character_id_mail_labels_label_id_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/mail/labels/${labelId}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Return all mailing lists that the character is subscribed to --- Alternate route: `/dev/characters/{character_id}/mail/lists/` Alternate route: `/legacy/characters/{character_id}/mail/lists/` Alternate route: `/v1/characters/{character_id}/mail/lists/` --- This route is cached for up to 120 seconds
   *
   * @tags Mail
   * @name GetCharactersCharacterIdMailLists
   * @summary Return mailing list subscriptions
   * @request GET:/characters/{character_id}/mail/lists/
   * @secure
   */
  getCharactersCharacterIdMailLists = (
    characterId: number,
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
         * get_characters_character_id_mail_lists_mailing_list_id
         * Mailing list ID
         * @format int32
         */
        mailing_list_id: number;
        /**
         * get_characters_character_id_mail_lists_name
         * name string
         */
        name: string;
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
      path: `/characters/${characterId}/mail/lists/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a mail --- Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/` Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/` Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
   *
   * @tags Mail
   * @name DeleteCharactersCharacterIdMailMailId
   * @summary Delete a mail
   * @request DELETE:/characters/{character_id}/mail/{mail_id}/
   * @secure
   */
  deleteCharactersCharacterIdMailMailId = (
    characterId: number,
    mailId: number,
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/mail/${mailId}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Return the contents of an EVE mail --- Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/` Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/` Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/` --- This route is cached for up to 30 seconds
   *
   * @tags Mail
   * @name GetCharactersCharacterIdMailMailId
   * @summary Return a mail
   * @request GET:/characters/{character_id}/mail/{mail_id}/
   * @secure
   */
  getCharactersCharacterIdMailMailId = (
    characterId: number,
    mailId: number,
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
         * get_characters_character_id_mail_mail_id_body
         * Mail's body
         */
        body?: string;
        /**
         * get_characters_character_id_mail_mail_id_from
         * From whom the mail was sent
         * @format int32
         */
        from?: number;
        /**
         * get_characters_character_id_mail_mail_id_labels
         * Labels attached to the mail
         * @maxItems 25
         */
        labels?: number[];
        /**
         * get_characters_character_id_mail_mail_id_read
         * Whether the mail is flagged as read
         */
        read?: boolean;
        /**
         * get_characters_character_id_mail_mail_id_recipients
         * Recipients of the mail
         * @maxItems 52
         * @minItems 0
         * @uniqueItems true
         */
        recipients?: {
          /**
           * get_characters_character_id_mail_mail_id_recipient_id
           * recipient_id integer
           * @format int32
           */
          recipient_id: number;
          /**
           * get_characters_character_id_mail_mail_id_recipient_type
           * recipient_type string
           */
          recipient_type:
            | "alliance"
            | "character"
            | "corporation"
            | "mailing_list";
        }[];
        /**
         * get_characters_character_id_mail_mail_id_subject
         * Mail subject
         */
        subject?: string;
        /**
         * get_characters_character_id_mail_mail_id_timestamp
         * When the mail was sent
         * @format date-time
         */
        timestamp?: string;
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_characters_character_id_mail_mail_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/mail/${mailId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update metadata about a mail --- Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/` Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/` Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
   *
   * @tags Mail
   * @name PutCharactersCharacterIdMailMailId
   * @summary Update metadata about a mail
   * @request PUT:/characters/{character_id}/mail/{mail_id}/
   * @secure
   */
  putCharactersCharacterIdMailMailId = (
    characterId: number,
    mailId: number,
    contents: {
      /**
       * put_characters_character_id_mail_mail_id_labels
       * Labels to assign to the mail. Pre-existing labels are unassigned.
       * @maxItems 25
       */
      labels?: number[];
      /**
       * put_characters_character_id_mail_mail_id_read
       * Whether the mail is flagged as read
       */
      read?: boolean;
    },
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/mail/${mailId}/`,
      method: "PUT",
      query: query,
      body: contents,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Return a list of medals the character has --- Alternate route: `/dev/characters/{character_id}/medals/` Alternate route: `/v2/characters/{character_id}/medals/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdMedals
   * @summary Get medals
   * @request GET:/characters/{character_id}/medals/
   * @secure
   */
  getCharactersCharacterIdMedals = (
    characterId: number,
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
         * get_characters_character_id_medals_corporation_id
         * corporation_id integer
         * @format int32
         */
        corporation_id: number;
        /**
         * get_characters_character_id_medals_date
         * date string
         * @format date-time
         */
        date: string;
        /**
         * get_characters_character_id_medals_description
         * description string
         */
        description: string;
        /**
         * get_characters_character_id_medals_graphics
         * graphics array
         * @maxItems 9
         * @minItems 3
         */
        graphics: {
          /**
           * get_characters_character_id_medals_color
           * color integer
           * @format int32
           */
          color?: number;
          /**
           * get_characters_character_id_medals_graphic_graphic
           * graphic string
           */
          graphic: string;
          /**
           * get_characters_character_id_medals_layer
           * layer integer
           * @format int32
           */
          layer: number;
          /**
           * get_characters_character_id_medals_part
           * part integer
           * @format int32
           */
          part: number;
        }[];
        /**
         * get_characters_character_id_medals_issuer_id
         * issuer_id integer
         * @format int32
         */
        issuer_id: number;
        /**
         * get_characters_character_id_medals_medal_id
         * medal_id integer
         * @format int32
         */
        medal_id: number;
        /**
         * get_characters_character_id_medals_reason
         * reason string
         */
        reason: string;
        /**
         * get_characters_character_id_medals_status
         * status string
         */
        status: "public" | "private";
        /**
         * get_characters_character_id_medals_title
         * title string
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
      path: `/characters/${characterId}/medals/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Paginated record of all mining done by a character for the past 30 days --- Alternate route: `/dev/characters/{character_id}/mining/` Alternate route: `/legacy/characters/{character_id}/mining/` Alternate route: `/v1/characters/{character_id}/mining/` --- This route is cached for up to 600 seconds
   *
   * @tags Industry
   * @name GetCharactersCharacterIdMining
   * @summary Character mining ledger
   * @request GET:/characters/{character_id}/mining/
   * @secure
   */
  getCharactersCharacterIdMining = (
    characterId: number,
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
         * get_characters_character_id_mining_date
         * date string
         * @format date
         */
        date: string;
        /**
         * get_characters_character_id_mining_quantity
         * quantity integer
         * @format int64
         */
        quantity: number;
        /**
         * get_characters_character_id_mining_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_characters_character_id_mining_type_id
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
      path: `/characters/${characterId}/mining/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return character notifications --- Alternate route: `/dev/characters/{character_id}/notifications/` Alternate route: `/legacy/characters/{character_id}/notifications/` Alternate route: `/v4/characters/{character_id}/notifications/` Alternate route: `/v5/characters/{character_id}/notifications/` Alternate route: `/v6/characters/{character_id}/notifications/` --- This route is cached for up to 600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdNotifications
   * @summary Get character notifications
   * @request GET:/characters/{character_id}/notifications/
   * @secure
   */
  getCharactersCharacterIdNotifications = (
    characterId: number,
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
         * get_characters_character_id_notifications_is_read
         * is_read boolean
         */
        is_read?: boolean;
        /**
         * get_characters_character_id_notifications_notification_id
         * notification_id integer
         * @format int64
         */
        notification_id: number;
        /**
         * get_characters_character_id_notifications_sender_id
         * sender_id integer
         * @format int32
         */
        sender_id: number;
        /**
         * get_characters_character_id_notifications_sender_type
         * sender_type string
         */
        sender_type:
          | "character"
          | "corporation"
          | "alliance"
          | "faction"
          | "other";
        /**
         * get_characters_character_id_notifications_text
         * text string
         */
        text?: string;
        /**
         * get_characters_character_id_notifications_timestamp
         * timestamp string
         * @format date-time
         */
        timestamp: string;
        /**
         * get_characters_character_id_notifications_type
         * type string
         */
        type:
          | "AcceptedAlly"
          | "AcceptedSurrender"
          | "AgentRetiredTrigravian"
          | "AllAnchoringMsg"
          | "AllMaintenanceBillMsg"
          | "AllStrucInvulnerableMsg"
          | "AllStructVulnerableMsg"
          | "AllWarCorpJoinedAllianceMsg"
          | "AllWarDeclaredMsg"
          | "AllWarInvalidatedMsg"
          | "AllWarRetractedMsg"
          | "AllWarSurrenderMsg"
          | "AllianceCapitalChanged"
          | "AllianceWarDeclaredV2"
          | "AllyContractCancelled"
          | "AllyJoinedWarAggressorMsg"
          | "AllyJoinedWarAllyMsg"
          | "AllyJoinedWarDefenderMsg"
          | "BattlePunishFriendlyFire"
          | "BillOutOfMoneyMsg"
          | "BillPaidCorpAllMsg"
          | "BountyClaimMsg"
          | "BountyESSShared"
          | "BountyESSTaken"
          | "BountyPlacedAlliance"
          | "BountyPlacedChar"
          | "BountyPlacedCorp"
          | "BountyYourBountyClaimed"
          | "BuddyConnectContactAdd"
          | "CharAppAcceptMsg"
          | "CharAppRejectMsg"
          | "CharAppWithdrawMsg"
          | "CharLeftCorpMsg"
          | "CharMedalMsg"
          | "CharTerminationMsg"
          | "CloneActivationMsg"
          | "CloneActivationMsg2"
          | "CloneMovedMsg"
          | "CloneRevokedMsg1"
          | "CloneRevokedMsg2"
          | "CombatOperationFinished"
          | "ContactAdd"
          | "ContactEdit"
          | "ContainerPasswordMsg"
          | "ContractRegionChangedToPochven"
          | "CorpAllBillMsg"
          | "CorpAppAcceptMsg"
          | "CorpAppInvitedMsg"
          | "CorpAppNewMsg"
          | "CorpAppRejectCustomMsg"
          | "CorpAppRejectMsg"
          | "CorpBecameWarEligible"
          | "CorpDividendMsg"
          | "CorpFriendlyFireDisableTimerCompleted"
          | "CorpFriendlyFireDisableTimerStarted"
          | "CorpFriendlyFireEnableTimerCompleted"
          | "CorpFriendlyFireEnableTimerStarted"
          | "CorpKicked"
          | "CorpLiquidationMsg"
          | "CorpNewCEOMsg"
          | "CorpNewsMsg"
          | "CorpNoLongerWarEligible"
          | "CorpOfficeExpirationMsg"
          | "CorpStructLostMsg"
          | "CorpTaxChangeMsg"
          | "CorpVoteCEORevokedMsg"
          | "CorpVoteMsg"
          | "CorpWarDeclaredMsg"
          | "CorpWarDeclaredV2"
          | "CorpWarFightingLegalMsg"
          | "CorpWarInvalidatedMsg"
          | "CorpWarRetractedMsg"
          | "CorpWarSurrenderMsg"
          | "CorporationGoalClosed"
          | "CorporationGoalCompleted"
          | "CorporationGoalCreated"
          | "CorporationGoalExpired"
          | "CorporationGoalLimitReached"
          | "CorporationGoalNameChange"
          | "CorporationLeft"
          | "CustomsMsg"
          | "DailyItemRewardAutoClaimed"
          | "DeclareWar"
          | "DistrictAttacked"
          | "DustAppAcceptedMsg"
          | "ESSMainBankLink"
          | "EntosisCaptureStarted"
          | "ExpertSystemExpired"
          | "ExpertSystemExpiryImminent"
          | "FWAllianceKickMsg"
          | "FWAllianceWarningMsg"
          | "FWCharKickMsg"
          | "FWCharRankGainMsg"
          | "FWCharRankLossMsg"
          | "FWCharWarningMsg"
          | "FWCorpJoinMsg"
          | "FWCorpKickMsg"
          | "FWCorpLeaveMsg"
          | "FWCorpWarningMsg"
          | "FacWarCorpJoinRequestMsg"
          | "FacWarCorpJoinWithdrawMsg"
          | "FacWarCorpLeaveRequestMsg"
          | "FacWarCorpLeaveWithdrawMsg"
          | "FacWarLPDisqualifiedEvent"
          | "FacWarLPDisqualifiedKill"
          | "FacWarLPPayoutEvent"
          | "FacWarLPPayoutKill"
          | "GameTimeAdded"
          | "GameTimeReceived"
          | "GameTimeSent"
          | "GiftReceived"
          | "IHubDestroyedByBillFailure"
          | "IncursionCompletedMsg"
          | "IndustryOperationFinished"
          | "IndustryTeamAuctionLost"
          | "IndustryTeamAuctionWon"
          | "InfrastructureHubBillAboutToExpire"
          | "InsuranceExpirationMsg"
          | "InsuranceFirstShipMsg"
          | "InsuranceInvalidatedMsg"
          | "InsuranceIssuedMsg"
          | "InsurancePayoutMsg"
          | "InvasionCompletedMsg"
          | "InvasionSystemLogin"
          | "InvasionSystemStart"
          | "JumpCloneDeletedMsg1"
          | "JumpCloneDeletedMsg2"
          | "KillReportFinalBlow"
          | "KillReportVictim"
          | "KillRightAvailable"
          | "KillRightAvailableOpen"
          | "KillRightEarned"
          | "KillRightUnavailable"
          | "KillRightUnavailableOpen"
          | "KillRightUsed"
          | "LPAutoRedeemed"
          | "LocateCharMsg"
          | "MadeWarMutual"
          | "MercOfferRetractedMsg"
          | "MercOfferedNegotiationMsg"
          | "MercenaryDenAttacked"
          | "MercenaryDenNewMTO"
          | "MercenaryDenReinforced"
          | "MissionCanceledTriglavian"
          | "MissionOfferExpirationMsg"
          | "MissionTimeoutMsg"
          | "MoonminingAutomaticFracture"
          | "MoonminingExtractionCancelled"
          | "MoonminingExtractionFinished"
          | "MoonminingExtractionStarted"
          | "MoonminingLaserFired"
          | "MutualWarExpired"
          | "MutualWarInviteAccepted"
          | "MutualWarInviteRejected"
          | "MutualWarInviteSent"
          | "NPCStandingsGained"
          | "NPCStandingsLost"
          | "OfferToAllyRetracted"
          | "OfferedSurrender"
          | "OfferedToAlly"
          | "OfficeLeaseCanceledInsufficientStandings"
          | "OldLscMessages"
          | "OperationFinished"
          | "OrbitalAttacked"
          | "OrbitalReinforced"
          | "OwnershipTransferred"
          | "RaffleCreated"
          | "RaffleExpired"
          | "RaffleFinished"
          | "ReimbursementMsg"
          | "ResearchMissionAvailableMsg"
          | "RetractsWar"
          | "SPAutoRedeemed"
          | "SeasonalChallengeCompleted"
          | "SkinSequencingCompleted"
          | "SkyhookDeployed"
          | "SkyhookDestroyed"
          | "SkyhookLostShields"
          | "SkyhookOnline"
          | "SkyhookUnderAttack"
          | "SovAllClaimAquiredMsg"
          | "SovAllClaimLostMsg"
          | "SovCommandNodeEventStarted"
          | "SovCorpBillLateMsg"
          | "SovCorpClaimFailMsg"
          | "SovDisruptorMsg"
          | "SovStationEnteredFreeport"
          | "SovStructureDestroyed"
          | "SovStructureReinforced"
          | "SovStructureSelfDestructCancel"
          | "SovStructureSelfDestructFinished"
          | "SovStructureSelfDestructRequested"
          | "SovereigntyIHDamageMsg"
          | "SovereigntySBUDamageMsg"
          | "SovereigntyTCUDamageMsg"
          | "StationAggressionMsg1"
          | "StationAggressionMsg2"
          | "StationConquerMsg"
          | "StationServiceDisabled"
          | "StationServiceEnabled"
          | "StationStateChangeMsg"
          | "StoryLineMissionAvailableMsg"
          | "StructureAnchoring"
          | "StructureCourierContractChanged"
          | "StructureDestroyed"
          | "StructureFuelAlert"
          | "StructureImpendingAbandonmentAssetsAtRisk"
          | "StructureItemsDelivered"
          | "StructureItemsMovedToSafety"
          | "StructureLostArmor"
          | "StructureLostShields"
          | "StructureLowReagentsAlert"
          | "StructureNoReagentsAlert"
          | "StructureOnline"
          | "StructurePaintPurchased"
          | "StructureServicesOffline"
          | "StructureUnanchoring"
          | "StructureUnderAttack"
          | "StructureWentHighPower"
          | "StructureWentLowPower"
          | "StructuresJobsCancelled"
          | "StructuresJobsPaused"
          | "StructuresReinforcementChanged"
          | "TowerAlertMsg"
          | "TowerResourceAlertMsg"
          | "TransactionReversalMsg"
          | "TutorialMsg"
          | "WarAdopted "
          | "WarAllyInherited"
          | "WarAllyOfferDeclinedMsg"
          | "WarConcordInvalidates"
          | "WarDeclared"
          | "WarEndedHqSecurityDrop"
          | "WarHQRemovedFromSpace"
          | "WarInherited"
          | "WarInvalid"
          | "WarRetracted"
          | "WarRetractedByConcord"
          | "WarSurrenderDeclinedMsg"
          | "WarSurrenderOfferMsg";
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
      path: `/characters/${characterId}/notifications/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return notifications about having been added to someone's contact list --- Alternate route: `/dev/characters/{character_id}/notifications/contacts/` Alternate route: `/v2/characters/{character_id}/notifications/contacts/` --- This route is cached for up to 600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdNotificationsContacts
   * @summary Get new contact notifications
   * @request GET:/characters/{character_id}/notifications/contacts/
   * @secure
   */
  getCharactersCharacterIdNotificationsContacts = (
    characterId: number,
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
         * get_characters_character_id_notifications_contacts_message
         * message string
         */
        message: string;
        /**
         * get_characters_character_id_notifications_contacts_notification_id
         * notification_id integer
         * @format int64
         */
        notification_id: number;
        /**
         * get_characters_character_id_notifications_contacts_send_date
         * send_date string
         * @format date-time
         */
        send_date: string;
        /**
         * get_characters_character_id_notifications_contacts_sender_character_id
         * sender_character_id integer
         * @format int32
         */
        sender_character_id: number;
        /**
         * get_characters_character_id_notifications_contacts_standing_level
         * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
         * @format float
         */
        standing_level: number;
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
      path: `/characters/${characterId}/notifications/contacts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Checks if the character is currently online --- Alternate route: `/dev/characters/{character_id}/online/` Alternate route: `/v2/characters/{character_id}/online/` Alternate route: `/v3/characters/{character_id}/online/` --- This route is cached for up to 60 seconds
   *
   * @tags Location
   * @name GetCharactersCharacterIdOnline
   * @summary Get character online
   * @request GET:/characters/{character_id}/online/
   * @secure
   */
  getCharactersCharacterIdOnline = (
    characterId: number,
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
         * get_characters_character_id_online_last_login
         * Timestamp of the last login
         * @format date-time
         */
        last_login?: string;
        /**
         * get_characters_character_id_online_last_logout
         * Timestamp of the last logout
         * @format date-time
         */
        last_logout?: string;
        /**
         * get_characters_character_id_online_logins
         * Total number of times the character has logged in
         * @format int32
         */
        logins?: number;
        /**
         * get_characters_character_id_online_online
         * If the character is online
         */
        online: boolean;
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
      path: `/characters/${characterId}/online/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List open market orders placed by a character --- Alternate route: `/dev/characters/{character_id}/orders/` Alternate route: `/v2/characters/{character_id}/orders/` --- This route is cached for up to 1200 seconds
   *
   * @tags Market
   * @name GetCharactersCharacterIdOrders
   * @summary List open orders from a character
   * @request GET:/characters/{character_id}/orders/
   * @secure
   */
  getCharactersCharacterIdOrders = (
    characterId: number,
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
         * get_characters_character_id_orders_duration
         * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
         * @format int32
         */
        duration: number;
        /**
         * get_characters_character_id_orders_escrow
         * For buy orders, the amount of ISK in escrow
         * @format double
         */
        escrow?: number;
        /**
         * get_characters_character_id_orders_is_buy_order
         * True if the order is a bid (buy) order
         */
        is_buy_order?: boolean;
        /**
         * get_characters_character_id_orders_is_corporation
         * Signifies whether the buy/sell order was placed on behalf of a corporation.
         */
        is_corporation: boolean;
        /**
         * get_characters_character_id_orders_issued
         * Date and time when this order was issued
         * @format date-time
         */
        issued: string;
        /**
         * get_characters_character_id_orders_location_id
         * ID of the location where order was placed
         * @format int64
         */
        location_id: number;
        /**
         * get_characters_character_id_orders_min_volume
         * For buy orders, the minimum quantity that will be accepted in a matching sell order
         * @format int32
         */
        min_volume?: number;
        /**
         * get_characters_character_id_orders_order_id
         * Unique order ID
         * @format int64
         */
        order_id: number;
        /**
         * get_characters_character_id_orders_price
         * Cost per unit for this order
         * @format double
         */
        price: number;
        /**
         * get_characters_character_id_orders_range
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
         * get_characters_character_id_orders_region_id
         * ID of the region where order was placed
         * @format int32
         */
        region_id: number;
        /**
         * get_characters_character_id_orders_type_id
         * The type ID of the item transacted in this order
         * @format int32
         */
        type_id: number;
        /**
         * get_characters_character_id_orders_volume_remain
         * Quantity of items still required or offered
         * @format int32
         */
        volume_remain: number;
        /**
         * get_characters_character_id_orders_volume_total
         * Quantity of items required or offered at time order was placed
         * @format int32
         */
        volume_total: number;
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
      path: `/characters/${characterId}/orders/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List cancelled and expired market orders placed by a character up to 90 days in the past. --- Alternate route: `/dev/characters/{character_id}/orders/history/` Alternate route: `/legacy/characters/{character_id}/orders/history/` Alternate route: `/v1/characters/{character_id}/orders/history/` --- This route is cached for up to 3600 seconds
   *
   * @tags Market
   * @name GetCharactersCharacterIdOrdersHistory
   * @summary List historical orders by a character
   * @request GET:/characters/{character_id}/orders/history/
   * @secure
   */
  getCharactersCharacterIdOrdersHistory = (
    characterId: number,
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
         * get_characters_character_id_orders_history_duration
         * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
         * @format int32
         */
        duration: number;
        /**
         * get_characters_character_id_orders_history_escrow
         * For buy orders, the amount of ISK in escrow
         * @format double
         */
        escrow?: number;
        /**
         * get_characters_character_id_orders_history_is_buy_order
         * True if the order is a bid (buy) order
         */
        is_buy_order?: boolean;
        /**
         * get_characters_character_id_orders_history_is_corporation
         * Signifies whether the buy/sell order was placed on behalf of a corporation.
         */
        is_corporation: boolean;
        /**
         * get_characters_character_id_orders_history_issued
         * Date and time when this order was issued
         * @format date-time
         */
        issued: string;
        /**
         * get_characters_character_id_orders_history_location_id
         * ID of the location where order was placed
         * @format int64
         */
        location_id: number;
        /**
         * get_characters_character_id_orders_history_min_volume
         * For buy orders, the minimum quantity that will be accepted in a matching sell order
         * @format int32
         */
        min_volume?: number;
        /**
         * get_characters_character_id_orders_history_order_id
         * Unique order ID
         * @format int64
         */
        order_id: number;
        /**
         * get_characters_character_id_orders_history_price
         * Cost per unit for this order
         * @format double
         */
        price: number;
        /**
         * get_characters_character_id_orders_history_range
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
         * get_characters_character_id_orders_history_region_id
         * ID of the region where order was placed
         * @format int32
         */
        region_id: number;
        /**
         * get_characters_character_id_orders_history_state
         * Current order state
         */
        state: "cancelled" | "expired";
        /**
         * get_characters_character_id_orders_history_type_id
         * The type ID of the item transacted in this order
         * @format int32
         */
        type_id: number;
        /**
         * get_characters_character_id_orders_history_volume_remain
         * Quantity of items still required or offered
         * @format int32
         */
        volume_remain: number;
        /**
         * get_characters_character_id_orders_history_volume_total
         * Quantity of items required or offered at time order was placed
         * @format int32
         */
        volume_total: number;
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
      path: `/characters/${characterId}/orders/history/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of all planetary colonies owned by a character. --- Alternate route: `/dev/characters/{character_id}/planets/` Alternate route: `/legacy/characters/{character_id}/planets/` Alternate route: `/v1/characters/{character_id}/planets/` --- This route is cached for up to 600 seconds
   *
   * @tags Planetary Interaction
   * @name GetCharactersCharacterIdPlanets
   * @summary Get colonies
   * @request GET:/characters/{character_id}/planets/
   * @secure
   */
  getCharactersCharacterIdPlanets = (
    characterId: number,
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
         * get_characters_character_id_planets_last_update
         * last_update string
         * @format date-time
         */
        last_update: string;
        /**
         * get_characters_character_id_planets_num_pins
         * num_pins integer
         * @format int32
         * @min 1
         */
        num_pins: number;
        /**
         * get_characters_character_id_planets_owner_id
         * owner_id integer
         * @format int32
         */
        owner_id: number;
        /**
         * get_characters_character_id_planets_planet_id
         * planet_id integer
         * @format int32
         */
        planet_id: number;
        /**
         * get_characters_character_id_planets_planet_type
         * planet_type string
         */
        planet_type:
          | "temperate"
          | "barren"
          | "oceanic"
          | "ice"
          | "gas"
          | "lava"
          | "storm"
          | "plasma";
        /**
         * get_characters_character_id_planets_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_characters_character_id_planets_upgrade_level
         * upgrade_level integer
         * @format int32
         * @min 0
         * @max 5
         */
        upgrade_level: number;
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
      path: `/characters/${characterId}/planets/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met. --- Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/` Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`
   *
   * @tags Planetary Interaction
   * @name GetCharactersCharacterIdPlanetsPlanetId
   * @summary Get colony layout
   * @request GET:/characters/{character_id}/planets/{planet_id}/
   * @secure
   */
  getCharactersCharacterIdPlanetsPlanetId = (
    characterId: number,
    planetId: number,
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
         * get_characters_character_id_planets_planet_id_links
         * links array
         * @maxItems 500
         */
        links: {
          /**
           * get_characters_character_id_planets_planet_id_destination_pin_id
           * destination_pin_id integer
           * @format int64
           */
          destination_pin_id: number;
          /**
           * get_characters_character_id_planets_planet_id_link_level
           * link_level integer
           * @format int32
           * @min 0
           * @max 10
           */
          link_level: number;
          /**
           * get_characters_character_id_planets_planet_id_source_pin_id
           * source_pin_id integer
           * @format int64
           */
          source_pin_id: number;
        }[];
        /**
         * get_characters_character_id_planets_planet_id_pins
         * pins array
         * @maxItems 100
         */
        pins: {
          /**
           * get_characters_character_id_planets_planet_id_contents
           * contents array
           * @maxItems 90
           */
          contents?: {
            /**
             * get_characters_character_id_planets_planet_id_amount
             * amount integer
             * @format int64
             */
            amount: number;
            /**
             * get_characters_character_id_planets_planet_id_content_type_id
             * type_id integer
             * @format int32
             */
            type_id: number;
          }[];
          /**
           * get_characters_character_id_planets_planet_id_expiry_time
           * expiry_time string
           * @format date-time
           */
          expiry_time?: string;
          /**
           * get_characters_character_id_planets_planet_id_extractor_details
           * extractor_details object
           */
          extractor_details?: {
            /**
             * get_characters_character_id_planets_planet_id_cycle_time
             * in seconds
             * @format int32
             */
            cycle_time?: number;
            /**
             * get_characters_character_id_planets_planet_id_head_radius
             * head_radius number
             * @format float
             */
            head_radius?: number;
            /**
             * get_characters_character_id_planets_planet_id_heads
             * heads array
             * @maxItems 10
             */
            heads: {
              /**
               * get_characters_character_id_planets_planet_id_head_id
               * head_id integer
               * @format int32
               * @min 0
               * @max 9
               */
              head_id: number;
              /**
               * get_characters_character_id_planets_planet_id_head_latitude
               * latitude number
               * @format float
               */
              latitude: number;
              /**
               * get_characters_character_id_planets_planet_id_head_longitude
               * longitude number
               * @format float
               */
              longitude: number;
            }[];
            /**
             * get_characters_character_id_planets_planet_id_product_type_id
             * product_type_id integer
             * @format int32
             */
            product_type_id?: number;
            /**
             * get_characters_character_id_planets_planet_id_qty_per_cycle
             * qty_per_cycle integer
             * @format int32
             */
            qty_per_cycle?: number;
          };
          /**
           * get_characters_character_id_planets_planet_id_factory_details
           * factory_details object
           */
          factory_details?: {
            /**
             * get_characters_character_id_planets_planet_id_factory_details_schematic_id
             * schematic_id integer
             * @format int32
             */
            schematic_id: number;
          };
          /**
           * get_characters_character_id_planets_planet_id_install_time
           * install_time string
           * @format date-time
           */
          install_time?: string;
          /**
           * get_characters_character_id_planets_planet_id_last_cycle_start
           * last_cycle_start string
           * @format date-time
           */
          last_cycle_start?: string;
          /**
           * get_characters_character_id_planets_planet_id_latitude
           * latitude number
           * @format float
           */
          latitude: number;
          /**
           * get_characters_character_id_planets_planet_id_longitude
           * longitude number
           * @format float
           */
          longitude: number;
          /**
           * get_characters_character_id_planets_planet_id_pin_id
           * pin_id integer
           * @format int64
           */
          pin_id: number;
          /**
           * get_characters_character_id_planets_planet_id_schematic_id
           * schematic_id integer
           * @format int32
           */
          schematic_id?: number;
          /**
           * get_characters_character_id_planets_planet_id_type_id
           * type_id integer
           * @format int32
           */
          type_id: number;
        }[];
        /**
         * get_characters_character_id_planets_planet_id_routes
         * routes array
         * @maxItems 1000
         */
        routes: {
          /**
           * get_characters_character_id_planets_planet_id_route_content_type_id
           * content_type_id integer
           * @format int32
           */
          content_type_id: number;
          /**
           * get_characters_character_id_planets_planet_id_route_destination_pin_id
           * destination_pin_id integer
           * @format int64
           */
          destination_pin_id: number;
          /**
           * get_characters_character_id_planets_planet_id_quantity
           * quantity number
           * @format float
           */
          quantity: number;
          /**
           * get_characters_character_id_planets_planet_id_route_id
           * route_id integer
           * @format int64
           */
          route_id: number;
          /**
           * get_characters_character_id_planets_planet_id_route_source_pin_id
           * source_pin_id integer
           * @format int64
           */
          source_pin_id: number;
          /**
           * get_characters_character_id_planets_planet_id_waypoints
           * list of pin ID waypoints
           * @maxItems 5
           */
          waypoints?: number[];
        }[];
      },
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_characters_character_id_planets_planet_id_error
           * error message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/planets/${planetId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get portrait urls for a character --- Alternate route: `/dev/characters/{character_id}/portrait/` Alternate route: `/v2/characters/{character_id}/portrait/` Alternate route: `/v3/characters/{character_id}/portrait/` --- This route expires daily at 11:05
   *
   * @tags Character
   * @name GetCharactersCharacterIdPortrait
   * @summary Get character portraits
   * @request GET:/characters/{character_id}/portrait/
   */
  getCharactersCharacterIdPortrait = (
    characterId: number,
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
         * get_characters_character_id_portrait_px128x128
         * px128x128 string
         */
        px128x128?: string;
        /**
         * get_characters_character_id_portrait_px256x256
         * px256x256 string
         */
        px256x256?: string;
        /**
         * get_characters_character_id_portrait_px512x512
         * px512x512 string
         */
        px512x512?: string;
        /**
         * get_characters_character_id_portrait_px64x64
         * px64x64 string
         */
        px64x64?: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_characters_character_id_portrait_error
           * error message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/characters/${characterId}/portrait/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a character's corporation roles --- Alternate route: `/dev/characters/{character_id}/roles/` Alternate route: `/v3/characters/{character_id}/roles/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdRoles
   * @summary Get character corporation roles
   * @request GET:/characters/{character_id}/roles/
   * @secure
   */
  getCharactersCharacterIdRoles = (
    characterId: number,
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
         * get_characters_character_id_roles_roles
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
         * get_characters_character_id_roles_roles_at_base
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
         * get_characters_character_id_roles_roles_at_hq
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
         * get_characters_character_id_roles_roles_at_other
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
      path: `/characters/${characterId}/roles/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search for entities that match a given sub-string. --- Alternate route: `/dev/characters/{character_id}/search/` Alternate route: `/legacy/characters/{character_id}/search/` Alternate route: `/v3/characters/{character_id}/search/` --- This route is cached for up to 3600 seconds
   *
   * @tags Search
   * @name GetCharactersCharacterIdSearch
   * @summary Search on a string
   * @request GET:/characters/{character_id}/search/
   * @secure
   */
  getCharactersCharacterIdSearch = (
    characterId: number,
    query: {
      /**
       * Type of entities to search for
       * @maxItems 11
       * @minItems 1
       * @uniqueItems true
       */
      categories: (
        | "agent"
        | "alliance"
        | "character"
        | "constellation"
        | "corporation"
        | "faction"
        | "inventory_type"
        | "region"
        | "solar_system"
        | "station"
        | "structure"
      )[];
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
       * The string to search on
       * @minLength 3
       */
      search: string;
      /**
       * Whether the search should be a strict match
       * @default false
       */
      strict?: boolean;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_characters_character_id_search_agent
         * agent array
         * @maxItems 500
         */
        agent?: number[];
        /**
         * get_characters_character_id_search_alliance
         * alliance array
         * @maxItems 500
         */
        alliance?: number[];
        /**
         * get_characters_character_id_search_character
         * character array
         * @maxItems 500
         */
        character?: number[];
        /**
         * get_characters_character_id_search_constellation
         * constellation array
         * @maxItems 500
         */
        constellation?: number[];
        /**
         * get_characters_character_id_search_corporation
         * corporation array
         * @maxItems 500
         */
        corporation?: number[];
        /**
         * get_characters_character_id_search_faction
         * faction array
         * @maxItems 500
         */
        faction?: number[];
        /**
         * get_characters_character_id_search_inventory_type
         * inventory_type array
         * @maxItems 500
         */
        inventory_type?: number[];
        /**
         * get_characters_character_id_search_region
         * region array
         * @maxItems 500
         */
        region?: number[];
        /**
         * get_characters_character_id_search_solar_system
         * solar_system array
         * @maxItems 500
         */
        solar_system?: number[];
        /**
         * get_characters_character_id_search_station
         * station array
         * @maxItems 500
         */
        station?: number[];
        /**
         * get_characters_character_id_search_structure
         * structure array
         * @maxItems 500
         */
        structure?: number[];
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
      path: `/characters/${characterId}/search/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get the current ship type, name and id --- Alternate route: `/dev/characters/{character_id}/ship/` Alternate route: `/legacy/characters/{character_id}/ship/` Alternate route: `/v1/characters/{character_id}/ship/` Alternate route: `/v2/characters/{character_id}/ship/` --- This route is cached for up to 5 seconds
   *
   * @tags Location
   * @name GetCharactersCharacterIdShip
   * @summary Get current ship
   * @request GET:/characters/{character_id}/ship/
   * @secure
   */
  getCharactersCharacterIdShip = (
    characterId: number,
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
         * get_characters_character_id_ship_ship_item_id
         * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
         * @format int64
         */
        ship_item_id: number;
        /**
         * get_characters_character_id_ship_ship_name
         * ship_name string
         */
        ship_name: string;
        /**
         * get_characters_character_id_ship_ship_type_id
         * ship_type_id integer
         * @format int32
         */
        ship_type_id: number;
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
      path: `/characters/${characterId}/ship/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List the configured skill queue for the given character --- Alternate route: `/dev/characters/{character_id}/skillqueue/` Alternate route: `/legacy/characters/{character_id}/skillqueue/` Alternate route: `/v2/characters/{character_id}/skillqueue/` --- This route is cached for up to 120 seconds
   *
   * @tags Skills
   * @name GetCharactersCharacterIdSkillqueue
   * @summary Get character's skill queue
   * @request GET:/characters/{character_id}/skillqueue/
   * @secure
   */
  getCharactersCharacterIdSkillqueue = (
    characterId: number,
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
         * get_characters_character_id_skillqueue_finish_date
         * Date on which training of the skill will complete. Omitted if the skill queue is paused.
         * @format date-time
         */
        finish_date?: string;
        /**
         * get_characters_character_id_skillqueue_finished_level
         * finished_level integer
         * @format int32
         * @min 0
         * @max 5
         */
        finished_level: number;
        /**
         * get_characters_character_id_skillqueue_level_end_sp
         * level_end_sp integer
         * @format int32
         */
        level_end_sp?: number;
        /**
         * get_characters_character_id_skillqueue_level_start_sp
         * Amount of SP that was in the skill when it started training it's current level. Used to calculate % of current level complete.
         * @format int32
         */
        level_start_sp?: number;
        /**
         * get_characters_character_id_skillqueue_queue_position
         * queue_position integer
         * @format int32
         */
        queue_position: number;
        /**
         * get_characters_character_id_skillqueue_skill_id
         * skill_id integer
         * @format int32
         */
        skill_id: number;
        /**
         * get_characters_character_id_skillqueue_start_date
         * start_date string
         * @format date-time
         */
        start_date?: string;
        /**
         * get_characters_character_id_skillqueue_training_start_sp
         * training_start_sp integer
         * @format int32
         */
        training_start_sp?: number;
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
      path: `/characters/${characterId}/skillqueue/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List all trained skills for the given character --- Alternate route: `/dev/characters/{character_id}/skills/` Alternate route: `/v4/characters/{character_id}/skills/` --- This route is cached for up to 120 seconds
   *
   * @tags Skills
   * @name GetCharactersCharacterIdSkills
   * @summary Get character skills
   * @request GET:/characters/{character_id}/skills/
   * @secure
   */
  getCharactersCharacterIdSkills = (
    characterId: number,
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
         * get_characters_character_id_skills_skills
         * skills array
         * @maxItems 1000
         */
        skills: {
          /**
           * get_characters_character_id_skills_active_skill_level
           * active_skill_level integer
           * @format int32
           */
          active_skill_level: number;
          /**
           * get_characters_character_id_skills_skill_id
           * skill_id integer
           * @format int32
           */
          skill_id: number;
          /**
           * get_characters_character_id_skills_skillpoints_in_skill
           * skillpoints_in_skill integer
           * @format int64
           */
          skillpoints_in_skill: number;
          /**
           * get_characters_character_id_skills_trained_skill_level
           * trained_skill_level integer
           * @format int32
           */
          trained_skill_level: number;
        }[];
        /**
         * get_characters_character_id_skills_total_sp
         * total_sp integer
         * @format int64
         */
        total_sp: number;
        /**
         * get_characters_character_id_skills_unallocated_sp
         * Skill points available to be assigned
         * @format int32
         */
        unallocated_sp?: number;
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
      path: `/characters/${characterId}/skills/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return character standings from agents, NPC corporations, and factions --- Alternate route: `/dev/characters/{character_id}/standings/` Alternate route: `/v2/characters/{character_id}/standings/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdStandings
   * @summary Get standings
   * @request GET:/characters/{character_id}/standings/
   * @secure
   */
  getCharactersCharacterIdStandings = (
    characterId: number,
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
         * get_characters_character_id_standings_from_id
         * from_id integer
         * @format int32
         */
        from_id: number;
        /**
         * get_characters_character_id_standings_from_type
         * from_type string
         */
        from_type: "agent" | "npc_corp" | "faction";
        /**
         * get_characters_character_id_standings_standing
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
      path: `/characters/${characterId}/standings/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a character's titles --- Alternate route: `/dev/characters/{character_id}/titles/` Alternate route: `/v2/characters/{character_id}/titles/` --- This route is cached for up to 3600 seconds
   *
   * @tags Character
   * @name GetCharactersCharacterIdTitles
   * @summary Get character corporation titles
   * @request GET:/characters/{character_id}/titles/
   * @secure
   */
  getCharactersCharacterIdTitles = (
    characterId: number,
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
         * get_characters_character_id_titles_name
         * name string
         */
        name?: string;
        /**
         * get_characters_character_id_titles_title_id
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
      path: `/characters/${characterId}/titles/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a character's wallet balance --- Alternate route: `/legacy/characters/{character_id}/wallet/` Alternate route: `/v1/characters/{character_id}/wallet/` --- This route is cached for up to 120 seconds --- [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/wallet/)
   *
   * @tags Wallet
   * @name GetCharactersCharacterIdWallet
   * @summary Get a character's wallet balance
   * @request GET:/characters/{character_id}/wallet/
   * @secure
   */
  getCharactersCharacterIdWallet = (
    characterId: number,
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
      path: `/characters/${characterId}/wallet/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve the given character's wallet journal going 30 days back --- Alternate route: `/dev/characters/{character_id}/wallet/journal/` Alternate route: `/legacy/characters/{character_id}/wallet/journal/` Alternate route: `/v5/characters/{character_id}/wallet/journal/` Alternate route: `/v6/characters/{character_id}/wallet/journal/` --- This route is cached for up to 3600 seconds
   *
   * @tags Wallet
   * @name GetCharactersCharacterIdWalletJournal
   * @summary Get character wallet journal
   * @request GET:/characters/{character_id}/wallet/journal/
   * @secure
   */
  getCharactersCharacterIdWalletJournal = (
    characterId: number,
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
         * get_characters_character_id_wallet_journal_amount
         * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
         * @format double
         */
        amount?: number;
        /**
         * get_characters_character_id_wallet_journal_balance
         * Wallet balance after transaction occurred
         * @format double
         */
        balance?: number;
        /**
         * get_characters_character_id_wallet_journal_context_id
         * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
         * @format int64
         */
        context_id?: number;
        /**
         * get_characters_character_id_wallet_journal_context_id_type
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
         * get_characters_character_id_wallet_journal_date
         * Date and time of transaction
         * @format date-time
         */
        date: string;
        /**
         * get_characters_character_id_wallet_journal_description
         * The reason for the transaction, mirrors what is seen in the client
         */
        description: string;
        /**
         * get_characters_character_id_wallet_journal_first_party_id
         * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
         * @format int32
         */
        first_party_id?: number;
        /**
         * get_characters_character_id_wallet_journal_id
         * Unique journal reference ID
         * @format int64
         */
        id: number;
        /**
         * get_characters_character_id_wallet_journal_reason
         * The user stated reason for the transaction. Only applies to some ref_types
         */
        reason?: string;
        /**
         * get_characters_character_id_wallet_journal_ref_type
         * "The transaction type for the given. transaction. Different transaction types will populate different attributes."
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
         * get_characters_character_id_wallet_journal_second_party_id
         * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
         * @format int32
         */
        second_party_id?: number;
        /**
         * get_characters_character_id_wallet_journal_tax
         * Tax amount received. Only applies to tax related transactions
         * @format double
         */
        tax?: number;
        /**
         * get_characters_character_id_wallet_journal_tax_receiver_id
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
      path: `/characters/${characterId}/wallet/journal/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get wallet transactions of a character --- Alternate route: `/dev/characters/{character_id}/wallet/transactions/` Alternate route: `/legacy/characters/{character_id}/wallet/transactions/` Alternate route: `/v1/characters/{character_id}/wallet/transactions/` --- This route is cached for up to 3600 seconds
   *
   * @tags Wallet
   * @name GetCharactersCharacterIdWalletTransactions
   * @summary Get wallet transactions
   * @request GET:/characters/{character_id}/wallet/transactions/
   * @secure
   */
  getCharactersCharacterIdWalletTransactions = (
    characterId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Only show transactions happened before the one referenced by this id
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
         * get_characters_character_id_wallet_transactions_client_id
         * client_id integer
         * @format int32
         */
        client_id: number;
        /**
         * get_characters_character_id_wallet_transactions_date
         * Date and time of transaction
         * @format date-time
         */
        date: string;
        /**
         * get_characters_character_id_wallet_transactions_is_buy
         * is_buy boolean
         */
        is_buy: boolean;
        /**
         * get_characters_character_id_wallet_transactions_is_personal
         * is_personal boolean
         */
        is_personal: boolean;
        /**
         * get_characters_character_id_wallet_transactions_journal_ref_id
         * journal_ref_id integer
         * @format int64
         */
        journal_ref_id: number;
        /**
         * get_characters_character_id_wallet_transactions_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_characters_character_id_wallet_transactions_quantity
         * quantity integer
         * @format int32
         */
        quantity: number;
        /**
         * get_characters_character_id_wallet_transactions_transaction_id
         * Unique transaction ID
         * @format int64
         */
        transaction_id: number;
        /**
         * get_characters_character_id_wallet_transactions_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
        /**
         * get_characters_character_id_wallet_transactions_unit_price
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
      path: `/characters/${characterId}/wallet/transactions/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
