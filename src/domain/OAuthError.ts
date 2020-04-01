
/**
 * @author Daniel DeGroff
 */
export class OAuthError {
  change_password_id?: string;
  error?: OAuthErrorType;
  error_description?: string;
  error_reason?: OAuthErrorReason;
  error_uri?: string;
  two_factor_id?: string;
}

export default OAuthError;
