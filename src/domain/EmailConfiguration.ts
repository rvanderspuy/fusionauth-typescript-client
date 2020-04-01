
/**
 * @author Brian Pontarelli
 */
export class EmailConfiguration {
  forgotPasswordEmailTemplateId?: UUID;
  host?: string;
  password?: string;
  passwordlessEmailTemplateId?: UUID;
  port?: number;
  properties?: string;
  security?: EmailSecurityType;
  setPasswordEmailTemplateId?: UUID;
  username?: string;
  verificationEmailTemplateId?: UUID;
  verifyEmail?: boolean;
  verifyEmailWhenChanged?: boolean;
}

export default EmailConfiguration;
