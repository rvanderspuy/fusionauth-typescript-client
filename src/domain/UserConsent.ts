
/**
 * Models a User consent.
 *
 * @author Daniel DeGroff
 */
export class UserConsent {
  consent?: Consent;
  consentId?: UUID;
  data?: ObjectMap<string, any>;
  giverUserId?: UUID;
  id?: UUID;
  insertInstant?: number;
  lastUpdateInstant?: number;
  status?: ConsentStatus;
  userId?: UUID;
  values?: Array<string>;
}

export default UserConsent;
