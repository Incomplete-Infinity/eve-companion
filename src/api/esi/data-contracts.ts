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

/**
 * Bad request
 * Bad request model
 */
export interface BadRequest {
  /** Bad request message */
  error: string;
}

/**
 * Error limited
 * Error limited model
 */
export interface ErrorLimited {
  /** Error limited message */
  error: string;
}

/**
 * Forbidden
 * Forbidden model
 */
export interface Forbidden {
  /** Forbidden message */
  error: string;
  /** status code received from SSO */
  sso_status?: number;
}

/**
 * Gateway timeout
 * Gateway timeout model
 */
export interface GatewayTimeout {
  /** Gateway timeout message */
  error: string;
  /** number of seconds the request was given */
  timeout?: number;
}

/**
 * Internal server error
 * Internal server error model
 */
export interface InternalServerError {
  /** Internal server error message */
  error: string;
}

/**
 * Service unavailable
 * Service unavailable model
 */
export interface ServiceUnavailable {
  /** Service unavailable message */
  error: string;
}

/**
 * Unauthorized
 * Unauthorized model
 */
export interface Unauthorized {
  /** Unauthorized message */
  error: string;
}
