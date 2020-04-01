
/**
 * Forgot password request object.
 *
 * @author Brian Pontarelli
 */
export class ForgotPasswordRequest {
  changePasswordId?: string;
  email?: string;
  loginId?: string;
  sendForgotPasswordEmail?: boolean;
  state?: ObjectMap<string, any>;
  username?: string;
}

export default ForgotPasswordRequest;
