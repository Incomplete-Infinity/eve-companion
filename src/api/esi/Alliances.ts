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

export class Alliances<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description List all active player alliances --- Alternate route: `/dev/alliances/` Alternate route: `/legacy/alliances/` Alternate route: `/v1/alliances/` Alternate route: `/v2/alliances/` --- This route is cached for up to 3600 seconds
   *
   * @tags Alliance
   * @name GetAlliances
   * @summary List all alliances
   * @request GET:/alliances/
   */
  getAlliances = (
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
      path: `/alliances/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Public information about an alliance --- Alternate route: `/dev/alliances/{alliance_id}/` Alternate route: `/legacy/alliances/{alliance_id}/` Alternate route: `/v3/alliances/{alliance_id}/` Alternate route: `/v4/alliances/{alliance_id}/` --- This route is cached for up to 3600 seconds
   *
   * @tags Alliance
   * @name GetAlliancesAllianceId
   * @summary Get alliance information
   * @request GET:/alliances/{alliance_id}/
   */
  getAlliancesAllianceId = (
    allianceId: number,
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
         * get_alliances_alliance_id_creator_corporation_id
         * ID of the corporation that created the alliance
         * @format int32
         */
        creator_corporation_id: number;
        /**
         * get_alliances_alliance_id_creator_id
         * ID of the character that created the alliance
         * @format int32
         */
        creator_id: number;
        /**
         * get_alliances_alliance_id_date_founded
         * date_founded string
         * @format date-time
         */
        date_founded: string;
        /**
         * get_alliances_alliance_id_executor_corporation_id
         * the executor corporation ID, if this alliance is not closed
         * @format int32
         */
        executor_corporation_id?: number;
        /**
         * get_alliances_alliance_id_faction_id
         * Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
         * @format int32
         */
        faction_id?: number;
        /**
         * get_alliances_alliance_id_name
         * the full name of the alliance
         */
        name: string;
        /**
         * get_alliances_alliance_id_ticker
         * the short name of the alliance
         */
        ticker: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_alliances_alliance_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/alliances/${allianceId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Return contacts of an alliance --- Alternate route: `/dev/alliances/{alliance_id}/contacts/` Alternate route: `/v2/alliances/{alliance_id}/contacts/` --- This route is cached for up to 300 seconds
   *
   * @tags Contacts
   * @name GetAlliancesAllianceIdContacts
   * @summary Get alliance contacts
   * @request GET:/alliances/{alliance_id}/contacts/
   * @secure
   */
  getAlliancesAllianceIdContacts = (
    allianceId: number,
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
         * get_alliances_alliance_id_contacts_contact_id
         * contact_id integer
         * @format int32
         */
        contact_id: number;
        /**
         * get_alliances_alliance_id_contacts_contact_type
         * contact_type string
         */
        contact_type: "character" | "corporation" | "alliance" | "faction";
        /**
         * get_alliances_alliance_id_contacts_label_ids
         * label_ids array
         * @maxItems 63
         */
        label_ids?: number[];
        /**
         * get_alliances_alliance_id_contacts_standing
         * Standing of the contact
         * @format float
         */
        standing: number;
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
      path: `/alliances/${allianceId}/contacts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Return custom labels for an alliance's contacts --- Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/` Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/` Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/` --- This route is cached for up to 300 seconds
   *
   * @tags Contacts
   * @name GetAlliancesAllianceIdContactsLabels
   * @summary Get alliance contact labels
   * @request GET:/alliances/{alliance_id}/contacts/labels/
   * @secure
   */
  getAlliancesAllianceIdContactsLabels = (
    allianceId: number,
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_alliances_alliance_id_contacts_labels_label_id
         * label_id integer
         * @format int64
         */
        label_id: number;
        /**
         * get_alliances_alliance_id_contacts_labels_label_name
         * label_name string
         */
        label_name: string;
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
      path: `/alliances/${allianceId}/contacts/labels/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List all current member corporations of an alliance --- Alternate route: `/dev/alliances/{alliance_id}/corporations/` Alternate route: `/legacy/alliances/{alliance_id}/corporations/` Alternate route: `/v1/alliances/{alliance_id}/corporations/` Alternate route: `/v2/alliances/{alliance_id}/corporations/` --- This route is cached for up to 3600 seconds
   *
   * @tags Alliance
   * @name GetAlliancesAllianceIdCorporations
   * @summary List alliance's corporations
   * @request GET:/alliances/{alliance_id}/corporations/
   */
  getAlliancesAllianceIdCorporations = (
    allianceId: number,
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
      path: `/alliances/${allianceId}/corporations/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get the icon urls for a alliance --- Alternate route: `/dev/alliances/{alliance_id}/icons/` Alternate route: `/legacy/alliances/{alliance_id}/icons/` Alternate route: `/v1/alliances/{alliance_id}/icons/` Alternate route: `/v2/alliances/{alliance_id}/icons/` --- This route expires daily at 11:05
   *
   * @tags Alliance
   * @name GetAlliancesAllianceIdIcons
   * @summary Get alliance icon
   * @request GET:/alliances/{alliance_id}/icons/
   */
  getAlliancesAllianceIdIcons = (
    allianceId: number,
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
         * get_alliances_alliance_id_icons_px128x128
         * px128x128 string
         */
        px128x128?: string;
        /**
         * get_alliances_alliance_id_icons_px64x64
         * px64x64 string
         */
        px64x64?: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_alliances_alliance_id_icons_error
           * error message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/alliances/${allianceId}/icons/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
