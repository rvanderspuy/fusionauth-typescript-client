
/**
 * Login API request object used for login to third-party systems (i.e. Login with Facebook).
 *
 * @author Brian Pontarelli
 */
export class IdentityProviderLoginRequest extends BaseLoginRequest {
  data?: ObjectMap<string, string>;
  encodedJWT?: string;
  identityProviderId?: UUID;
}

export default IdentityProviderLoginRequest;
