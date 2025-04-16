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

export class Fw<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday --- Alternate route: `/dev/fw/leaderboards/` Alternate route: `/legacy/fw/leaderboards/` Alternate route: `/v1/fw/leaderboards/` Alternate route: `/v2/fw/leaderboards/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetFwLeaderboards
   * @summary List of the top factions in faction warfare
   * @request GET:/fw/leaderboards/
   */
  getFwLeaderboards = (
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
         * get_fw_leaderboards_kills
         * Top 4 rankings of factions by number of kills from yesterday, last week and in total
         */
        kills: {
          /**
           * get_fw_leaderboards_active_total
           * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered "active" if they have participated in faction warfare in the past 14 days
           * @maxItems 4
           */
          active_total: {
            /**
             * get_fw_leaderboards_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_faction_id
             * faction_id integer
             * @format int32
             */
            faction_id?: number;
          }[];
          /**
           * get_fw_leaderboards_last_week
           * Top 4 ranking of factions by kills in the past week
           * @maxItems 4
           */
          last_week: {
            /**
             * get_fw_leaderboards_last_week_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_last_week_faction_id
             * faction_id integer
             * @format int32
             */
            faction_id?: number;
          }[];
          /**
           * get_fw_leaderboards_yesterday
           * Top 4 ranking of factions by kills in the past day
           * @maxItems 4
           */
          yesterday: {
            /**
             * get_fw_leaderboards_yesterday_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_yesterday_faction_id
             * faction_id integer
             * @format int32
             */
            faction_id?: number;
          }[];
        };
        /**
         * get_fw_leaderboards_victory_points
         * Top 4 rankings of factions by victory points from yesterday, last week and in total
         */
        victory_points: {
          /**
           * get_fw_leaderboards_victory_points_active_total
           * Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered "active" if they have participated in faction warfare in the past 14 days
           * @maxItems 4
           */
          active_total: {
            /**
             * get_fw_leaderboards_active_total_amount
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_active_total_faction_id
             * faction_id integer
             * @format int32
             */
            faction_id?: number;
          }[];
          /**
           * get_fw_leaderboards_victory_points_last_week
           * Top 4 ranking of factions by victory points in the past week
           * @maxItems 4
           */
          last_week: {
            /**
             * get_fw_leaderboards_last_week_amount_1
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_last_week_faction_id_1
             * faction_id integer
             * @format int32
             */
            faction_id?: number;
          }[];
          /**
           * get_fw_leaderboards_victory_points_yesterday
           * Top 4 ranking of factions by victory points in the past day
           * @maxItems 4
           */
          yesterday: {
            /**
             * get_fw_leaderboards_yesterday_amount_1
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_yesterday_faction_id_1
             * faction_id integer
             * @format int32
             */
            faction_id?: number;
          }[];
        };
      },
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fw/leaderboards/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday --- Alternate route: `/dev/fw/leaderboards/characters/` Alternate route: `/legacy/fw/leaderboards/characters/` Alternate route: `/v1/fw/leaderboards/characters/` Alternate route: `/v2/fw/leaderboards/characters/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetFwLeaderboardsCharacters
   * @summary List of the top pilots in faction warfare
   * @request GET:/fw/leaderboards/characters/
   */
  getFwLeaderboardsCharacters = (
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
         * get_fw_leaderboards_characters_kills
         * Top 100 rankings of pilots by number of kills from yesterday, last week and in total
         */
        kills: {
          /**
           * get_fw_leaderboards_characters_active_total
           * Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
           * @maxItems 100
           */
          active_total: {
            /**
             * get_fw_leaderboards_characters_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_characters_character_id
             * character_id integer
             * @format int32
             */
            character_id?: number;
          }[];
          /**
           * get_fw_leaderboards_characters_last_week
           * Top 100 ranking of pilots by kills in the past week
           * @maxItems 100
           */
          last_week: {
            /**
             * get_fw_leaderboards_characters_last_week_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_characters_last_week_character_id
             * character_id integer
             * @format int32
             */
            character_id?: number;
          }[];
          /**
           * get_fw_leaderboards_characters_yesterday
           * Top 100 ranking of pilots by kills in the past day
           * @maxItems 100
           */
          yesterday: {
            /**
             * get_fw_leaderboards_characters_yesterday_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_characters_yesterday_character_id
             * character_id integer
             * @format int32
             */
            character_id?: number;
          }[];
        };
        /**
         * get_fw_leaderboards_characters_victory_points
         * Top 100 rankings of pilots by victory points from yesterday, last week and in total
         */
        victory_points: {
          /**
           * get_fw_leaderboards_characters_victory_points_active_total
           * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
           * @maxItems 100
           */
          active_total: {
            /**
             * get_fw_leaderboards_characters_active_total_amount
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_characters_active_total_character_id
             * character_id integer
             * @format int32
             */
            character_id?: number;
          }[];
          /**
           * get_fw_leaderboards_characters_victory_points_last_week
           * Top 100 ranking of pilots by victory points in the past week
           * @maxItems 100
           */
          last_week: {
            /**
             * get_fw_leaderboards_characters_last_week_amount_1
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_characters_last_week_character_id_1
             * character_id integer
             * @format int32
             */
            character_id?: number;
          }[];
          /**
           * get_fw_leaderboards_characters_victory_points_yesterday
           * Top 100 ranking of pilots by victory points in the past day
           * @maxItems 100
           */
          yesterday: {
            /**
             * get_fw_leaderboards_characters_yesterday_amount_1
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_characters_yesterday_character_id_1
             * character_id integer
             * @format int32
             */
            character_id?: number;
          }[];
        };
      },
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fw/leaderboards/characters/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday --- Alternate route: `/dev/fw/leaderboards/corporations/` Alternate route: `/legacy/fw/leaderboards/corporations/` Alternate route: `/v1/fw/leaderboards/corporations/` Alternate route: `/v2/fw/leaderboards/corporations/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetFwLeaderboardsCorporations
   * @summary List of the top corporations in faction warfare
   * @request GET:/fw/leaderboards/corporations/
   */
  getFwLeaderboardsCorporations = (
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
         * get_fw_leaderboards_corporations_kills
         * Top 10 rankings of corporations by number of kills from yesterday, last week and in total
         */
        kills: {
          /**
           * get_fw_leaderboards_corporations_active_total
           * Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
           * @maxItems 10
           */
          active_total: {
            /**
             * get_fw_leaderboards_corporations_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_corporations_corporation_id
             * corporation_id integer
             * @format int32
             */
            corporation_id?: number;
          }[];
          /**
           * get_fw_leaderboards_corporations_last_week
           * Top 10 ranking of corporations by kills in the past week
           * @maxItems 10
           */
          last_week: {
            /**
             * get_fw_leaderboards_corporations_last_week_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_corporations_last_week_corporation_id
             * corporation_id integer
             * @format int32
             */
            corporation_id?: number;
          }[];
          /**
           * get_fw_leaderboards_corporations_yesterday
           * Top 10 ranking of corporations by kills in the past day
           * @maxItems 10
           */
          yesterday: {
            /**
             * get_fw_leaderboards_corporations_yesterday_amount
             * Amount of kills
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_corporations_yesterday_corporation_id
             * corporation_id integer
             * @format int32
             */
            corporation_id?: number;
          }[];
        };
        /**
         * get_fw_leaderboards_corporations_victory_points
         * Top 10 rankings of corporations by victory points from yesterday, last week and in total
         */
        victory_points: {
          /**
           * get_fw_leaderboards_corporations_victory_points_active_total
           * Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
           * @maxItems 10
           */
          active_total: {
            /**
             * get_fw_leaderboards_corporations_active_total_amount
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_corporations_active_total_corporation_id
             * corporation_id integer
             * @format int32
             */
            corporation_id?: number;
          }[];
          /**
           * get_fw_leaderboards_corporations_victory_points_last_week
           * Top 10 ranking of corporations by victory points in the past week
           * @maxItems 10
           */
          last_week: {
            /**
             * get_fw_leaderboards_corporations_last_week_amount_1
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_corporations_last_week_corporation_id_1
             * corporation_id integer
             * @format int32
             */
            corporation_id?: number;
          }[];
          /**
           * get_fw_leaderboards_corporations_victory_points_yesterday
           * Top 10 ranking of corporations by victory points in the past day
           * @maxItems 10
           */
          yesterday: {
            /**
             * get_fw_leaderboards_corporations_yesterday_amount_1
             * Amount of victory points
             * @format int32
             */
            amount?: number;
            /**
             * get_fw_leaderboards_corporations_yesterday_corporation_id_1
             * corporation_id integer
             * @format int32
             */
            corporation_id?: number;
          }[];
        };
      },
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fw/leaderboards/corporations/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Statistical overviews of factions involved in faction warfare --- Alternate route: `/dev/fw/stats/` Alternate route: `/legacy/fw/stats/` Alternate route: `/v1/fw/stats/` Alternate route: `/v2/fw/stats/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetFwStats
   * @summary An overview of statistics about factions involved in faction warfare
   * @request GET:/fw/stats/
   */
  getFwStats = (
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
         * get_fw_stats_faction_id
         * faction_id integer
         * @format int32
         */
        faction_id: number;
        /**
         * get_fw_stats_kills
         * Summary of kills against an enemy faction for the given faction
         */
        kills: {
          /**
           * get_fw_stats_last_week
           * Last week's total number of kills against enemy factions
           * @format int32
           */
          last_week: number;
          /**
           * get_fw_stats_total
           * Total number of kills against enemy factions since faction warfare began
           * @format int32
           */
          total: number;
          /**
           * get_fw_stats_yesterday
           * Yesterday's total number of kills against enemy factions
           * @format int32
           */
          yesterday: number;
        };
        /**
         * get_fw_stats_pilots
         * How many pilots fight for the given faction
         * @format int32
         */
        pilots: number;
        /**
         * get_fw_stats_systems_controlled
         * The number of solar systems controlled by the given faction
         * @format int32
         */
        systems_controlled: number;
        /**
         * get_fw_stats_victory_points
         * Summary of victory points gained for the given faction
         */
        victory_points: {
          /**
           * get_fw_stats_victory_points_last_week
           * Last week's victory points gained
           * @format int32
           */
          last_week: number;
          /**
           * get_fw_stats_victory_points_total
           * Total victory points gained since faction warfare began
           * @format int32
           */
          total: number;
          /**
           * get_fw_stats_victory_points_yesterday
           * Yesterday's victory points gained
           * @format int32
           */
          yesterday: number;
        };
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fw/stats/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description An overview of the current ownership of faction warfare solar systems --- Alternate route: `/dev/fw/systems/` Alternate route: `/legacy/fw/systems/` Alternate route: `/v2/fw/systems/` Alternate route: `/v3/fw/systems/` --- This route is cached for up to 1800 seconds
   *
   * @tags Faction Warfare
   * @name GetFwSystems
   * @summary Ownership of faction warfare systems
   * @request GET:/fw/systems/
   */
  getFwSystems = (
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
         * get_fw_systems_contested
         * contested string
         */
        contested: "captured" | "contested" | "uncontested" | "vulnerable";
        /**
         * get_fw_systems_occupier_faction_id
         * occupier_faction_id integer
         * @format int32
         */
        occupier_faction_id: number;
        /**
         * get_fw_systems_owner_faction_id
         * owner_faction_id integer
         * @format int32
         */
        owner_faction_id: number;
        /**
         * get_fw_systems_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_fw_systems_victory_points
         * victory_points integer
         * @format int32
         */
        victory_points: number;
        /**
         * get_fw_systems_victory_points_threshold
         * victory_points_threshold integer
         * @format int32
         */
        victory_points_threshold: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fw/systems/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Data about which NPC factions are at war --- Alternate route: `/dev/fw/wars/` Alternate route: `/legacy/fw/wars/` Alternate route: `/v1/fw/wars/` Alternate route: `/v2/fw/wars/` --- This route expires daily at 11:05
   *
   * @tags Faction Warfare
   * @name GetFwWars
   * @summary Data about which NPC factions are at war
   * @request GET:/fw/wars/
   */
  getFwWars = (
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
         * get_fw_wars_against_id
         * The faction ID of the enemy faction.
         * @format int32
         */
        against_id: number;
        /**
         * get_fw_wars_faction_id
         * faction_id integer
         * @format int32
         */
        faction_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fw/wars/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
