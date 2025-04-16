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

export class Killmails<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Return a single killmail from its ID and hash --- Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/` Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/` Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/` --- This route is cached for up to 30758400 seconds
   *
   * @tags Killmails
   * @name GetKillmailsKillmailIdKillmailHash
   * @summary Get a single killmail
   * @request GET:/killmails/{killmail_id}/{killmail_hash}/
   */
  getKillmailsKillmailIdKillmailHash = (
    killmailHash: string,
    killmailId: number,
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
         * get_killmails_killmail_id_killmail_hash_attackers
         * attackers array
         * @maxItems 10000
         */
        attackers: {
          /**
           * get_killmails_killmail_id_killmail_hash_alliance_id
           * alliance_id integer
           * @format int32
           */
          alliance_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_character_id
           * character_id integer
           * @format int32
           */
          character_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_corporation_id
           * corporation_id integer
           * @format int32
           */
          corporation_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_damage_done
           * damage_done integer
           * @format int32
           */
          damage_done: number;
          /**
           * get_killmails_killmail_id_killmail_hash_faction_id
           * faction_id integer
           * @format int32
           */
          faction_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_final_blow
           * Was the attacker the one to achieve the final blow
           */
          final_blow: boolean;
          /**
           * get_killmails_killmail_id_killmail_hash_security_status
           * Security status for the attacker
           * @format float
           */
          security_status: number;
          /**
           * get_killmails_killmail_id_killmail_hash_ship_type_id
           * What ship was the attacker flying
           * @format int32
           */
          ship_type_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_weapon_type_id
           * What weapon was used by the attacker for the kill
           * @format int32
           */
          weapon_type_id?: number;
        }[];
        /**
         * get_killmails_killmail_id_killmail_hash_killmail_id
         * ID of the killmail
         * @format int32
         */
        killmail_id: number;
        /**
         * get_killmails_killmail_id_killmail_hash_killmail_time
         * Time that the victim was killed and the killmail generated
         * @format date-time
         */
        killmail_time: string;
        /**
         * get_killmails_killmail_id_killmail_hash_moon_id
         * Moon if the kill took place at one
         * @format int32
         */
        moon_id?: number;
        /**
         * get_killmails_killmail_id_killmail_hash_solar_system_id
         * Solar system that the kill took place in
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_killmails_killmail_id_killmail_hash_victim
         * victim object
         */
        victim: {
          /**
           * get_killmails_killmail_id_killmail_hash_victim_alliance_id
           * alliance_id integer
           * @format int32
           */
          alliance_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_victim_character_id
           * character_id integer
           * @format int32
           */
          character_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_victim_corporation_id
           * corporation_id integer
           * @format int32
           */
          corporation_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_damage_taken
           * How much total damage was taken by the victim
           * @format int32
           */
          damage_taken: number;
          /**
           * get_killmails_killmail_id_killmail_hash_victim_faction_id
           * faction_id integer
           * @format int32
           */
          faction_id?: number;
          /**
           * get_killmails_killmail_id_killmail_hash_items
           * items array
           * @maxItems 10000
           */
          items?: {
            /**
             * get_killmails_killmail_id_killmail_hash_flag
             * Flag for the location of the item
             * @format int32
             */
            flag: number;
            /**
             * get_killmails_killmail_id_killmail_hash_item_type_id
             * item_type_id integer
             * @format int32
             */
            item_type_id: number;
            /**
             * get_killmails_killmail_id_killmail_hash_item_items
             * items array
             * @maxItems 10000
             */
            items?: {
              /**
               * get_killmails_killmail_id_killmail_hash_item_flag
               * flag integer
               * @format int32
               */
              flag: number;
              /**
               * get_killmails_killmail_id_killmail_hash_item_item_type_id
               * item_type_id integer
               * @format int32
               */
              item_type_id: number;
              /**
               * get_killmails_killmail_id_killmail_hash_item_quantity_destroyed
               * quantity_destroyed integer
               * @format int64
               */
              quantity_destroyed?: number;
              /**
               * get_killmails_killmail_id_killmail_hash_item_quantity_dropped
               * quantity_dropped integer
               * @format int64
               */
              quantity_dropped?: number;
              /**
               * get_killmails_killmail_id_killmail_hash_item_singleton
               * singleton integer
               * @format int32
               */
              singleton: number;
            }[];
            /**
             * get_killmails_killmail_id_killmail_hash_quantity_destroyed
             * How many of the item were destroyed if any
             * @format int64
             */
            quantity_destroyed?: number;
            /**
             * get_killmails_killmail_id_killmail_hash_quantity_dropped
             * How many of the item were dropped if any
             * @format int64
             */
            quantity_dropped?: number;
            /**
             * get_killmails_killmail_id_killmail_hash_singleton
             * singleton integer
             * @format int32
             */
            singleton: number;
          }[];
          /**
           * get_killmails_killmail_id_killmail_hash_position
           * Coordinates of the victim in Cartesian space relative to the Sun
           */
          position?: {
            /**
             * get_killmails_killmail_id_killmail_hash_x
             * x number
             * @format double
             */
            x: number;
            /**
             * get_killmails_killmail_id_killmail_hash_y
             * y number
             * @format double
             */
            y: number;
            /**
             * get_killmails_killmail_id_killmail_hash_z
             * z number
             * @format double
             */
            z: number;
          };
          /**
           * get_killmails_killmail_id_killmail_hash_victim_ship_type_id
           * The ship that the victim was piloting and was destroyed
           * @format int32
           */
          ship_type_id: number;
        };
        /**
         * get_killmails_killmail_id_killmail_hash_war_id
         * War if the killmail is generated in relation to an official war
         * @format int32
         */
        war_id?: number;
      },
      | void
      | BadRequest
      | ErrorLimited
      | {
          /**
           * get_killmails_killmail_id_killmail_hash_422_unprocessable_entity
           * Unprocessable entity message
           */
          error?: string;
        }
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/killmails/${killmailId}/${killmailHash}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
