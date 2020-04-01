
/**
 * @author Daniel DeGroff
 */
export class PasswordlessStartRequest {
  applicationId?: UUID;
  loginId?: string;
  state?: ObjectMap<string, any>;
}

export default PasswordlessStartRequest;
