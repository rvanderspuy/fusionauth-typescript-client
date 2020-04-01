
/**
 * @author Daniel DeGroff
 */
export class TwoFactorSendRequest {
  mobilePhone?: string;
  secret?: string;
  userId?: UUID;
}

export default TwoFactorSendRequest;
