
/**
 * @author Daniel DeGroff
 */
export class IdentityProviderOauth2Configuration {
  authorization_endpoint?: string;
  client_id?: string;
  client_secret?: string;
  clientAuthenticationMethod?: ClientAuthenticationMethod;
  issuer?: string;
  scope?: string;
  token_endpoint?: string;
  userinfo_endpoint?: string;
}

export default IdentityProviderOauth2Configuration;
