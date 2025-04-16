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

export class Route<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get the systems between origin and destination --- Alternate route: `/dev/route/{origin}/{destination}/` Alternate route: `/legacy/route/{origin}/{destination}/` Alternate route: `/v1/route/{origin}/{destination}/` --- This route is cached for up to 86400 seconds
   *
   * @tags Routes
   * @name GetRouteOriginDestination
   * @summary Get route
   * @request GET:/route/{origin}/{destination}/
   */
  getRouteOriginDestination = (
    destination: number,
    origin: number,
    query?: {
      /**
       * avoid solar system ID(s)
       * @maxItems 100
       * @uniqueItems true
       */
      avoid?: number[];
      /**
       * connected solar system pairs
       * @maxItems 100
       * @uniqueItems true
       */
      connections?: number[][];
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * route security preference
       * @default "shortest"
       */
      flag?: "shortest" | "secure" | "insecure";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      number[],
      | void
      | BadRequest
      | {
          /**
           * get_route_origin_destination_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/route/${origin}/${destination}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
