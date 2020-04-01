
/**
 * User API request object.
 *
 * @author Brian Pontarelli
 */
export class UserRequest {
  sendSetPasswordEmail?: boolean;
  skipVerification?: boolean;
  user?: User;
}

export default UserRequest;
