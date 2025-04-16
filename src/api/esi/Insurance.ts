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

export class Insurance<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return available insurance levels for all ship types --- Alternate route: `/dev/insurance/prices/` Alternate route: `/legacy/insurance/prices/` Alternate route: `/v1/insurance/prices/` --- This route is cached for up to 3600 seconds
   *
   * @tags Insurance
   * @name GetInsurancePrices
   * @summary List insurance levels
   * @request GET:/insurance/prices/
   */
  getInsurancePrices = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_insurance_prices_levels
         * A list of a available insurance levels for this ship type
         * @maxItems 6
         */
        levels: {
          /**
           * get_insurance_prices_cost
           * cost number
           * @format float
           */
          cost: number;
          /**
           * get_insurance_prices_name
           * Localized insurance level
           */
          name: string;
          /**
           * get_insurance_prices_payout
           * payout number
           * @format float
           */
          payout: number;
        }[];
        /**
         * get_insurance_prices_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/insurance/prices/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
