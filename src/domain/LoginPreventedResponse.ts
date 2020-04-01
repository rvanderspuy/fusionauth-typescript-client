
/**
 * The summary of the action that is preventing login to be returned on the login response.
 *
 * @author Daniel DeGroff
 */
export class LoginPreventedResponse {
  actionerUserId?: UUID;
  actionId?: UUID;
  expiry?: number;
  localizedName?: string;
  localizedOption?: string;
  localizedReason?: string;
  name?: string;
  option?: string;
  reason?: string;
  reasonCode?: string;
}

export default LoginPreventedResponse;
