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

export class Status<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description EVE Server status --- Alternate route: `/dev/status/` Alternate route: `/legacy/status/` Alternate route: `/v1/status/` Alternate route: `/v2/status/` --- This route is cached for up to 30 seconds
   *
   * @tags Status
   * @name GetStatus
   * @summary Retrieve the uptime and player counts
   * @request GET:/status/
   */
  getStatus = (
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
         * get_status_players
         * Current online player count
         */
        players: number;
        /**
         * get_status_server_version
         * Running version as string
         */
        server_version: string;
        /**
         * get_status_start_time
         * Server start timestamp
         * @format date-time
         */
        start_time: string;
        /**
         * get_status_vip
         * If the server is in VIP mode
         */
        vip?: boolean;
      },
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/status/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
