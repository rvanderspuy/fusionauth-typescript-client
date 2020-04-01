
/**
 * @author Daniel DeGroff
 */
export class OAuth2Configuration {
  authorizedOriginURLs?: Array<string>;
  authorizedRedirectURLs?: Array<string>;
  clientId?: string;
  clientSecret?: string;
  deviceVerificationURL?: string;
  enabledGrants?: Set<GrantType>;
  generateRefreshTokens?: boolean;
  logoutBehavior?: LogoutBehavior;
  logoutURL?: string;
  requireClientAuthentication?: boolean;
}

export default OAuth2Configuration;
