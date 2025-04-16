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

export class Loyalty<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return a list of offers from a specific corporation's loyalty store --- Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/` Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/` Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/` --- This route expires daily at 11:05
   *
   * @tags Loyalty
   * @name GetLoyaltyStoresCorporationIdOffers
   * @summary List loyalty store offers
   * @request GET:/loyalty/stores/{corporation_id}/offers/
   */
  getLoyaltyStoresCorporationIdOffers = (
    corporationId: number,
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
         * get_loyalty_stores_corporation_id_offers_ak_cost
         * Analysis kredit cost
         * @format int32
         */
        ak_cost?: number;
        /**
         * get_loyalty_stores_corporation_id_offers_isk_cost
         * isk_cost integer
         * @format int64
         */
        isk_cost: number;
        /**
         * get_loyalty_stores_corporation_id_offers_lp_cost
         * lp_cost integer
         * @format int32
         */
        lp_cost: number;
        /**
         * get_loyalty_stores_corporation_id_offers_offer_id
         * offer_id integer
         * @format int32
         */
        offer_id: number;
        /**
         * get_loyalty_stores_corporation_id_offers_quantity
         * quantity integer
         * @format int32
         */
        quantity: number;
        /**
         * get_loyalty_stores_corporation_id_offers_required_items
         * required_items array
         * @maxItems 100
         */
        required_items: {
          /**
           * get_loyalty_stores_corporation_id_offers_required_item_quantity
           * quantity integer
           * @format int32
           */
          quantity: number;
          /**
           * get_loyalty_stores_corporation_id_offers_required_item_type_id
           * type_id integer
           * @format int32
           */
          type_id: number;
        }[];
        /**
         * get_loyalty_stores_corporation_id_offers_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      }[],
      | void
      | BadRequest
      | {
          /**
           * get_loyalty_stores_corporation_id_offers_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/loyalty/stores/${corporationId}/offers/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
