
/**
 * Facebook social login provider.
 *
 * @author Brian Pontarelli
 */
export class FacebookIdentityProvider extends BaseIdentityProvider<FacebookApplicationConfiguration> {
  appId?: string;
  buttonText?: string;
  client_secret?: string;
  fields?: string;
  permissions?: string;
}

export default FacebookIdentityProvider;
