
/**
 * Twitter social login provider.
 *
 * @author Daniel DeGroff
 */
export class TwitterIdentityProvider extends BaseIdentityProvider<TwitterApplicationConfiguration> {
  buttonText?: string;
  consumerKey?: string;
  consumerSecret?: string;
}

export default TwitterIdentityProvider;
