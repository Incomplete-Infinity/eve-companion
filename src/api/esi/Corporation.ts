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

export class Corporation<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Extraction timers for all moon chunks being extracted by refineries belonging to a corporation. --- Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/` Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/` Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/` --- This route is cached for up to 1800 seconds --- Requires one of the following EVE corporation role(s): Station_Manager
   *
   * @tags Industry
   * @name GetCorporationCorporationIdMiningExtractions
   * @summary Moon extraction timers
   * @request GET:/corporation/{corporation_id}/mining/extractions/
   * @secure
   */
  getCorporationCorporationIdMiningExtractions = (
    corporationId: number,
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
         * get_corporation_corporation_id_mining_extractions_chunk_arrival_time
         * The time at which the chunk being extracted will arrive and can be fractured by the moon mining drill.
         * @format date-time
         */
        chunk_arrival_time: string;
        /**
         * get_corporation_corporation_id_mining_extractions_extraction_start_time
         * The time at which the current extraction was initiated.
         * @format date-time
         */
        extraction_start_time: string;
        /**
         * get_corporation_corporation_id_mining_extractions_moon_id
         * moon_id integer
         * @format int32
         */
        moon_id: number;
        /**
         * get_corporation_corporation_id_mining_extractions_natural_decay_time
         * The time at which the chunk being extracted will naturally fracture if it is not first fractured by the moon mining drill.
         * @format date-time
         */
        natural_decay_time: string;
        /**
         * get_corporation_corporation_id_mining_extractions_structure_id
         * structure_id integer
         * @format int64
         */
        structure_id: number;
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
      path: `/corporation/${corporationId}/mining/extractions/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Paginated list of all entities capable of observing and recording mining for a corporation --- Alternate route: `/dev/corporation/{corporation_id}/mining/observers/` Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/` Alternate route: `/v1/corporation/{corporation_id}/mining/observers/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant
   *
   * @tags Industry
   * @name GetCorporationCorporationIdMiningObservers
   * @summary Corporation mining observers
   * @request GET:/corporation/{corporation_id}/mining/observers/
   * @secure
   */
  getCorporationCorporationIdMiningObservers = (
    corporationId: number,
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
         * get_corporation_corporation_id_mining_observers_last_updated
         * last_updated string
         * @format date
         */
        last_updated: string;
        /**
         * get_corporation_corporation_id_mining_observers_observer_id
         * The entity that was observing the asteroid field when it was mined.
         * @format int64
         */
        observer_id: number;
        /**
         * get_corporation_corporation_id_mining_observers_observer_type
         * The category of the observing entity
         */
        observer_type: "structure";
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
      path: `/corporation/${corporationId}/mining/observers/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Paginated record of all mining seen by an observer --- Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/` Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/` Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant
   *
   * @tags Industry
   * @name GetCorporationCorporationIdMiningObserversObserverId
   * @summary Observed corporation mining
   * @request GET:/corporation/{corporation_id}/mining/observers/{observer_id}/
   * @secure
   */
  getCorporationCorporationIdMiningObserversObserverId = (
    corporationId: number,
    observerId: number,
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
         * get_corporation_corporation_id_mining_observers_observer_id_character_id
         * The character that did the mining
         * @format int32
         */
        character_id: number;
        /**
         * get_corporation_corporation_id_mining_observers_observer_id_last_updated
         * last_updated string
         * @format date
         */
        last_updated: string;
        /**
         * get_corporation_corporation_id_mining_observers_observer_id_quantity
         * quantity integer
         * @format int64
         */
        quantity: number;
        /**
         * get_corporation_corporation_id_mining_observers_observer_id_recorded_corporation_id
         * The corporation id of the character at the time data was recorded.
         * @format int32
         */
        recorded_corporation_id: number;
        /**
         * get_corporation_corporation_id_mining_observers_observer_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
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
      path: `/corporation/${corporationId}/mining/observers/${observerId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
