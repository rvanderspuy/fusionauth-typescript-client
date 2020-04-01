
/**
 * @author Daniel DeGroff
 */
export class BaseIdentityProviderApplicationConfiguration extends Enableable {
  createRegistration?: boolean;
  data?: ObjectMap<string, any>;
}

export default BaseIdentityProviderApplicationConfiguration;
