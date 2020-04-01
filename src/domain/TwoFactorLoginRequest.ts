
/**
 * @author Daniel DeGroff
 */
export class TwoFactorLoginRequest extends BaseLoginRequest {
  code?: string;
  trustComputer?: boolean;
  twoFactorId?: string;
}

export default TwoFactorLoginRequest;
