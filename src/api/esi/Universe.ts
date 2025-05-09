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

export class Universe<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get all character ancestries --- Alternate route: `/legacy/universe/ancestries/` Alternate route: `/v1/universe/ancestries/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseAncestries
   * @summary Get ancestries
   * @request GET:/universe/ancestries/
   */
  getUniverseAncestries = (
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
         * get_universe_ancestries_bloodline_id
         * The bloodline associated with this ancestry
         * @format int32
         */
        bloodline_id: number;
        /**
         * get_universe_ancestries_description
         * description string
         */
        description: string;
        /**
         * get_universe_ancestries_icon_id
         * icon_id integer
         * @format int32
         */
        icon_id?: number;
        /**
         * get_universe_ancestries_id
         * id integer
         * @format int32
         */
        id: number;
        /**
         * get_universe_ancestries_name
         * name string
         */
        name: string;
        /**
         * get_universe_ancestries_short_description
         * short_description string
         */
        short_description?: string;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/ancestries/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on an asteroid belt --- Alternate route: `/legacy/universe/asteroid_belts/{asteroid_belt_id}/` Alternate route: `/v1/universe/asteroid_belts/{asteroid_belt_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseAsteroidBeltsAsteroidBeltId
   * @summary Get asteroid belt information
   * @request GET:/universe/asteroid_belts/{asteroid_belt_id}/
   */
  getUniverseAsteroidBeltsAsteroidBeltId = (
    asteroidBeltId: number,
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
         * get_universe_asteroid_belts_asteroid_belt_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_asteroid_belts_asteroid_belt_id_position
         * position object
         */
        position: {
          /**
           * get_universe_asteroid_belts_asteroid_belt_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_asteroid_belts_asteroid_belt_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_asteroid_belts_asteroid_belt_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_asteroid_belts_asteroid_belt_id_system_id
         * The solar system this asteroid belt is in
         * @format int32
         */
        system_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_asteroid_belts_asteroid_belt_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/asteroid_belts/${asteroidBeltId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of bloodlines --- Alternate route: `/legacy/universe/bloodlines/` Alternate route: `/v1/universe/bloodlines/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseBloodlines
   * @summary Get bloodlines
   * @request GET:/universe/bloodlines/
   */
  getUniverseBloodlines = (
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
         * get_universe_bloodlines_bloodline_id
         * bloodline_id integer
         * @format int32
         */
        bloodline_id: number;
        /**
         * get_universe_bloodlines_charisma
         * charisma integer
         * @format int32
         */
        charisma: number;
        /**
         * get_universe_bloodlines_corporation_id
         * corporation_id integer
         * @format int32
         */
        corporation_id: number;
        /**
         * get_universe_bloodlines_description
         * description string
         */
        description: string;
        /**
         * get_universe_bloodlines_intelligence
         * intelligence integer
         * @format int32
         */
        intelligence: number;
        /**
         * get_universe_bloodlines_memory
         * memory integer
         * @format int32
         */
        memory: number;
        /**
         * get_universe_bloodlines_name
         * name string
         */
        name: string;
        /**
         * get_universe_bloodlines_perception
         * perception integer
         * @format int32
         */
        perception: number;
        /**
         * get_universe_bloodlines_race_id
         * race_id integer
         * @format int32
         */
        race_id: number;
        /**
         * get_universe_bloodlines_ship_type_id
         * ship_type_id integer
         * @format int32
         */
        ship_type_id?: number | null;
        /**
         * get_universe_bloodlines_willpower
         * willpower integer
         * @format int32
         */
        willpower: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/bloodlines/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of item categories --- Alternate route: `/legacy/universe/categories/` Alternate route: `/v1/universe/categories/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseCategories
   * @summary Get item categories
   * @request GET:/universe/categories/
   */
  getUniverseCategories = (
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
      path: `/universe/categories/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information of an item category --- Alternate route: `/legacy/universe/categories/{category_id}/` Alternate route: `/v1/universe/categories/{category_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseCategoriesCategoryId
   * @summary Get item category information
   * @request GET:/universe/categories/{category_id}/
   */
  getUniverseCategoriesCategoryId = (
    categoryId: number,
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
         * get_universe_categories_category_id_category_id
         * category_id integer
         * @format int32
         */
        category_id: number;
        /**
         * get_universe_categories_category_id_groups
         * groups array
         * @maxItems 10000
         */
        groups: number[];
        /**
         * get_universe_categories_category_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_categories_category_id_published
         * published boolean
         */
        published: boolean;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_categories_category_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/categories/${categoryId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of constellations --- Alternate route: `/legacy/universe/constellations/` Alternate route: `/v1/universe/constellations/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseConstellations
   * @summary Get constellations
   * @request GET:/universe/constellations/
   */
  getUniverseConstellations = (
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
      path: `/universe/constellations/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a constellation --- Alternate route: `/legacy/universe/constellations/{constellation_id}/` Alternate route: `/v1/universe/constellations/{constellation_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseConstellationsConstellationId
   * @summary Get constellation information
   * @request GET:/universe/constellations/{constellation_id}/
   */
  getUniverseConstellationsConstellationId = (
    constellationId: number,
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
         * get_universe_constellations_constellation_id_constellation_id
         * constellation_id integer
         * @format int32
         */
        constellation_id: number;
        /**
         * get_universe_constellations_constellation_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_constellations_constellation_id_position
         * position object
         */
        position: {
          /**
           * get_universe_constellations_constellation_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_constellations_constellation_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_constellations_constellation_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_constellations_constellation_id_region_id
         * The region this constellation is in
         * @format int32
         */
        region_id: number;
        /**
         * get_universe_constellations_constellation_id_systems
         * systems array
         * @maxItems 10000
         */
        systems: number[];
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_constellations_constellation_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/constellations/${constellationId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of factions --- Alternate route: `/dev/universe/factions/` Alternate route: `/v2/universe/factions/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseFactions
   * @summary Get factions
   * @request GET:/universe/factions/
   */
  getUniverseFactions = (
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
         * get_universe_factions_corporation_id
         * corporation_id integer
         * @format int32
         */
        corporation_id?: number;
        /**
         * get_universe_factions_description
         * description string
         */
        description: string;
        /**
         * get_universe_factions_faction_id
         * faction_id integer
         * @format int32
         */
        faction_id: number;
        /**
         * get_universe_factions_is_unique
         * is_unique boolean
         */
        is_unique: boolean;
        /**
         * get_universe_factions_militia_corporation_id
         * militia_corporation_id integer
         * @format int32
         */
        militia_corporation_id?: number;
        /**
         * get_universe_factions_name
         * name string
         */
        name: string;
        /**
         * get_universe_factions_size_factor
         * size_factor number
         * @format float
         */
        size_factor: number;
        /**
         * get_universe_factions_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id?: number;
        /**
         * get_universe_factions_station_count
         * station_count integer
         * @format int32
         */
        station_count: number;
        /**
         * get_universe_factions_station_system_count
         * station_system_count integer
         * @format int32
         */
        station_system_count: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/factions/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of graphics --- Alternate route: `/legacy/universe/graphics/` Alternate route: `/v1/universe/graphics/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseGraphics
   * @summary Get graphics
   * @request GET:/universe/graphics/
   */
  getUniverseGraphics = (
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
      path: `/universe/graphics/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a graphic --- Alternate route: `/dev/universe/graphics/{graphic_id}/` Alternate route: `/legacy/universe/graphics/{graphic_id}/` Alternate route: `/v1/universe/graphics/{graphic_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseGraphicsGraphicId
   * @summary Get graphic information
   * @request GET:/universe/graphics/{graphic_id}/
   */
  getUniverseGraphicsGraphicId = (
    graphicId: number,
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
         * get_universe_graphics_graphic_id_collision_file
         * collision_file string
         */
        collision_file?: string;
        /**
         * get_universe_graphics_graphic_id_graphic_file
         * graphic_file string
         */
        graphic_file?: string;
        /**
         * get_universe_graphics_graphic_id_graphic_id
         * graphic_id integer
         * @format int32
         */
        graphic_id: number;
        /**
         * get_universe_graphics_graphic_id_icon_folder
         * icon_folder string
         */
        icon_folder?: string;
        /**
         * get_universe_graphics_graphic_id_sof_dna
         * sof_dna string
         */
        sof_dna?: string;
        /**
         * get_universe_graphics_graphic_id_sof_fation_name
         * sof_fation_name string
         */
        sof_fation_name?: string;
        /**
         * get_universe_graphics_graphic_id_sof_hull_name
         * sof_hull_name string
         */
        sof_hull_name?: string;
        /**
         * get_universe_graphics_graphic_id_sof_race_name
         * sof_race_name string
         */
        sof_race_name?: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_graphics_graphic_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/graphics/${graphicId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of item groups --- Alternate route: `/legacy/universe/groups/` Alternate route: `/v1/universe/groups/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseGroups
   * @summary Get item groups
   * @request GET:/universe/groups/
   */
  getUniverseGroups = (
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
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/groups/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on an item group --- Alternate route: `/dev/universe/groups/{group_id}/` Alternate route: `/legacy/universe/groups/{group_id}/` Alternate route: `/v1/universe/groups/{group_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseGroupsGroupId
   * @summary Get item group information
   * @request GET:/universe/groups/{group_id}/
   */
  getUniverseGroupsGroupId = (
    groupId: number,
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
         * get_universe_groups_group_id_category_id
         * category_id integer
         * @format int32
         */
        category_id: number;
        /**
         * get_universe_groups_group_id_group_id
         * group_id integer
         * @format int32
         */
        group_id: number;
        /**
         * get_universe_groups_group_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_groups_group_id_published
         * published boolean
         */
        published: boolean;
        /**
         * get_universe_groups_group_id_types
         * types array
         * @maxItems 10000
         */
        types: number[];
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_groups_group_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/groups/${groupId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours --- Alternate route: `/dev/universe/ids/` Alternate route: `/legacy/universe/ids/` Alternate route: `/v1/universe/ids/`
   *
   * @tags Universe
   * @name PostUniverseIds
   * @summary Bulk names to IDs
   * @request POST:/universe/ids/
   */
  postUniverseIds = (
    names: string[],
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
         * post_universe_ids_agents
         * agents array
         * @maxItems 500
         */
        agents?: {
          /**
           * post_universe_ids_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_alliances
         * alliances array
         * @maxItems 500
         */
        alliances?: {
          /**
           * post_universe_ids_alliance_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_alliance_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_characters
         * characters array
         * @maxItems 500
         */
        characters?: {
          /**
           * post_universe_ids_character_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_character_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_constellations
         * constellations array
         * @maxItems 500
         */
        constellations?: {
          /**
           * post_universe_ids_constellation_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_constellation_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_corporations
         * corporations array
         * @maxItems 500
         */
        corporations?: {
          /**
           * post_universe_ids_corporation_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_corporation_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_factions
         * factions array
         * @maxItems 500
         */
        factions?: {
          /**
           * post_universe_ids_faction_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_faction_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_inventory_types
         * inventory_types array
         * @maxItems 500
         */
        inventory_types?: {
          /**
           * post_universe_ids_inventory_type_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_inventory_type_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_regions
         * regions array
         * @maxItems 500
         */
        regions?: {
          /**
           * post_universe_ids_region_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_region_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_stations
         * stations array
         * @maxItems 500
         */
        stations?: {
          /**
           * post_universe_ids_station_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_station_name
           * name string
           */
          name?: string;
        }[];
        /**
         * post_universe_ids_systems
         * systems array
         * @maxItems 500
         */
        systems?: {
          /**
           * post_universe_ids_system_id
           * id integer
           * @format int32
           */
          id?: number;
          /**
           * post_universe_ids_system_name
           * name string
           */
          name?: string;
        }[];
      },
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/ids/`,
      method: "POST",
      query: query,
      body: names,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a moon --- Alternate route: `/legacy/universe/moons/{moon_id}/` Alternate route: `/v1/universe/moons/{moon_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseMoonsMoonId
   * @summary Get moon information
   * @request GET:/universe/moons/{moon_id}/
   */
  getUniverseMoonsMoonId = (
    moonId: number,
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
         * get_universe_moons_moon_id_moon_id
         * moon_id integer
         * @format int32
         */
        moon_id: number;
        /**
         * get_universe_moons_moon_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_moons_moon_id_position
         * position object
         */
        position: {
          /**
           * get_universe_moons_moon_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_moons_moon_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_moons_moon_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_moons_moon_id_system_id
         * The solar system this moon is in
         * @format int32
         */
        system_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_moons_moon_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/moons/${moonId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions --- Alternate route: `/dev/universe/names/` Alternate route: `/legacy/universe/names/` Alternate route: `/v2/universe/names/` Alternate route: `/v3/universe/names/`
   *
   * @tags Universe
   * @name PostUniverseNames
   * @summary Get names and categories for a set of IDs
   * @request POST:/universe/names/
   */
  postUniverseNames = (
    ids: number[],
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
         * post_universe_names_category
         * category string
         */
        category:
          | "alliance"
          | "character"
          | "constellation"
          | "corporation"
          | "inventory_type"
          | "region"
          | "solar_system"
          | "station"
          | "faction";
        /**
         * post_universe_names_id
         * id integer
         * @format int32
         */
        id: number;
        /**
         * post_universe_names_name
         * name string
         */
        name: string;
      }[],
      | BadRequest
      | {
          /**
           * post_universe_names_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/names/`,
      method: "POST",
      query: query,
      body: ids,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a planet --- Alternate route: `/legacy/universe/planets/{planet_id}/` Alternate route: `/v1/universe/planets/{planet_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniversePlanetsPlanetId
   * @summary Get planet information
   * @request GET:/universe/planets/{planet_id}/
   */
  getUniversePlanetsPlanetId = (
    planetId: number,
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
         * get_universe_planets_planet_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_planets_planet_id_planet_id
         * planet_id integer
         * @format int32
         */
        planet_id: number;
        /**
         * get_universe_planets_planet_id_position
         * position object
         */
        position: {
          /**
           * get_universe_planets_planet_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_planets_planet_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_planets_planet_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_planets_planet_id_system_id
         * The solar system this planet is in
         * @format int32
         */
        system_id: number;
        /**
         * get_universe_planets_planet_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_planets_planet_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/planets/${planetId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of character races --- Alternate route: `/dev/universe/races/` Alternate route: `/legacy/universe/races/` Alternate route: `/v1/universe/races/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseRaces
   * @summary Get character races
   * @request GET:/universe/races/
   */
  getUniverseRaces = (
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
         * get_universe_races_alliance_id
         * The alliance generally associated with this race
         * @format int32
         */
        alliance_id: number;
        /**
         * get_universe_races_description
         * description string
         */
        description: string;
        /**
         * get_universe_races_name
         * name string
         */
        name: string;
        /**
         * get_universe_races_race_id
         * race_id integer
         * @format int32
         */
        race_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/races/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of regions --- Alternate route: `/legacy/universe/regions/` Alternate route: `/v1/universe/regions/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseRegions
   * @summary Get regions
   * @request GET:/universe/regions/
   */
  getUniverseRegions = (
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
      path: `/universe/regions/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a region --- Alternate route: `/legacy/universe/regions/{region_id}/` Alternate route: `/v1/universe/regions/{region_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseRegionsRegionId
   * @summary Get region information
   * @request GET:/universe/regions/{region_id}/
   */
  getUniverseRegionsRegionId = (
    regionId: number,
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
         * get_universe_regions_region_id_constellations
         * constellations array
         * @maxItems 1000
         */
        constellations: number[];
        /**
         * get_universe_regions_region_id_description
         * description string
         */
        description?: string;
        /**
         * get_universe_regions_region_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_regions_region_id_region_id
         * region_id integer
         * @format int32
         */
        region_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_regions_region_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/regions/${regionId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a planetary factory schematic --- Alternate route: `/dev/universe/schematics/{schematic_id}/` Alternate route: `/legacy/universe/schematics/{schematic_id}/` Alternate route: `/v1/universe/schematics/{schematic_id}/` --- This route is cached for up to 3600 seconds
   *
   * @tags Planetary Interaction
   * @name GetUniverseSchematicsSchematicId
   * @summary Get schematic information
   * @request GET:/universe/schematics/{schematic_id}/
   */
  getUniverseSchematicsSchematicId = (
    schematicId: number,
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
         * get_universe_schematics_schematic_id_cycle_time
         * Time in seconds to process a run
         * @format int32
         */
        cycle_time: number;
        /**
         * get_universe_schematics_schematic_id_schematic_name
         * schematic_name string
         */
        schematic_name: string;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_schematics_schematic_id_error
           * error message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/schematics/${schematicId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a stargate --- Alternate route: `/legacy/universe/stargates/{stargate_id}/` Alternate route: `/v1/universe/stargates/{stargate_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseStargatesStargateId
   * @summary Get stargate information
   * @request GET:/universe/stargates/{stargate_id}/
   */
  getUniverseStargatesStargateId = (
    stargateId: number,
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
         * get_universe_stargates_stargate_id_destination
         * destination object
         */
        destination: {
          /**
           * get_universe_stargates_stargate_id_destination_stargate_id
           * The stargate this stargate connects to
           * @format int32
           */
          stargate_id: number;
          /**
           * get_universe_stargates_stargate_id_destination_system_id
           * The solar system this stargate connects to
           * @format int32
           */
          system_id: number;
        };
        /**
         * get_universe_stargates_stargate_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_stargates_stargate_id_position
         * position object
         */
        position: {
          /**
           * get_universe_stargates_stargate_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_stargates_stargate_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_stargates_stargate_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_stargates_stargate_id_stargate_id
         * stargate_id integer
         * @format int32
         */
        stargate_id: number;
        /**
         * get_universe_stargates_stargate_id_system_id
         * The solar system this stargate is in
         * @format int32
         */
        system_id: number;
        /**
         * get_universe_stargates_stargate_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_stargates_stargate_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/stargates/${stargateId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a star --- Alternate route: `/legacy/universe/stars/{star_id}/` Alternate route: `/v1/universe/stars/{star_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseStarsStarId
   * @summary Get star information
   * @request GET:/universe/stars/{star_id}/
   */
  getUniverseStarsStarId = (
    starId: number,
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
         * get_universe_stars_star_id_age
         * Age of star in years
         * @format int64
         */
        age: number;
        /**
         * get_universe_stars_star_id_luminosity
         * luminosity number
         * @format float
         */
        luminosity: number;
        /**
         * get_universe_stars_star_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_stars_star_id_radius
         * radius integer
         * @format int64
         */
        radius: number;
        /**
         * get_universe_stars_star_id_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_universe_stars_star_id_spectral_class
         * spectral_class string
         */
        spectral_class:
          | "K2 V"
          | "K4 V"
          | "G2 V"
          | "G8 V"
          | "M7 V"
          | "K7 V"
          | "M2 V"
          | "K5 V"
          | "M3 V"
          | "G0 V"
          | "G7 V"
          | "G3 V"
          | "F9 V"
          | "G5 V"
          | "F6 V"
          | "K8 V"
          | "K9 V"
          | "K6 V"
          | "G9 V"
          | "G6 V"
          | "G4 VI"
          | "G4 V"
          | "F8 V"
          | "F2 V"
          | "F1 V"
          | "K3 V"
          | "F0 VI"
          | "G1 VI"
          | "G0 VI"
          | "K1 V"
          | "M4 V"
          | "M1 V"
          | "M6 V"
          | "M0 V"
          | "K2 IV"
          | "G2 VI"
          | "K0 V"
          | "K5 IV"
          | "F5 VI"
          | "G6 VI"
          | "F6 VI"
          | "F2 IV"
          | "G3 VI"
          | "M8 V"
          | "F1 VI"
          | "K1 IV"
          | "F7 V"
          | "G5 VI"
          | "M5 V"
          | "G7 VI"
          | "F5 V"
          | "F4 VI"
          | "F8 VI"
          | "K3 IV"
          | "F4 IV"
          | "F0 V"
          | "G7 IV"
          | "G8 VI"
          | "F2 VI"
          | "F4 V"
          | "F7 VI"
          | "F3 V"
          | "G1 V"
          | "G9 VI"
          | "F3 IV"
          | "F9 VI"
          | "M9 V"
          | "K0 IV"
          | "F1 IV"
          | "G4 IV"
          | "F3 VI"
          | "K4 IV"
          | "G5 IV"
          | "G3 IV"
          | "G1 IV"
          | "K7 IV"
          | "G0 IV"
          | "K6 IV"
          | "K9 IV"
          | "G2 IV"
          | "F9 IV"
          | "F0 IV"
          | "K8 IV"
          | "G8 IV"
          | "F6 IV"
          | "F5 IV"
          | "A0"
          | "A0IV"
          | "A0IV2";
        /**
         * get_universe_stars_star_id_temperature
         * temperature integer
         * @format int32
         */
        temperature: number;
        /**
         * get_universe_stars_star_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      },
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/stars/${starId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a station --- Alternate route: `/dev/universe/stations/{station_id}/` Alternate route: `/v2/universe/stations/{station_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseStationsStationId
   * @summary Get station information
   * @request GET:/universe/stations/{station_id}/
   */
  getUniverseStationsStationId = (
    stationId: number,
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
         * get_universe_stations_station_id_max_dockable_ship_volume
         * max_dockable_ship_volume number
         * @format float
         */
        max_dockable_ship_volume: number;
        /**
         * get_universe_stations_station_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_stations_station_id_office_rental_cost
         * office_rental_cost number
         * @format float
         */
        office_rental_cost: number;
        /**
         * get_universe_stations_station_id_owner
         * ID of the corporation that controls this station
         * @format int32
         */
        owner?: number;
        /**
         * get_universe_stations_station_id_position
         * position object
         */
        position: {
          /**
           * get_universe_stations_station_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_stations_station_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_stations_station_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_stations_station_id_race_id
         * race_id integer
         * @format int32
         */
        race_id?: number;
        /**
         * get_universe_stations_station_id_reprocessing_efficiency
         * reprocessing_efficiency number
         * @format float
         */
        reprocessing_efficiency: number;
        /**
         * get_universe_stations_station_id_reprocessing_stations_take
         * reprocessing_stations_take number
         * @format float
         */
        reprocessing_stations_take: number;
        /**
         * get_universe_stations_station_id_services
         * services array
         * @maxItems 30
         */
        services: (
          | "bounty-missions"
          | "assasination-missions"
          | "courier-missions"
          | "interbus"
          | "reprocessing-plant"
          | "refinery"
          | "market"
          | "black-market"
          | "stock-exchange"
          | "cloning"
          | "surgery"
          | "dna-therapy"
          | "repair-facilities"
          | "factory"
          | "labratory"
          | "gambling"
          | "fitting"
          | "paintshop"
          | "news"
          | "storage"
          | "insurance"
          | "docking"
          | "office-rental"
          | "jump-clone-facility"
          | "loyalty-point-store"
          | "navy-offices"
          | "security-offices"
        )[];
        /**
         * get_universe_stations_station_id_station_id
         * station_id integer
         * @format int32
         */
        station_id: number;
        /**
         * get_universe_stations_station_id_system_id
         * The solar system this station is in
         * @format int32
         */
        system_id: number;
        /**
         * get_universe_stations_station_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_stations_station_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/stations/${stationId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List all public structures --- Alternate route: `/dev/universe/structures/` Alternate route: `/legacy/universe/structures/` Alternate route: `/v1/universe/structures/` --- This route is cached for up to 3600 seconds
   *
   * @tags Universe
   * @name GetUniverseStructures
   * @summary List all public structures
   * @request GET:/universe/structures/
   */
  getUniverseStructures = (
    query?: {
      /**
       * The server name you would like data from
       * @default "tranquility"
       */
      datasource?: "tranquility";
      /** Only list public structures that have this service online */
      filter?: "market" | "manufacturing_basic";
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
      path: `/universe/structures/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs. --- Alternate route: `/legacy/universe/structures/{structure_id}/` Alternate route: `/v1/universe/structures/{structure_id}/` Alternate route: `/v2/universe/structures/{structure_id}/` --- This route is cached for up to 3600 seconds
   *
   * @tags Universe
   * @name GetUniverseStructuresStructureId
   * @summary Get structure information
   * @request GET:/universe/structures/{structure_id}/
   * @secure
   */
  getUniverseStructuresStructureId = (
    structureId: number,
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
         * get_universe_structures_structure_id_name
         * The full name of the structure
         */
        name: string;
        /**
         * get_universe_structures_structure_id_owner_id
         * The ID of the corporation who owns this particular structure
         * @format int32
         */
        owner_id: number;
        /**
         * get_universe_structures_structure_id_position
         * Coordinates of the structure in Cartesian space relative to the Sun, in metres.
         */
        position?: {
          /**
           * get_universe_structures_structure_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_structures_structure_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_structures_structure_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_structures_structure_id_solar_system_id
         * solar_system_id integer
         * @format int32
         */
        solar_system_id: number;
        /**
         * get_universe_structures_structure_id_type_id
         * type_id integer
         * @format int32
         */
        type_id?: number;
      },
      | void
      | BadRequest
      | Unauthorized
      | Forbidden
      | {
          /**
           * get_universe_structures_structure_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/structures/${structureId}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed --- Alternate route: `/legacy/universe/system_jumps/` Alternate route: `/v1/universe/system_jumps/` --- This route is cached for up to 3600 seconds
   *
   * @tags Universe
   * @name GetUniverseSystemJumps
   * @summary Get system jumps
   * @request GET:/universe/system_jumps/
   */
  getUniverseSystemJumps = (
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
         * get_universe_system_jumps_ship_jumps
         * ship_jumps integer
         * @format int32
         */
        ship_jumps: number;
        /**
         * get_universe_system_jumps_system_id
         * system_id integer
         * @format int32
         */
        system_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/system_jumps/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed --- Alternate route: `/v2/universe/system_kills/` --- This route is cached for up to 3600 seconds
   *
   * @tags Universe
   * @name GetUniverseSystemKills
   * @summary Get system kills
   * @request GET:/universe/system_kills/
   */
  getUniverseSystemKills = (
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
         * get_universe_system_kills_npc_kills
         * Number of NPC ships killed in this system
         * @format int32
         */
        npc_kills: number;
        /**
         * get_universe_system_kills_pod_kills
         * Number of pods killed in this system
         * @format int32
         */
        pod_kills: number;
        /**
         * get_universe_system_kills_ship_kills
         * Number of player ships killed in this system
         * @format int32
         */
        ship_kills: number;
        /**
         * get_universe_system_kills_system_id
         * system_id integer
         * @format int32
         */
        system_id: number;
      }[],
      | void
      | BadRequest
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/system_kills/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of solar systems --- Alternate route: `/dev/universe/systems/` Alternate route: `/legacy/universe/systems/` Alternate route: `/v1/universe/systems/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseSystems
   * @summary Get solar systems
   * @request GET:/universe/systems/
   */
  getUniverseSystems = (
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
      path: `/universe/systems/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a solar system. --- Alternate route: `/dev/universe/systems/{system_id}/` Alternate route: `/v4/universe/systems/{system_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseSystemsSystemId
   * @summary Get solar system information
   * @request GET:/universe/systems/{system_id}/
   */
  getUniverseSystemsSystemId = (
    systemId: number,
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
         * get_universe_systems_system_id_constellation_id
         * The constellation this solar system is in
         * @format int32
         */
        constellation_id: number;
        /**
         * get_universe_systems_system_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_systems_system_id_planets
         * planets array
         * @maxItems 1000
         */
        planets?: {
          /**
           * get_universe_systems_system_id_asteroid_belts
           * asteroid_belts array
           * @maxItems 100
           */
          asteroid_belts?: number[];
          /**
           * get_universe_systems_system_id_moons
           * moons array
           * @maxItems 1000
           */
          moons?: number[];
          /**
           * get_universe_systems_system_id_planet_id
           * planet_id integer
           * @format int32
           */
          planet_id: number;
        }[];
        /**
         * get_universe_systems_system_id_position
         * position object
         */
        position: {
          /**
           * get_universe_systems_system_id_x
           * x number
           * @format double
           */
          x: number;
          /**
           * get_universe_systems_system_id_y
           * y number
           * @format double
           */
          y: number;
          /**
           * get_universe_systems_system_id_z
           * z number
           * @format double
           */
          z: number;
        };
        /**
         * get_universe_systems_system_id_security_class
         * security_class string
         */
        security_class?: string;
        /**
         * get_universe_systems_system_id_security_status
         * security_status number
         * @format float
         */
        security_status: number;
        /**
         * get_universe_systems_system_id_star_id
         * star_id integer
         * @format int32
         */
        star_id?: number;
        /**
         * get_universe_systems_system_id_stargates
         * stargates array
         * @maxItems 25
         */
        stargates?: number[];
        /**
         * get_universe_systems_system_id_stations
         * stations array
         * @maxItems 25
         */
        stations?: number[];
        /**
         * get_universe_systems_system_id_system_id
         * system_id integer
         * @format int32
         */
        system_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_systems_system_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/systems/${systemId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of type ids --- Alternate route: `/legacy/universe/types/` Alternate route: `/v1/universe/types/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseTypes
   * @summary Get types
   * @request GET:/universe/types/
   */
  getUniverseTypes = (
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
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/types/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a type --- Alternate route: `/dev/universe/types/{type_id}/` Alternate route: `/legacy/universe/types/{type_id}/` Alternate route: `/v2/universe/types/{type_id}/` Alternate route: `/v3/universe/types/{type_id}/` --- This route expires daily at 11:05
   *
   * @tags Universe
   * @name GetUniverseTypesTypeId
   * @summary Get type information
   * @request GET:/universe/types/{type_id}/
   */
  getUniverseTypesTypeId = (
    typeId: number,
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
         * get_universe_types_type_id_capacity
         * capacity number
         * @format float
         */
        capacity?: number;
        /**
         * get_universe_types_type_id_description
         * description string
         */
        description: string;
        /**
         * get_universe_types_type_id_dogma_attributes
         * dogma_attributes array
         * @maxItems 1000
         */
        dogma_attributes?: {
          /**
           * get_universe_types_type_id_attribute_id
           * attribute_id integer
           * @format int32
           */
          attribute_id: number;
          /**
           * get_universe_types_type_id_value
           * value number
           * @format float
           */
          value: number;
        }[];
        /**
         * get_universe_types_type_id_dogma_effects
         * dogma_effects array
         * @maxItems 1000
         */
        dogma_effects?: {
          /**
           * get_universe_types_type_id_effect_id
           * effect_id integer
           * @format int32
           */
          effect_id: number;
          /**
           * get_universe_types_type_id_is_default
           * is_default boolean
           */
          is_default: boolean;
        }[];
        /**
         * get_universe_types_type_id_graphic_id
         * graphic_id integer
         * @format int32
         */
        graphic_id?: number;
        /**
         * get_universe_types_type_id_group_id
         * group_id integer
         * @format int32
         */
        group_id: number;
        /**
         * get_universe_types_type_id_icon_id
         * icon_id integer
         * @format int32
         */
        icon_id?: number;
        /**
         * get_universe_types_type_id_market_group_id
         * This only exists for types that can be put on the market
         * @format int32
         */
        market_group_id?: number;
        /**
         * get_universe_types_type_id_mass
         * mass number
         * @format float
         */
        mass?: number;
        /**
         * get_universe_types_type_id_name
         * name string
         */
        name: string;
        /**
         * get_universe_types_type_id_packaged_volume
         * packaged_volume number
         * @format float
         */
        packaged_volume?: number;
        /**
         * get_universe_types_type_id_portion_size
         * portion_size integer
         * @format int32
         */
        portion_size?: number;
        /**
         * get_universe_types_type_id_published
         * published boolean
         */
        published: boolean;
        /**
         * get_universe_types_type_id_radius
         * radius number
         * @format float
         */
        radius?: number;
        /**
         * get_universe_types_type_id_type_id
         * type_id integer
         * @format int32
         */
        type_id: number;
        /**
         * get_universe_types_type_id_volume
         * volume number
         * @format float
         */
        volume?: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_universe_types_type_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/universe/types/${typeId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
