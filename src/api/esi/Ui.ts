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
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Ui<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Set a solar system as autopilot waypoint --- Alternate route: `/dev/ui/autopilot/waypoint/` Alternate route: `/legacy/ui/autopilot/waypoint/` Alternate route: `/v2/ui/autopilot/waypoint/`
   *
   * @tags User Interface
   * @name PostUiAutopilotWaypoint
   * @summary Set Autopilot Waypoint
   * @request POST:/ui/autopilot/waypoint/
   * @secure
   */
  postUiAutopilotWaypoint = (
    query: {
      /**
       * Whether this solar system should be added to the beginning of all waypoints
       * @default false
       */
      add_to_beginning: boolean;
      /**
       * Whether clean other waypoints beforing adding this one
       * @default false
       */
      clear_other_waypoints: boolean;
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * The destination to travel to, can be solar system, station or structure's id
       * @format int64
       */
      destination_id: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/ui/autopilot/waypoint/`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Open the contract window inside the client --- Alternate route: `/dev/ui/openwindow/contract/` Alternate route: `/legacy/ui/openwindow/contract/` Alternate route: `/v1/ui/openwindow/contract/`
   *
   * @tags User Interface
   * @name PostUiOpenwindowContract
   * @summary Open Contract Window
   * @request POST:/ui/openwindow/contract/
   * @secure
   */
  postUiOpenwindowContract = (
    query: {
      /**
       * The contract to open
       * @format int32
       */
      contract_id: number;
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/ui/openwindow/contract/`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Open the information window for a character, corporation or alliance inside the client --- Alternate route: `/dev/ui/openwindow/information/` Alternate route: `/legacy/ui/openwindow/information/` Alternate route: `/v1/ui/openwindow/information/`
   *
   * @tags User Interface
   * @name PostUiOpenwindowInformation
   * @summary Open Information Window
   * @request POST:/ui/openwindow/information/
   * @secure
   */
  postUiOpenwindowInformation = (
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /**
       * The target to open
       * @format int32
       */
      target_id: number;
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/ui/openwindow/information/`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Open the market details window for a specific typeID inside the client --- Alternate route: `/dev/ui/openwindow/marketdetails/` Alternate route: `/legacy/ui/openwindow/marketdetails/` Alternate route: `/v1/ui/openwindow/marketdetails/`
   *
   * @tags User Interface
   * @name PostUiOpenwindowMarketdetails
   * @summary Open Market Details
   * @request POST:/ui/openwindow/marketdetails/
   * @secure
   */
  postUiOpenwindowMarketdetails = (
    query: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Access token to use if unable to set a header */
      token?: string;
      /**
       * The item type to open in market window
       * @format int32
       */
      type_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/ui/openwindow/marketdetails/`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Open the New Mail window, according to settings from the request if applicable --- Alternate route: `/dev/ui/openwindow/newmail/` Alternate route: `/legacy/ui/openwindow/newmail/` Alternate route: `/v1/ui/openwindow/newmail/`
   *
   * @tags User Interface
   * @name PostUiOpenwindowNewmail
   * @summary Open New Mail Window
   * @request POST:/ui/openwindow/newmail/
   * @secure
   */
  postUiOpenwindowNewmail = (
    new_mail: {
      /**
       * post_ui_openwindow_newmail_body
       * body string
       * @maxLength 10000
       */
      body: string;
      /**
       * post_ui_openwindow_newmail_recipients
       * recipients array
       * @maxItems 50
       * @minItems 1
       */
      recipients: number[];
      /**
       * post_ui_openwindow_newmail_subject
       * subject string
       * @maxLength 1000
       */
      subject: string;
      /**
       * post_ui_openwindow_newmail_to_corp_or_alliance_id
       * to_corp_or_alliance_id integer
       * @format int32
       */
      to_corp_or_alliance_id?: number;
      /**
       * post_ui_openwindow_newmail_to_mailing_list_id
       * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
       * @format int32
       */
      to_mailing_list_id?: number;
    },
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
      void,
      | BadRequest
      | Unauthorized
      | Forbidden
      | ErrorLimited
      | {
          /**
           * post_ui_openwindow_newmail_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/ui/openwindow/newmail/`,
      method: "POST",
      query: query,
      body: new_mail,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
