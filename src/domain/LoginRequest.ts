
/**
 * Login API request object.
 *
 * @author Seth Musselman
 */
export class LoginRequest extends BaseLoginRequest {
  loginId?: string;
  oneTimePassword?: string;
  password?: string;
  twoFactorTrustId?: string;
}

export default LoginRequest;
