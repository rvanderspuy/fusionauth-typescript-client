
/**
 * JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration
 * may be <code>enabled = false</code>.
 *
 * @author Daniel DeGroff
 */
export class JWTConfiguration extends Enableable {
  accessTokenKeyId?: UUID;
  idTokenKeyId?: UUID;
  refreshTokenTimeToLiveInMinutes?: number;
  timeToLiveInSeconds?: number;
}

export default JWTConfiguration;
