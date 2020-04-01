
/**
 * Change password response object.
 *
 * @author Daniel DeGroff
 */
export class ChangePasswordResponse {
  oneTimePassword?: string;
  state?: ObjectMap<string, any>;
}

export default ChangePasswordResponse;
