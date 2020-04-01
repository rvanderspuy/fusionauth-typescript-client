
/**
 * @author Daniel DeGroff
 */
export class ExternalIdentifierConfiguration {
  authorizationGrantIdTimeToLiveInSeconds?: number;
  changePasswordIdGenerator?: SecureGeneratorConfiguration;
  changePasswordIdTimeToLiveInSeconds?: number;
  deviceCodeTimeToLiveInSeconds?: number;
  deviceUserCodeIdGenerator?: SecureGeneratorConfiguration;
  emailVerificationIdGenerator?: SecureGeneratorConfiguration;
  emailVerificationIdTimeToLiveInSeconds?: number;
  externalAuthenticationIdTimeToLiveInSeconds?: number;
  oneTimePasswordTimeToLiveInSeconds?: number;
  passwordlessLoginGenerator?: SecureGeneratorConfiguration;
  passwordlessLoginTimeToLiveInSeconds?: number;
  registrationVerificationIdGenerator?: SecureGeneratorConfiguration;
  registrationVerificationIdTimeToLiveInSeconds?: number;
  setupPasswordIdGenerator?: SecureGeneratorConfiguration;
  setupPasswordIdTimeToLiveInSeconds?: number;
  twoFactorIdTimeToLiveInSeconds?: number;
  twoFactorTrustIdTimeToLiveInSeconds?: number;
}

export default ExternalIdentifierConfiguration;
