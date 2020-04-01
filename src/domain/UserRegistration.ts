
/**
 * User registration information for a single application.
 *
 * @author Brian Pontarelli
 */
export class UserRegistration {
  applicationId?: UUID;
  authenticationToken?: string;
  cleanSpeakId?: UUID;
  data?: ObjectMap<string, any>;
  id?: UUID;
  insertInstant?: number;
  lastLoginInstant?: number;
  preferredLanguages?: Array<string>;
  roles?: Set<string>;
  timezone?: string;
  tokens?: ObjectMap<string, string>;
  username?: string;
  usernameStatus?: ContentStatus;
  verified?: boolean;
}

export default UserRegistration;
