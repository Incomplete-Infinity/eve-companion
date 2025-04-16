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
import { HttpClient, RequestParams } from "./http-client";

export class Markets<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get a list of item groups --- Alternate route: `/dev/markets/groups/` Alternate route: `/legacy/markets/groups/` Alternate route: `/v1/markets/groups/` --- This route expires daily at 11:05
   *
   * @tags Market
   * @name GetMarketsGroups
   * @summary Get item groups
   * @request GET:/markets/groups/
   */
  getMarketsGroups = (
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
      path: `/markets/groups/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on an item group --- Alternate route: `/dev/markets/groups/{market_group_id}/` Alternate route: `/legacy/markets/groups/{market_group_id}/` Alternate route: `/v1/markets/groups/{market_group_id}/` --- This route expires daily at 11:05
   *
   * @tags Market
   * @name GetMarketsGroupsMarketGroupId
   * @summary Get item group information
   * @request GET:/markets/groups/{market_group_id}/
   */
  getMarketsGroupsMarketGroupId = (
    marketGroupId: number,
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
         * get_markets_groups_market_group_id_description
         * description string
         */
        description: string;
        /**
         * get_markets_groups_market_group_id_market_group_id
         * market_group_id integer
         * @format int32
         */
        market_group_id: number;
        /**
         * get_markets_groups_market_group_id_name
         * name string
         */
        name: string;
        /**
         * get_markets_groups_market_group_id_parent_group_id
         * parent_group_id integer
         * @format int32
         */
        parent_group_id?: number;
        /**
         * get_markets_groups_market_group_id_types
         * types array
         * @maxItems 5000
         */
        types: number[];
      },
      | void
      | BadRequest
      | {
          /**
           * get_markets_groups_market_group_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/markets/groups/${marketGroupId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of prices --- Alternate route: `/dev/markets/prices/` Alternate route: `/legacy/markets/prices/` Alternate route: `/v1/markets/prices/` --- This route is cached for up to 3600 seconds
   *
   * @tags Market
   * @name GetMarketsPrices
   * @summary List market prices
   * @request GET:/markets/prices/
   */
  getMarketsPrices = (
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
         * get_markets_prices_adjusted_price
         * adjusted_price number
         * @format double
         */
        adjusted_price?: number;
        /**
         * get_markets_prices_average_price
         * average_price number
         * @format double
         */
        average_price?: number;
        /**
         * get_markets_prices_type_id
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
      path: `/markets/prices/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return all orders in a structure --- Alternate route: `/dev/markets/structures/{structure_id}/` Alternate route: `/legacy/markets/structures/{structure_id}/` Alternate route: `/v1/markets/structures/{structure_id}/` --- This route is cached for up to 300 seconds
   *
   * @tags Market
   * @name GetMarketsStructuresStructureId
   * @summary List orders in a structure
   * @request GET:/markets/structures/{structure_id}/
   * @secure
   */
  getMarketsStructuresStructureId = (
    structureId: number,
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
         * get_markets_structures_structure_id_duration
         * duration integer
         * @format int32
         */
        duration: number;
        /**
         * get_markets_structures_structure_id_is_buy_order
         * is_buy_order boolean
         */
        is_buy_order: boolean;
        /**
         * get_markets_structures_structure_id_issued
         * issued string
         * @format date-time
         */
        issued: string;
        /**
         * get_markets_structures_structure_id_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_markets_structures_structure_id_min_volume
         * min_volume integer
         * @format int32
         */
        min_volume: number;
        /**
         * get_markets_structures_structure_id_order_id
         * order_id integer
         * @format int64
         */
        order_id: number;
        /**
         * get_markets_structures_structure_id_price
         * price number
         * @format double
         */
        price: number;
        /**
         * get_markets_structures_structure_id_range
         * range string
         */
        range:
          | "station"
          | "region"
          | "solarsystem"
          | "1"
          | "2"
          | "3"
          | "4"
          | "5"
          | "10"
          | "20"
          | "30"
          | "40";
        /**
         * get_markets_structures_structure_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
        /**
         * get_markets_structures_structure_id_volume_remain
         * volume_remain integer
         * @format int32
         */
        volume_remain: number;
        /**
         * get_markets_structures_structure_id_volume_total
         * volume_total integer
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
      path: `/markets/structures/${structureId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of historical market statistics for the specified type in a region --- Alternate route: `/dev/markets/{region_id}/history/` Alternate route: `/legacy/markets/{region_id}/history/` Alternate route: `/v1/markets/{region_id}/history/` --- This route expires daily at 11:05
   *
   * @tags Market
   * @name GetMarketsRegionIdHistory
   * @summary List historical market statistics in a region
   * @request GET:/markets/{region_id}/history/
   */
  getMarketsRegionIdHistory = (
    regionId: number,
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Return statistics for this type
       * @format int32
       */
      type_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_markets_region_id_history_average
         * average number
         * @format double
         */
        average: number;
        /**
         * get_markets_region_id_history_date
         * The date of this historical statistic entry
         * @format date
         */
        date: string;
        /**
         * get_markets_region_id_history_highest
         * highest number
         * @format double
         */
        highest: number;
        /**
         * get_markets_region_id_history_lowest
         * lowest number
         * @format double
         */
        lowest: number;
        /**
         * get_markets_region_id_history_order_count
         * Total number of orders happened that day
         * @format int64
         */
        order_count: number;
        /**
         * get_markets_region_id_history_volume
         * Total
         * @format int64
         */
        volume: number;
      }[],
      | void
      | BadRequest
      | {
          /**
           * get_markets_region_id_history_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | {
          /**
           * get_markets_region_id_history_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
      | {
          /**
           * get_markets_region_id_history_520_error_520
           * Error 520 message
           */
          error?: string;
        }
    >({
      path: `/markets/${regionId}/history/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of orders in a region --- Alternate route: `/dev/markets/{region_id}/orders/` Alternate route: `/legacy/markets/{region_id}/orders/` Alternate route: `/v1/markets/{region_id}/orders/` --- This route is cached for up to 300 seconds
   *
   * @tags Market
   * @name GetMarketsRegionIdOrders
   * @summary List orders in a region
   * @request GET:/markets/{region_id}/orders/
   */
  getMarketsRegionIdOrders = (
    regionId: number,
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
       * @default "all"
       */
      order_type: "buy" | "sell" | "all";
      /**
       * Which page of results to return
       * @format int32
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * Return orders only for this type
       * @format int32
       */
      type_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_markets_region_id_orders_duration
         * duration integer
         * @format int32
         */
        duration: number;
        /**
         * get_markets_region_id_orders_is_buy_order
         * is_buy_order boolean
         */
        is_buy_order: boolean;
        /**
         * get_markets_region_id_orders_issued
         * issued string
         * @format date-time
         */
        issued: string;
        /**
         * get_markets_region_id_orders_location_id
         * location_id integer
         * @format int64
         */
        location_id: number;
        /**
         * get_markets_region_id_orders_min_volume
         * min_volume integer
         * @format int32
         */
        min_volume: number;
        /**
         * get_markets_region_id_orders_order_id
         * order_id integer
         * @format int64
         */
        order_id: number;
        /**
         * get_markets_region_id_orders_price
         * price number
         * @format double
         */
        price: number;
        /**
         * get_markets_region_id_orders_range
         * range string
         */
        range:
          | "station"
          | "region"
          | "solarsystem"
          | "1"
          | "2"
          | "3"
          | "4"
          | "5"
          | "10"
          | "20"
          | "30"
          | "40";
        /**
         * get_markets_region_id_orders_system_id
         * The solar system this order was placed
         * @format int32
         */
        system_id: number;
        /**
         * get_markets_region_id_orders_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
        /**
         * get_markets_region_id_orders_volume_remain
         * volume_remain integer
         * @format int32
         */
        volume_remain: number;
        /**
         * get_markets_region_id_orders_volume_total
         * volume_total integer
         * @format int32
         */
        volume_total: number;
      }[],
      | void
      | BadRequest
      | {
          /**
           * get_markets_region_id_orders_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | {
          /**
           * get_markets_region_id_orders_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/markets/${regionId}/orders/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return a list of type IDs that have active orders in the region, for efficient market indexing. --- Alternate route: `/dev/markets/{region_id}/types/` Alternate route: `/legacy/markets/{region_id}/types/` Alternate route: `/v1/markets/{region_id}/types/` --- This route is cached for up to 600 seconds
   *
   * @tags Market
   * @name GetMarketsRegionIdTypes
   * @summary List type IDs relevant to a market
   * @request GET:/markets/{region_id}/types/
   */
  getMarketsRegionIdTypes = (
    regionId: number,
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
      number[],
      | void
      | BadRequest
      | {
          /**
           * get_markets_region_id_types_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/markets/${regionId}/types/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
