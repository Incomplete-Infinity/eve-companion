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
  GatewayTimeout,
  InternalServerError,
  ServiceUnavailable,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Sovereignty<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Shows sovereignty data for campaigns. --- Alternate route: `/dev/sovereignty/campaigns/` Alternate route: `/legacy/sovereignty/campaigns/` Alternate route: `/v1/sovereignty/campaigns/` --- This route is cached for up to 5 seconds
   *
   * @tags Sovereignty
   * @name GetSovereigntyCampaigns
   * @summary List sovereignty campaigns
   * @request GET:/sovereignty/campaigns/
   */
  getSovereigntyCampaigns = (
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
         * get_sovereignty_campaigns_attackers_score
         * Score for all attacking parties, only present in Defense Events.
         * @format float
         */
        attackers_score?: number;
        /**
         * get_sovereignty_campaigns_campaign_id
         * Unique ID for this campaign.
         * @format int32
         */
        campaign_id: number;
        /**
         * get_sovereignty_campaigns_constellation_id
         * The constellation in which the campaign will take place.
         * @format int32
         */
        constellation_id: number;
        /**
         * get_sovereignty_campaigns_defender_id
         * Defending alliance, only present in Defense Events
         * @format int32
         */
        defender_id?: number;
        /**
         * get_sovereignty_campaigns_defender_score
         * Score for the defending alliance, only present in Defense Events.
         * @format float
         */
        defender_score?: number;
        /**
         * get_sovereignty_campaigns_event_type
         * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as "Defense Events", station_freeport as "Freeport Events".
         */
        event_type:
          | "tcu_defense"
          | "ihub_defense"
          | "station_defense"
          | "station_freeport";
        /**
         * get_sovereignty_campaigns_participants
         * Alliance participating and their respective scores, only present in Freeport Events.
         * @maxItems 5000
         */
        participants?: {
          /**
           * get_sovereignty_campaigns_alliance_id
           * alliance_id integer
           * @format int32
           */
          alliance_id: number;
          /**
           * get_sovereignty_campaigns_score
           * score number
           * @format float
           */
          score: number;
        }[];
        /**
         * get_sovereignty_campaigns_solar_system_id
         * The solar system the structure is located in.
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_sovereignty_campaigns_start_time
         * Time the event is scheduled to start.
         * @format date-time
         */
        start_time: string;
        /**
         * get_sovereignty_campaigns_structure_id
         * The structure item ID that is related to this campaign.
         * @format int64
         */
        structure_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/sovereignty/campaigns/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Shows sovereignty information for solar systems --- Alternate route: `/dev/sovereignty/map/` Alternate route: `/legacy/sovereignty/map/` Alternate route: `/v1/sovereignty/map/` --- This route is cached for up to 3600 seconds
   *
   * @tags Sovereignty
   * @name GetSovereigntyMap
   * @summary List sovereignty of systems
   * @request GET:/sovereignty/map/
   */
  getSovereigntyMap = (
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
         * get_sovereignty_map_alliance_id
         * alliance_id integer
         * @format int32
         */
        alliance_id?: number;
        /**
         * get_sovereignty_map_corporation_id
         * corporation_id integer
         * @format int32
         */
        corporation_id?: number;
        /**
         * get_sovereignty_map_faction_id
         * faction_id integer
         * @format int32
         */
        faction_id?: number;
        /**
         * get_sovereignty_map_system_id
         * system_id integer
         * @format int32
         */
        system_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/sovereignty/map/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Shows sovereignty data for structures. --- Alternate route: `/dev/sovereignty/structures/` Alternate route: `/legacy/sovereignty/structures/` Alternate route: `/v1/sovereignty/structures/` --- This route is cached for up to 120 seconds
   *
   * @tags Sovereignty
   * @name GetSovereigntyStructures
   * @summary List sovereignty structures
   * @request GET:/sovereignty/structures/
   */
  getSovereigntyStructures = (
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
         * get_sovereignty_structures_alliance_id
         * The alliance that owns the structure.
         * @format int32
         */
        alliance_id: number;
        /**
         * get_sovereignty_structures_solar_system_id
         * Solar system in which the structure is located.
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_sovereignty_structures_structure_id
         * Unique item ID for this structure.
         * @format int64
         */
        structure_id: number;
        /**
         * get_sovereignty_structures_structure_type_id
         * A reference to the type of structure this is.
         * @format int32
         */
        structure_type_id: number;
        /**
         * get_sovereignty_structures_vulnerability_occupancy_level
         * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.
         * @format float
         */
        vulnerability_occupancy_level?: number;
        /**
         * get_sovereignty_structures_vulnerable_end_time
         * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.
         * @format date-time
         */
        vulnerable_end_time?: string;
        /**
         * get_sovereignty_structures_vulnerable_start_time
         * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.
         * @format date-time
         */
        vulnerable_start_time?: string;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/sovereignty/structures/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
