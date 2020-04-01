
/**
 * @author Seth Musselman
 */
export class Application {
  active?: boolean;
  authenticationTokenConfiguration?: AuthenticationTokenConfiguration;
  cleanSpeakConfiguration?: CleanSpeakConfiguration;
  data?: ObjectMap<string, any>;
  id?: UUID;
  jwtConfiguration?: JWTConfiguration;
  lambdaConfiguration?: LambdaConfiguration;
  loginConfiguration?: LoginConfiguration;
  name?: string;
  oauthConfiguration?: OAuth2Configuration;
  passwordlessConfiguration?: PasswordlessConfiguration;
  registrationConfiguration?: RegistrationConfiguration;
  registrationDeletePolicy?: ApplicationRegistrationDeletePolicy;
  roles?: Array<ApplicationRole>;
  samlv2Configuration?: SAMLv2Configuration;
  tenantId?: UUID;
  verificationEmailTemplateId?: UUID;
  verifyRegistration?: boolean;
}

export default Application;
