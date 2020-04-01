
/**
 * @author Daniel DeGroff
 */
export class Tenant {
  configured?: boolean;
  data?: ObjectMap<string, any>;
  emailConfiguration?: EmailConfiguration;
  eventConfiguration?: EventConfiguration;
  externalIdentifierConfiguration?: ExternalIdentifierConfiguration;
  failedAuthenticationConfiguration?: FailedAuthenticationConfiguration;
  familyConfiguration?: FamilyConfiguration;
  httpSessionMaxInactiveInterval?: number;
  id?: UUID;
  issuer?: string;
  jwtConfiguration?: JWTConfiguration;
  logoutURL?: string;
  maximumPasswordAge?: MaximumPasswordAge;
  minimumPasswordAge?: MinimumPasswordAge;
  name?: string;
  passwordEncryptionConfiguration?: PasswordEncryptionConfiguration;
  passwordValidationRules?: PasswordValidationRules;
  themeId?: UUID;
  userDeletePolicy?: TenantUserDeletePolicy;
}

export default Tenant;
