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

export class Dogma<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get a list of dogma attribute ids --- Alternate route: `/dev/dogma/attributes/` Alternate route: `/legacy/dogma/attributes/` Alternate route: `/v1/dogma/attributes/` --- This route expires daily at 11:05
   *
   * @tags Dogma
   * @name GetDogmaAttributes
   * @summary Get attributes
   * @request GET:/dogma/attributes/
   */
  getDogmaAttributes = (
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
      path: `/dogma/attributes/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a dogma attribute --- Alternate route: `/dev/dogma/attributes/{attribute_id}/` Alternate route: `/legacy/dogma/attributes/{attribute_id}/` Alternate route: `/v1/dogma/attributes/{attribute_id}/` --- This route expires daily at 11:05
   *
   * @tags Dogma
   * @name GetDogmaAttributesAttributeId
   * @summary Get attribute information
   * @request GET:/dogma/attributes/{attribute_id}/
   */
  getDogmaAttributesAttributeId = (
    attributeId: number,
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
         * get_dogma_attributes_attribute_id_attribute_id
         * attribute_id integer
         * @format int32
         */
        attribute_id: number;
        /**
         * get_dogma_attributes_attribute_id_default_value
         * default_value number
         * @format float
         */
        default_value?: number;
        /**
         * get_dogma_attributes_attribute_id_description
         * description string
         */
        description?: string;
        /**
         * get_dogma_attributes_attribute_id_display_name
         * display_name string
         */
        display_name?: string;
        /**
         * get_dogma_attributes_attribute_id_high_is_good
         * high_is_good boolean
         */
        high_is_good?: boolean;
        /**
         * get_dogma_attributes_attribute_id_icon_id
         * icon_id integer
         * @format int32
         */
        icon_id?: number;
        /**
         * get_dogma_attributes_attribute_id_name
         * name string
         */
        name?: string;
        /**
         * get_dogma_attributes_attribute_id_published
         * published boolean
         */
        published?: boolean;
        /**
         * get_dogma_attributes_attribute_id_stackable
         * stackable boolean
         */
        stackable?: boolean;
        /**
         * get_dogma_attributes_attribute_id_unit_id
         * unit_id integer
         * @format int32
         */
        unit_id?: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_dogma_attributes_attribute_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/dogma/attributes/${attributeId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns info about a dynamic item resulting from mutation with a mutaplasmid. --- Alternate route: `/dev/dogma/dynamic/items/{type_id}/{item_id}/` Alternate route: `/legacy/dogma/dynamic/items/{type_id}/{item_id}/` Alternate route: `/v1/dogma/dynamic/items/{type_id}/{item_id}/` --- This route expires daily at 11:05
   *
   * @tags Dogma
   * @name GetDogmaDynamicItemsTypeIdItemId
   * @summary Get dynamic item information
   * @request GET:/dogma/dynamic/items/{type_id}/{item_id}/
   */
  getDogmaDynamicItemsTypeIdItemId = (
    itemId: number,
    typeId: number,
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
         * get_dogma_dynamic_items_type_id_item_id_created_by
         * The ID of the character who created the item
         * @format int32
         */
        created_by: number;
        /**
         * get_dogma_dynamic_items_type_id_item_id_dogma_attributes
         * dogma_attributes array
         * @maxItems 1000
         */
        dogma_attributes: {
          /**
           * get_dogma_dynamic_items_type_id_item_id_attribute_id
           * attribute_id integer
           * @format int32
           */
          attribute_id: number;
          /**
           * get_dogma_dynamic_items_type_id_item_id_value
           * value number
           * @format float
           */
          value: number;
        }[];
        /**
         * get_dogma_dynamic_items_type_id_item_id_dogma_effects
         * dogma_effects array
         * @maxItems 1000
         */
        dogma_effects: {
          /**
           * get_dogma_dynamic_items_type_id_item_id_effect_id
           * effect_id integer
           * @format int32
           */
          effect_id: number;
          /**
           * get_dogma_dynamic_items_type_id_item_id_is_default
           * is_default boolean
           */
          is_default: boolean;
        }[];
        /**
         * get_dogma_dynamic_items_type_id_item_id_mutator_type_id
         * The type ID of the mutator used to generate the dynamic item.
         * @format int32
         */
        mutator_type_id: number;
        /**
         * get_dogma_dynamic_items_type_id_item_id_source_type_id
         * The type ID of the source item the mutator was applied to create the dynamic item.
         * @format int32
         */
        source_type_id: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_dogma_dynamic_items_type_id_item_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/dogma/dynamic/items/${typeId}/${itemId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of dogma effect ids --- Alternate route: `/dev/dogma/effects/` Alternate route: `/legacy/dogma/effects/` Alternate route: `/v1/dogma/effects/` --- This route expires daily at 11:05
   *
   * @tags Dogma
   * @name GetDogmaEffects
   * @summary Get effects
   * @request GET:/dogma/effects/
   */
  getDogmaEffects = (
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
      path: `/dogma/effects/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information on a dogma effect --- Alternate route: `/dev/dogma/effects/{effect_id}/` Alternate route: `/v2/dogma/effects/{effect_id}/` --- This route expires daily at 11:05
   *
   * @tags Dogma
   * @name GetDogmaEffectsEffectId
   * @summary Get effect information
   * @request GET:/dogma/effects/{effect_id}/
   */
  getDogmaEffectsEffectId = (
    effectId: number,
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
         * get_dogma_effects_effect_id_description
         * description string
         */
        description?: string;
        /**
         * get_dogma_effects_effect_id_disallow_auto_repeat
         * disallow_auto_repeat boolean
         */
        disallow_auto_repeat?: boolean;
        /**
         * get_dogma_effects_effect_id_discharge_attribute_id
         * discharge_attribute_id integer
         * @format int32
         */
        discharge_attribute_id?: number;
        /**
         * get_dogma_effects_effect_id_display_name
         * display_name string
         */
        display_name?: string;
        /**
         * get_dogma_effects_effect_id_duration_attribute_id
         * duration_attribute_id integer
         * @format int32
         */
        duration_attribute_id?: number;
        /**
         * get_dogma_effects_effect_id_effect_category
         * effect_category integer
         * @format int32
         */
        effect_category?: number;
        /**
         * get_dogma_effects_effect_id_effect_id
         * effect_id integer
         * @format int32
         */
        effect_id: number;
        /**
         * get_dogma_effects_effect_id_electronic_chance
         * electronic_chance boolean
         */
        electronic_chance?: boolean;
        /**
         * get_dogma_effects_effect_id_falloff_attribute_id
         * falloff_attribute_id integer
         * @format int32
         */
        falloff_attribute_id?: number;
        /**
         * get_dogma_effects_effect_id_icon_id
         * icon_id integer
         * @format int32
         */
        icon_id?: number;
        /**
         * get_dogma_effects_effect_id_is_assistance
         * is_assistance boolean
         */
        is_assistance?: boolean;
        /**
         * get_dogma_effects_effect_id_is_offensive
         * is_offensive boolean
         */
        is_offensive?: boolean;
        /**
         * get_dogma_effects_effect_id_is_warp_safe
         * is_warp_safe boolean
         */
        is_warp_safe?: boolean;
        /**
         * get_dogma_effects_effect_id_modifiers
         * modifiers array
         * @maxItems 100
         */
        modifiers?: {
          /**
           * get_dogma_effects_effect_id_domain
           * domain string
           */
          domain?: string;
          /**
           * get_dogma_effects_effect_id_modifier_effect_id
           * effect_id integer
           * @format int32
           */
          effect_id?: number;
          /**
           * get_dogma_effects_effect_id_func
           * func string
           */
          func: string;
          /**
           * get_dogma_effects_effect_id_modified_attribute_id
           * modified_attribute_id integer
           * @format int32
           */
          modified_attribute_id?: number;
          /**
           * get_dogma_effects_effect_id_modifying_attribute_id
           * modifying_attribute_id integer
           * @format int32
           */
          modifying_attribute_id?: number;
          /**
           * get_dogma_effects_effect_id_operator
           * operator integer
           * @format int32
           */
          operator?: number;
        }[];
        /**
         * get_dogma_effects_effect_id_name
         * name string
         */
        name?: string;
        /**
         * get_dogma_effects_effect_id_post_expression
         * post_expression integer
         * @format int32
         */
        post_expression?: number;
        /**
         * get_dogma_effects_effect_id_pre_expression
         * pre_expression integer
         * @format int32
         */
        pre_expression?: number;
        /**
         * get_dogma_effects_effect_id_published
         * published boolean
         */
        published?: boolean;
        /**
         * get_dogma_effects_effect_id_range_attribute_id
         * range_attribute_id integer
         * @format int32
         */
        range_attribute_id?: number;
        /**
         * get_dogma_effects_effect_id_range_chance
         * range_chance boolean
         */
        range_chance?: boolean;
        /**
         * get_dogma_effects_effect_id_tracking_speed_attribute_id
         * tracking_speed_attribute_id integer
         * @format int32
         */
        tracking_speed_attribute_id?: number;
      },
      | void
      | BadRequest
      | {
          /**
           * get_dogma_effects_effect_id_404_not_found
           * Not found message
           */
          error?: string;
        }
      | ErrorLimited
      | InternalServerError
      | ServiceUnavailable
      | GatewayTimeout
    >({
      path: `/dogma/effects/${effectId}/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
