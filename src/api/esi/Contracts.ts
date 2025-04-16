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

export class Contracts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Lists bids on a public auction contract --- Alternate route: `/dev/contracts/public/bids/{contract_id}/` Alternate route: `/legacy/contracts/public/bids/{contract_id}/` Alternate route: `/v1/contracts/public/bids/{contract_id}/` --- This route is cached for up to 300 seconds
   *
   * @tags Contracts
   * @name GetContractsPublicBidsContractId
   * @summary Get public contract bids
   * @request GET:/contracts/public/bids/{contract_id}/
   */
  getContractsPublicBidsContractId = (
    contractId: number,
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
         * get_contracts_public_bids_contract_id_amount
         * The amount bid, in ISK
         * @format float
         */
        amount: number;
        /**
         * get_contracts_public_bids_contract_id_bid_id
         * Unique ID for the bid
         * @format int32
         */
        bid_id: number;
        /**
         * get_contracts_public_bids_contract_id_date_bid
         * Datetime when the bid was placed
         * @format date-time
         */
        date_bid: string;
      }[],
      | void
      | BadRequest
      | {
          /**
           * get_contracts_public_bids_contract_id_403_forbidden
           * Forbidden message
           */
          error?: string;
        }
      | {
          /**
           * get_contracts_public_bids_contract_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/contracts/public/bids/${contractId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists items of a public contract --- Alternate route: `/dev/contracts/public/items/{contract_id}/` Alternate route: `/legacy/contracts/public/items/{contract_id}/` Alternate route: `/v1/contracts/public/items/{contract_id}/` --- This route is cached for up to 3600 seconds
   *
   * @tags Contracts
   * @name GetContractsPublicItemsContractId
   * @summary Get public contract items
   * @request GET:/contracts/public/items/{contract_id}/
   */
  getContractsPublicItemsContractId = (
    contractId: number,
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
         * get_contracts_public_items_contract_id_is_blueprint_copy
         * is_blueprint_copy boolean
         */
        is_blueprint_copy?: boolean;
        /**
         * get_contracts_public_items_contract_id_is_included
         * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
         */
        is_included: boolean;
        /**
         * get_contracts_public_items_contract_id_item_id
         * Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract
         * @format int64
         */
        item_id?: number;
        /**
         * get_contracts_public_items_contract_id_material_efficiency
         * Material Efficiency Level of the blueprint
         * @format int32
         * @min 0
         * @max 25
         */
        material_efficiency?: number;
        /**
         * get_contracts_public_items_contract_id_quantity
         * Number of items in the stack
         * @format int32
         */
        quantity: number;
        /**
         * get_contracts_public_items_contract_id_record_id
         * Unique ID for the item, used by the contract system
         * @format int64
         */
        record_id: number;
        /**
         * get_contracts_public_items_contract_id_runs
         * Number of runs remaining if the blueprint is a copy, -1 if it is an original
         * @format int32
         * @min -1
         */
        runs?: number;
        /**
         * get_contracts_public_items_contract_id_time_efficiency
         * Time Efficiency Level of the blueprint
         * @format int32
         * @min 0
         * @max 20
         */
        time_efficiency?: number;
        /**
         * get_contracts_public_items_contract_id_type_id
         * Type ID for item
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | {
          /**
           * get_contracts_public_items_contract_id_403_forbidden
           * Forbidden message
           */
          error?: string;
        }
      | {
          /**
           * get_contracts_public_items_contract_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/contracts/public/items/${contractId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a paginated list of all public contracts in the given region --- Alternate route: `/dev/contracts/public/{region_id}/` Alternate route: `/legacy/contracts/public/{region_id}/` Alternate route: `/v1/contracts/public/{region_id}/` --- This route is cached for up to 1800 seconds
   *
   * @tags Contracts
   * @name GetContractsPublicRegionId
   * @summary Get public contracts
   * @request GET:/contracts/public/{region_id}/
   */
  getContractsPublicRegionId = (
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
      {
        /**
         * get_contracts_public_region_id_buyout
         * Buyout price (for Auctions only)
         * @format double
         */
        buyout?: number;
        /**
         * get_contracts_public_region_id_collateral
         * Collateral price (for Couriers only)
         * @format double
         */
        collateral?: number;
        /**
         * get_contracts_public_region_id_contract_id
         * contract_id integer
         * @format int32
         */
        contract_id: number;
        /**
         * get_contracts_public_region_id_date_expired
         * Expiration date of the contract
         * @format date-time
         */
        date_expired: string;
        /**
         * get_contracts_public_region_id_date_issued
         * Сreation date of the contract
         * @format date-time
         */
        date_issued: string;
        /**
         * get_contracts_public_region_id_days_to_complete
         * Number of days to perform the contract
         * @format int32
         */
        days_to_complete?: number;
        /**
         * get_contracts_public_region_id_end_location_id
         * End location ID (for Couriers contract)
         * @format int64
         */
        end_location_id?: number;
        /**
         * get_contracts_public_region_id_for_corporation
         * true if the contract was issued on behalf of the issuer's corporation
         */
        for_corporation?: boolean;
        /**
         * get_contracts_public_region_id_issuer_corporation_id
         * Character's corporation ID for the issuer
         * @format int32
         */
        issuer_corporation_id: number;
        /**
         * get_contracts_public_region_id_issuer_id
         * Character ID for the issuer
         * @format int32
         */
        issuer_id: number;
        /**
         * get_contracts_public_region_id_price
         * Price of contract (for ItemsExchange and Auctions)
         * @format double
         */
        price?: number;
        /**
         * get_contracts_public_region_id_reward
         * Remuneration for contract (for Couriers only)
         * @format double
         */
        reward?: number;
        /**
         * get_contracts_public_region_id_start_location_id
         * Start location ID (for Couriers contract)
         * @format int64
         */
        start_location_id?: number;
        /**
         * get_contracts_public_region_id_title
         * Title of the contract
         */
        title?: string;
        /**
         * get_contracts_public_region_id_type
         * Type of the contract
         */
        type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
        /**
         * get_contracts_public_region_id_volume
         * Volume of items in the contract
         * @format double
         */
        volume?: number;
      }[],
      | void
      | BadRequest
      | {
          /**
           * get_contracts_public_region_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/contracts/public/${regionId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
