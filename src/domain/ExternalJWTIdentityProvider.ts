
/**
 * External JWT-only identity provider.
 *
 * @author Daniel DeGroff and Brian Pontarelli
 */
export class ExternalJWTIdentityProvider extends BaseIdentityProvider<ExternalJWTApplicationConfiguration> {
  claimMap?: ObjectMap<string, string>;
  defaultKeyId?: UUID;
  domains?: Set<string>;
  headerKeyParameter?: string;
  oauth2?: IdentityProviderOauth2Configuration;
  uniqueIdentityClaim?: string;
}

export default ExternalJWTIdentityProvider;
