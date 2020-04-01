
/**
 * Change password request object.
 *
 * @author Brian Pontarelli
 */
export class ChangePasswordRequest {
  currentPassword?: string;
  loginId?: string;
  password?: string;
  refreshToken?: string;
}

export default ChangePasswordRequest;
