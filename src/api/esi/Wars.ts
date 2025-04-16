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

export class Wars<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return a list of wars --- Alternate route: `/dev/wars/` Alternate route: `/legacy/wars/` Alternate route: `/v1/wars/` --- This route is cached for up to 3600 seconds
   *
   * @tags Wars
   * @name GetWars
   * @summary List wars
   * @request GET:/wars/
   */
  getWars = (
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Only return wars with ID smaller than this
       * @format int32
       */
      max_war_id?: number;
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
      path: `/wars/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return details about a war --- Alternate route: `/dev/wars/{war_id}/` Alternate route: `/legacy/wars/{war_id}/` Alternate route: `/v1/wars/{war_id}/` --- This route is cached for up to 3600 seconds
   *
   * @tags Wars
   * @name GetWarsWarId
   * @summary Get war information
   * @request GET:/wars/{war_id}/
   */
  getWarsWarId = (
    warId: number,
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
         * get_wars_war_id_aggressor
         * The aggressor corporation or alliance that declared this war, only contains either corporation_id or alliance_id
         */
        aggressor: {
          /**
           * get_wars_war_id_alliance_id
           * Alliance ID if and only if the aggressor is an alliance
           * @format int32
           */
          alliance_id?: number;
          /**
           * get_wars_war_id_corporation_id
           * Corporation ID if and only if the aggressor is a corporation
           * @format int32
           */
          corporation_id?: number;
          /**
           * get_wars_war_id_isk_destroyed
           * ISK value of ships the aggressor has destroyed
           * @format float
           */
          isk_destroyed: number;
          /**
           * get_wars_war_id_ships_killed
           * The number of ships the aggressor has killed
           * @format int32
           */
          ships_killed: number;
        };
        /**
         * get_wars_war_id_allies
         * allied corporations or alliances, each object contains either corporation_id or alliance_id
         * @maxItems 10000
         */
        allies?: {
          /**
           * get_wars_war_id_ally_alliance_id
           * Alliance ID if and only if this ally is an alliance
           * @format int32
           */
          alliance_id?: number;
          /**
           * get_wars_war_id_ally_corporation_id
           * Corporation ID if and only if this ally is a corporation
           * @format int32
           */
          corporation_id?: number;
        }[];
        /**
         * get_wars_war_id_declared
         * Time that the war was declared
         * @format date-time
         */
        declared: string;
        /**
         * get_wars_war_id_defender
         * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
         */
        defender: {
          /**
           * get_wars_war_id_defender_alliance_id
           * Alliance ID if and only if the defender is an alliance
           * @format int32
           */
          alliance_id?: number;
          /**
           * get_wars_war_id_defender_corporation_id
           * Corporation ID if and only if the defender is a corporation
           * @format int32
           */
          corporation_id?: number;
          /**
           * get_wars_war_id_defender_isk_destroyed
           * ISK value of ships the defender has killed
           * @format float
           */
          isk_destroyed: number;
          /**
           * get_wars_war_id_defender_ships_killed
           * The number of ships the defender has killed
           * @format int32
           */
          ships_killed: number;
        };
        /**
         * get_wars_war_id_finished
         * Time the war ended and shooting was no longer allowed
         * @format date-time
         */
        finished?: string;
        /**
         * get_wars_war_id_id
         * ID of the specified war
         * @format int32
         */
        id: number;
        /**
         * get_wars_war_id_mutual
         * Was the war declared mutual by both parties
         */
        mutual: boolean;
        /**
         * get_wars_war_id_open_for_allies
         * Is the war currently open for allies or not
         */
        open_for_allies: boolean;
        /**
         * get_wars_war_id_retracted
         * Time the war was retracted but both sides could still shoot each other
         * @format date-time
         */
        retracted?: string;
        /**
         * get_wars_war_id_started
         * Time when the war started and both sides could shoot each other
         * @format date-time
         */
        started?: string;
      },
      | void
      | BadRequest
      | ErrorLimited
      | {
          /**
           * get_wars_war_id_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/wars/${warId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of kills related to a war --- Alternate route: `/dev/wars/{war_id}/killmails/` Alternate route: `/legacy/wars/{war_id}/killmails/` Alternate route: `/v1/wars/{war_id}/killmails/` --- This route is cached for up to 3600 seconds
   *
   * @tags Wars
   * @name GetWarsWarIdKillmails
   * @summary List kills for a war
   * @request GET:/wars/{war_id}/killmails/
   */
  getWarsWarIdKillmails = (
    warId: number,
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
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_wars_war_id_killmails_killmail_hash
         * A hash of this killmail
         */
        killmail_hash: string;
        /**
         * get_wars_war_id_killmails_killmail_id
         * ID of this killmail
         * @format int32
         */
        killmail_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | {
          /**
           * get_wars_war_id_killmails_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/wars/${warId}/killmails/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
