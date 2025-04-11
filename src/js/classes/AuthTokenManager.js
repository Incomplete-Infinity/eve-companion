const ESI = require('eve_swagger_interface');

/**
 * @class AuthTokenManager
 * @classdesc Manages OAuth token state, expiration, and refresh logic for secure ESI calls.
 */
class AuthTokenManager {
  /**
   * @param {Object} [config={}]
   * @param {string} config.clientId
   * @param {string} config.clientSecret
   * @param {string} config.redirectUri
   */
  constructor({ clientId, clientSecret, redirectUri } = {}) {
    this.accessToken = null;
    this.refreshToken = null;
    this.expiresAt = null;

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;

    this.apiClient = ESI.ApiClient.instance;
  }

  /**
   * Apply OAuth token and update Swagger client.
   *
   * @param {Object} tokenData
   * @param {string} tokenData.access_token
   * @param {string} tokenData.refresh_token
   * @param {number} tokenData.expires_in
   */
  setToken({ access_token, refresh_token, expires_in }) {
    this.accessToken = access_token;
    this.refreshToken = refresh_token;
    this.expiresAt = Date.now() + expires_in * 1000;

    this.apiClient.authentications.evesso.accessToken = this.accessToken;
  }

  /**
   * Return the current access token (may be expired).
   * @returns {string|null}
   */
  getToken() {
    return this.accessToken;
  }

  /**
   * Check if the access token is still valid.
   * @returns {boolean}
   */
  isTokenValid() {
    return !!this.accessToken && Date.now() < this.expiresAt;
  }

  /**
   * Refresh the access token using the refresh token.
   * @returns {Promise<Object>} New token data.
   */
  async refresh() {
    if (!this.refreshToken) throw new Error('No refresh token available');

    const res = await fetch('https://login.eveonline.com/v2/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken
      })
    });

    if (!res.ok) throw new Error('Failed to refresh token');

    const data = await res.json();
    this.setToken(data);
    return data;
  }

  /**
   * Ensure a valid access token is present. Refreshes if expired.
   */
  async ensureValidToken() {
    if (!this.isTokenValid()) {
      await this.refresh();
    }
  }

  /**
   * Alias for `ensureValidToken()` to unify external checks.
   */
  async requireValidToken() {
    await this.ensureValidToken();
  }
}

module.exports = AuthTokenManager;
