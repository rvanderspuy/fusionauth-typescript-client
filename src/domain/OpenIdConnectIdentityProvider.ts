
/**
 * @author Daniel DeGroff
 */
export class OpenIdConnectIdentityProvider extends BaseIdentityProvider<OpenIdConnectApplicationConfiguration> {
  buttonImageURL?: string;
  buttonText?: string;
  domains?: Set<string>;
  lambdaConfiguration?: LambdaConfiguration;
  oauth2?: IdentityProviderOauth2Configuration;
}

export default OpenIdConnectIdentityProvider;
