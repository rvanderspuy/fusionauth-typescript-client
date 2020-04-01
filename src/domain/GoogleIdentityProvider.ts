
/**
 * Google social login provider.
 *
 * @author Daniel DeGroff
 */
export class GoogleIdentityProvider extends BaseIdentityProvider<GoogleApplicationConfiguration> {
  buttonText?: string;
  client_id?: string;
  client_secret?: string;
  scope?: string;
}

export default GoogleIdentityProvider;
