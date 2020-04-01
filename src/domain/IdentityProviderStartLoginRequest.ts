
/**
 * @author Daniel DeGroff
 */
export class IdentityProviderStartLoginRequest extends BaseLoginRequest {
  identityProviderId?: UUID;
  loginId?: string;
  state?: ObjectMap<string, any>;
}

export default IdentityProviderStartLoginRequest;
