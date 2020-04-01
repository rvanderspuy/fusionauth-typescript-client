
/**
 * SAML v2 identity provider configuration.
 *
 * @author Brian Pontarelli
 */
export class SAMLv2IdentityProvider extends BaseIdentityProvider<SAMLv2ApplicationConfiguration> {
  buttonImageURL?: string;
  buttonText?: string;
  domains?: Set<string>;
  emailClaim?: string;
  idpEndpoint?: string;
  issuer?: string;
  keyId?: UUID;
  lambdaConfiguration?: LambdaConfiguration;
  useNameIdForEmail?: boolean;
}

export default SAMLv2IdentityProvider;
