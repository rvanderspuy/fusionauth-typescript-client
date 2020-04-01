
/**
 * @author Brian Pontarelli
 */
export class LoginResponse {
  actions?: Array<LoginPreventedResponse>;
  changePasswordId?: string;
  changePasswordReason?: ChangePasswordReason;
  refreshToken?: string;
  state?: ObjectMap<string, any>;
  token?: string;
  twoFactorId?: string;
  twoFactorTrustId?: string;
  user?: User;
}

export default LoginResponse;
