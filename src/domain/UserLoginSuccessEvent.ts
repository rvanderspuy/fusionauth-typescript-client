
/**
 * Models the User Login Success Event.
 *
 * @author Daniel DeGroff
 */
export class UserLoginSuccessEvent extends BaseEvent {
  applicationId?: UUID;
  authenticationType?: string;
  identityProviderId?: UUID;
  identityProviderName?: string;
  user?: User;
}

export default UserLoginSuccessEvent;
