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

export class Incursions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return a list of current incursions --- Alternate route: `/dev/incursions/` Alternate route: `/legacy/incursions/` Alternate route: `/v1/incursions/` --- This route is cached for up to 300 seconds
   *
   * @tags Incursions
   * @name GetIncursions
   * @summary List incursions
   * @request GET:/incursions/
   */
  getIncursions = (
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
         * get_incursions_constellation_id
         * The constellation id in which this incursion takes place
         * @format int32
         */
        constellation_id: number;
        /**
         * get_incursions_faction_id
         * The attacking faction's id
         * @format int32
         */
        faction_id: number;
        /**
         * get_incursions_has_boss
         * Whether the final encounter has boss or not
         */
        has_boss: boolean;
        /**
         * get_incursions_infested_solar_systems
         * A list of infested solar system ids that are a part of this incursion
         * @maxItems 100
         */
        infested_solar_systems: number[];
        /**
         * get_incursions_influence
         * Influence of this incursion as a float from 0 to 1
         * @format float
         */
        influence: number;
        /**
         * get_incursions_staging_solar_system_id
         * Staging solar system for this incursion
         * @format int32
         */
        staging_solar_system_id: number;
        /**
         * get_incursions_state
         * The state of this incursion
         */
        state: "withdrawing" | "mobilizing" | "established";
        /**
         * get_incursions_type
         * The type of this incursion
         */
        type: string;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/incursions/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
