
/**
 * @author Daniel DeGroff
 */
export class PasswordlessLoginRequest extends BaseLoginRequest {
  code?: string;
  twoFactorTrustId?: string;
}

export default PasswordlessLoginRequest;
