
/**
 * Configuration for the behavior of failed login attempts. This helps us protect against brute force password attacks.
 *
 * @author Daniel DeGroff
 */
export class FailedAuthenticationConfiguration {
  actionDuration?: number;
  actionDurationUnit?: ExpiryUnit;
  resetCountInSeconds?: number;
  tooManyAttempts?: number;
  userActionId?: UUID;
}

export default FailedAuthenticationConfiguration;
