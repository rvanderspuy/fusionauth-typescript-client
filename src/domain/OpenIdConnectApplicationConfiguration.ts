
/**
 * @author Daniel DeGroff
 */
export class OpenIdConnectApplicationConfiguration extends BaseIdentityProviderApplicationConfiguration {
  buttonImageURL?: string;
  buttonText?: string;
  oauth2?: IdentityProviderOauth2Configuration;
}

export default OpenIdConnectApplicationConfiguration;
