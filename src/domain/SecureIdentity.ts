
/**
 * @author Daniel DeGroff
 */
export class SecureIdentity {
  breachedPasswordLastCheckedInstant?: number;
  breachedPasswordStatus?: BreachedPasswordStatus;
  encryptionScheme?: string;
  factor?: number;
  id?: UUID;
  password?: string;
  passwordChangeReason?: ChangePasswordReason;
  passwordChangeRequired?: boolean;
  passwordLastUpdateInstant?: number;
  salt?: string;
  verified?: boolean;
}

export default SecureIdentity;
