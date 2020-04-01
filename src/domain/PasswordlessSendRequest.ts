
/**
 * @author Daniel DeGroff
 */
export class PasswordlessSendRequest {
  applicationId?: UUID;
  code?: string;
  loginId?: string;
  state?: ObjectMap<string, any>;
}

export default PasswordlessSendRequest;
