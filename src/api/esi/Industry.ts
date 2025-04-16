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

export class Industry<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return a list of industry facilities --- Alternate route: `/dev/industry/facilities/` Alternate route: `/legacy/industry/facilities/` Alternate route: `/v1/industry/facilities/` --- This route is cached for up to 3600 seconds
   *
   * @tags Industry
   * @name GetIndustryFacilities
   * @summary List industry facilities
   * @request GET:/industry/facilities/
   */
  getIndustryFacilities = (
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
         * get_industry_facilities_facility_id
         * ID of the facility
         * @format int64
         */
        facility_id: number;
        /**
         * get_industry_facilities_owner_id
         * Owner of the facility
         * @format int32
         */
        owner_id: number;
        /**
         * get_industry_facilities_region_id
         * Region ID where the facility is
         * @format int32
         */
        region_id: number;
        /**
         * get_industry_facilities_solar_system_id
         * Solar system ID where the facility is
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_industry_facilities_tax
         * Tax imposed by the facility
         * @format float
         */
        tax?: number;
        /**
         * get_industry_facilities_type_id
         * Type ID of the facility
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
      path: `/industry/facilities/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return cost indices for solar systems --- Alternate route: `/dev/industry/systems/` Alternate route: `/legacy/industry/systems/` Alternate route: `/v1/industry/systems/` --- This route is cached for up to 3600 seconds
   *
   * @tags Industry
   * @name GetIndustrySystems
   * @summary List solar system cost indices
   * @request GET:/industry/systems/
   */
  getIndustrySystems = (
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
         * get_industry_systems_cost_indices
         * cost_indices array
         * @maxItems 10
         */
        cost_indices: {
          /**
           * get_industry_systems_activity
           * activity string
           */
          activity:
            | "copying"
            | "duplicating"
            | "invention"
            | "manufacturing"
            | "none"
            | "reaction"
            | "researching_material_efficiency"
            | "researching_technology"
            | "researching_time_efficiency"
            | "reverse_engineering";
          /**
           * get_industry_systems_cost_index
           * cost_index number
           * @format float
           */
          cost_index: number;
        }[];
        /**
         * get_industry_systems_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/industry/systems/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
