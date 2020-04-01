
/**
 * @author Daniel DeGroff
 */
export class FacebookApplicationConfiguration extends BaseIdentityProviderApplicationConfiguration {
  appId?: string;
  buttonText?: string;
  client_secret?: string;
  fields?: string;
  permissions?: string;
}

export default FacebookApplicationConfiguration;
