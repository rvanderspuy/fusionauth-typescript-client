
/**
 * @author Daniel DeGroff
 */
export class OAuthConfigurationResponse {
  httpSessionMaxInactiveInterval?: number;
  logoutURL?: string;
  oauthConfiguration?: OAuth2Configuration;
}

export default OAuthConfigurationResponse;
