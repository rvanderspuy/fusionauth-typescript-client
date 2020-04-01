
/**
 * OpenID Connect Configuration as described by the <a href="https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata">OpenID
 * Provider Metadata</a>.
 *
 * @author Daniel DeGroff
 */
export class OpenIdConfiguration {
  authorization_endpoint?: string;
  backchannel_logout_supported?: boolean;
  claims_supported?: Array<string>;
  device_authorization_endpoint?: string;
  end_session_endpoint?: string;
  frontchannel_logout_supported?: boolean;
  grant_types_supported?: Array<string>;
  id_token_signing_alg_values_supported?: Array<string>;
  issuer?: string;
  jwks_uri?: string;
  response_modes_supported?: Array<string>;
  response_types_supported?: Array<string>;
  scopes_supported?: Array<string>;
  subject_types_supported?: Array<string>;
  token_endpoint?: string;
  token_endpoint_auth_methods_supported?: Array<string>;
  userinfo_endpoint?: string;
  userinfo_signing_alg_values_supported?: Array<string>;
}

export default OpenIdConfiguration;
