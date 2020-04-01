
/**
 * The global view of a User. This object contains all global information about the user including birth date, registration information
 * preferred languages, global attributes, etc.
 *
 * @author Seth Musselman
 */
export class User extends SecureIdentity {
  active?: boolean;
  birthDate?: string;
  cleanSpeakId?: UUID;
  data?: ObjectMap<string, any>;
  email?: string;
  expiry?: number;
  firstName?: string;
  fullName?: string;
  imageUrl?: string;
  insertInstant?: number;
  lastLoginInstant?: number;
  lastName?: string;
  memberships?: Array<GroupMember>;
  middleName?: string;
  mobilePhone?: string;
  parentEmail?: string;
  preferredLanguages?: Array<string>;
  registrations?: Array<UserRegistration>;
  tenantId?: UUID;
  timezone?: string;
  twoFactorDelivery?: TwoFactorDelivery;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  username?: string;
  usernameStatus?: ContentStatus;
}

export default User;
