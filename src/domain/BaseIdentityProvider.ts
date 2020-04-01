
// Do not require a setter for 'type', it is defined by the concrete class and is not mutable
export class BaseIdentityProvider<D extends BaseIdentityProviderApplicationConfiguration> extends Enableable {
  applicationConfiguration?: ObjectMap<UUID, D>;
  data?: ObjectMap<string, any>;
  debug?: boolean;
  id?: UUID;
  name?: string;
  type?: IdentityProviderType;
}

export default BaseIdentityProvider;
