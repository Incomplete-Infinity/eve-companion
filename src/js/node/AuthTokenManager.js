const ESI = require('eve_swagger_interface');

class AuthTokenManager {
  constructor({ clientId, clientSecret, redirectUri } = {}) {
    this.token = null;
    this.refreshToken = null;
    this.expiresAt = null;

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;

    this.apiClient = ESI.ApiClient.instance;
  }

  /**
   * Initialize token and sync with swagger client
   */
  setToken({ access_token, refresh_token, expires_in }) {
    this.token = access_token;
    this.refreshToken = refresh_token;
    this.expiresAt = Date.now() + (expires_in * 1000);

    this.apiClient.authentications.evesso.accessToken = this.token;
  }

  /**
   * Returns current token if valid
   */
  getToken() {
    return this.token;
  }

  /**
   * Whether the token is still valid
   */
  isTokenValid() {
    return !!this.token && Date.now() < this.expiresAt;
  }

  /**
   * Attempt token refresh using the refresh token
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
   * Use before API calls to ensure freshness
   */
  async ensureValidToken() {
    if (!this.isTokenValid()) {
      await this.refresh();
    }
  }
}

module.exports = AuthTokenManager;
/* Usage
const auth = new AuthTokenManager({
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret',
    redirectUri: 'your-redirect-uri'
  });
  
  // After login
  auth.setToken({
    access_token: 'abc',
    refresh_token: 'def',
    expires_in: 1200
  });
  
  // Before API call
  await auth.ensureValidToken();
  
  // Your mailbox can now use swagger normally
  const mailbox = new Mailbox(characterId, auth);
  */

