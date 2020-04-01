
/**
 * @author Derek Klatt
 */
export class PasswordValidationRules {
  breachDetection?: PasswordBreachDetection;
  maxLength?: number;
  minLength?: number;
  rememberPreviousPasswords?: RememberPreviousPasswords;
  requireMixedCase?: boolean;
  requireNonAlpha?: boolean;
  requireNumber?: boolean;
  validateOnLogin?: boolean;
}

export default PasswordValidationRules;
