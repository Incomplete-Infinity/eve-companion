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

export class Fleets<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return details about a fleet --- Alternate route: `/dev/fleets/{fleet_id}/` Alternate route: `/legacy/fleets/{fleet_id}/` Alternate route: `/v1/fleets/{fleet_id}/` --- This route is cached for up to 5 seconds
   *
   * @tags Fleets
   * @name GetFleetsFleetId
   * @summary Get fleet information
   * @request GET:/fleets/{fleet_id}/
   * @secure
   */
  getFleetsFleetId = (
    fleetId: number,
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
         * get_fleets_fleet_id_is_free_move
         * Is free-move enabled
         */
        is_free_move: boolean;
        /**
         * get_fleets_fleet_id_is_registered
         * Does the fleet have an active fleet advertisement
         */
        is_registered: boolean;
        /**
         * get_fleets_fleet_id_is_voice_enabled
         * Is EVE Voice enabled
         */
        is_voice_enabled: boolean;
        /**
         * get_fleets_fleet_id_motd
         * Fleet MOTD in CCP flavoured HTML
         */
        motd: string;
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_fleets_fleet_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update settings about a fleet --- Alternate route: `/dev/fleets/{fleet_id}/` Alternate route: `/legacy/fleets/{fleet_id}/` Alternate route: `/v1/fleets/{fleet_id}/`
   *
   * @tags Fleets
   * @name PutFleetsFleetId
   * @summary Update fleet
   * @request PUT:/fleets/{fleet_id}/
   * @secure
   */
  putFleetsFleetId = (
    fleetId: number,
    new_settings: {
      /**
       * put_fleets_fleet_id_is_free_move
       * Should free-move be enabled in the fleet
       */
      is_free_move?: boolean;
      /**
       * put_fleets_fleet_id_motd
       * New fleet MOTD in CCP flavoured HTML
       */
      motd?: string;
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
      | {
          /**
           * put_fleets_fleet_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/`,
      method: "PUT",
      query: query,
      body: new_settings,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Return information about fleet members --- Alternate route: `/dev/fleets/{fleet_id}/members/` Alternate route: `/legacy/fleets/{fleet_id}/members/` Alternate route: `/v1/fleets/{fleet_id}/members/` --- This route is cached for up to 5 seconds
   *
   * @tags Fleets
   * @name GetFleetsFleetIdMembers
   * @summary Get fleet members
   * @request GET:/fleets/{fleet_id}/members/
   * @secure
   */
  getFleetsFleetIdMembers = (
    fleetId: number,
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
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_fleets_fleet_id_members_character_id
         * character_id integer
         * @format int32
         */
        character_id: number;
        /**
         * get_fleets_fleet_id_members_join_time
         * join_time string
         * @format date-time
         */
        join_time: string;
        /**
         * get_fleets_fleet_id_members_role
         * Member’s role in fleet
         */
        role:
          | "fleet_commander"
          | "wing_commander"
          | "squad_commander"
          | "squad_member";
        /**
         * get_fleets_fleet_id_members_role_name
         * Localized role names
         */
        role_name: string;
        /**
         * get_fleets_fleet_id_members_ship_type_id
         * ship_type_id integer
         * @format int32
         */
        ship_type_id: number;
        /**
         * get_fleets_fleet_id_members_solar_system_id
         * Solar system the member is located in
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_fleets_fleet_id_members_squad_id
         * ID of the squad the member is in. If not applicable, will be set to -1
         * @format int64
         */
        squad_id: number;
        /**
         * get_fleets_fleet_id_members_station_id
         * Station in which the member is docked in, if applicable
         * @format int64
         */
        station_id?: number;
        /**
         * get_fleets_fleet_id_members_takes_fleet_warp
         * Whether the member take fleet warps
         */
        takes_fleet_warp: boolean;
        /**
         * get_fleets_fleet_id_members_wing_id
         * ID of the wing the member is in. If not applicable, will be set to -1
         * @format int64
         */
        wing_id: number;
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_fleets_fleet_id_members_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/members/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI --- Alternate route: `/dev/fleets/{fleet_id}/members/` Alternate route: `/legacy/fleets/{fleet_id}/members/` Alternate route: `/v1/fleets/{fleet_id}/members/`
   *
   * @tags Fleets
   * @name PostFleetsFleetIdMembers
   * @summary Create fleet invitation
   * @request POST:/fleets/{fleet_id}/members/
   * @secure
   */
  postFleetsFleetIdMembers = (
    fleetId: number,
    invitation: {
      /**
       * post_fleets_fleet_id_members_character_id
       * The character you want to invite
       * @format int32
       */
      character_id: number;
      /**
       * post_fleets_fleet_id_members_role
       * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
       */
      role:
        | "fleet_commander"
        | "wing_commander"
        | "squad_commander"
        | "squad_member";
      /**
       * post_fleets_fleet_id_members_squad_id
       * squad_id integer
       * @format int64
       * @min 0
       */
      squad_id?: number;
      /**
       * post_fleets_fleet_id_members_wing_id
       * wing_id integer
       * @format int64
       * @min 0
       */
      wing_id?: number;
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
      | {
          /**
           * post_fleets_fleet_id_members_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | {
          /**
           * post_fleets_fleet_id_members_error
           * error message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/members/`,
      method: "POST",
      query: query,
      body: invitation,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Kick a fleet member --- Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
   *
   * @tags Fleets
   * @name DeleteFleetsFleetIdMembersMemberId
   * @summary Kick fleet member
   * @request DELETE:/fleets/{fleet_id}/members/{member_id}/
   * @secure
   */
  deleteFleetsFleetIdMembersMemberId = (
    fleetId: number,
    memberId: number,
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
      | {
          /**
           * delete_fleets_fleet_id_members_member_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/members/${memberId}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Move a fleet member around --- Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
   *
   * @tags Fleets
   * @name PutFleetsFleetIdMembersMemberId
   * @summary Move fleet member
   * @request PUT:/fleets/{fleet_id}/members/{member_id}/
   * @secure
   */
  putFleetsFleetIdMembersMemberId = (
    fleetId: number,
    memberId: number,
    movement: {
      /**
       * put_fleets_fleet_id_members_member_id_role
       * If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
       */
      role:
        | "fleet_commander"
        | "wing_commander"
        | "squad_commander"
        | "squad_member";
      /**
       * put_fleets_fleet_id_members_member_id_squad_id
       * squad_id integer
       * @format int64
       * @min 0
       */
      squad_id?: number;
      /**
       * put_fleets_fleet_id_members_member_id_wing_id
       * wing_id integer
       * @format int64
       * @min 0
       */
      wing_id?: number;
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
      | {
          /**
           * put_fleets_fleet_id_members_member_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | {
          /**
           * put_fleets_fleet_id_members_member_id_error
           * error message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/members/${memberId}/`,
      method: "PUT",
      query: query,
      body: movement,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete a fleet squad, only empty squads can be deleted --- Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * @tags Fleets
   * @name DeleteFleetsFleetIdSquadsSquadId
   * @summary Delete fleet squad
   * @request DELETE:/fleets/{fleet_id}/squads/{squad_id}/
   * @secure
   */
  deleteFleetsFleetIdSquadsSquadId = (
    fleetId: number,
    squadId: number,
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
      | {
          /**
           * delete_fleets_fleet_id_squads_squad_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/squads/${squadId}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Rename a fleet squad --- Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * @tags Fleets
   * @name PutFleetsFleetIdSquadsSquadId
   * @summary Rename fleet squad
   * @request PUT:/fleets/{fleet_id}/squads/{squad_id}/
   * @secure
   */
  putFleetsFleetIdSquadsSquadId = (
    fleetId: number,
    squadId: number,
    naming: {
      /**
       * put_fleets_fleet_id_squads_squad_id_name
       * name string
       * @maxLength 10
       */
      name: string;
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
      | {
          /**
           * put_fleets_fleet_id_squads_squad_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/squads/${squadId}/`,
      method: "PUT",
      query: query,
      body: naming,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Return information about wings in a fleet --- Alternate route: `/dev/fleets/{fleet_id}/wings/` Alternate route: `/legacy/fleets/{fleet_id}/wings/` Alternate route: `/v1/fleets/{fleet_id}/wings/` --- This route is cached for up to 5 seconds
   *
   * @tags Fleets
   * @name GetFleetsFleetIdWings
   * @summary Get fleet wings
   * @request GET:/fleets/{fleet_id}/wings/
   * @secure
   */
  getFleetsFleetIdWings = (
    fleetId: number,
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
      /** Access token to use if unable to set a header */
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /**
         * get_fleets_fleet_id_wings_id
         * id integer
         * @format int64
         */
        id: number;
        /**
         * get_fleets_fleet_id_wings_name
         * name string
         */
        name: string;
        /**
         * get_fleets_fleet_id_wings_squads
         * squads array
         * @maxItems 25
         */
        squads: {
          /**
           * get_fleets_fleet_id_wings_squad_id
           * id integer
           * @format int64
           */
          id: number;
          /**
           * get_fleets_fleet_id_wings_squad_name
           * name string
           */
          name: string;
        }[];
      }[],
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_fleets_fleet_id_wings_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/wings/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create a new wing in a fleet --- Alternate route: `/dev/fleets/{fleet_id}/wings/` Alternate route: `/legacy/fleets/{fleet_id}/wings/` Alternate route: `/v1/fleets/{fleet_id}/wings/`
   *
   * @tags Fleets
   * @name PostFleetsFleetIdWings
   * @summary Create fleet wing
   * @request POST:/fleets/{fleet_id}/wings/
   * @secure
   */
  postFleetsFleetIdWings = (
    fleetId: number,
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
         * post_fleets_fleet_id_wings_wing_id
         * The wing_id of the newly created wing
         * @format int64
         */
        wing_id: number;
      },
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * post_fleets_fleet_id_wings_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/wings/`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * @tags Fleets
   * @name DeleteFleetsFleetIdWingsWingId
   * @summary Delete fleet wing
   * @request DELETE:/fleets/{fleet_id}/wings/{wing_id}/
   * @secure
   */
  deleteFleetsFleetIdWingsWingId = (
    fleetId: number,
    wingId: number,
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
      | {
          /**
           * delete_fleets_fleet_id_wings_wing_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/wings/${wingId}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Rename a fleet wing --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * @tags Fleets
   * @name PutFleetsFleetIdWingsWingId
   * @summary Rename fleet wing
   * @request PUT:/fleets/{fleet_id}/wings/{wing_id}/
   * @secure
   */
  putFleetsFleetIdWingsWingId = (
    fleetId: number,
    wingId: number,
    naming: {
      /**
       * put_fleets_fleet_id_wings_wing_id_name
       * name string
       * @maxLength 10
       */
      name: string;
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
      | {
          /**
           * put_fleets_fleet_id_wings_wing_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/wings/${wingId}/`,
      method: "PUT",
      query: query,
      body: naming,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Create a new squad in a fleet --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/` Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/` Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`
   *
   * @tags Fleets
   * @name PostFleetsFleetIdWingsWingIdSquads
   * @summary Create fleet squad
   * @request POST:/fleets/{fleet_id}/wings/{wing_id}/squads/
   * @secure
   */
  postFleetsFleetIdWingsWingIdSquads = (
    fleetId: number,
    wingId: number,
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
         * post_fleets_fleet_id_wings_wing_id_squads_squad_id
         * The squad_id of the newly created squad
         * @format int64
         */
        squad_id: number;
      },
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * post_fleets_fleet_id_wings_wing_id_squads_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/fleets/${fleetId}/wings/${wingId}/squads/`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
