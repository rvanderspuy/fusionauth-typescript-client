
/**
 * Models the User Login Failed Event.
 *
 * @author Daniel DeGroff
 */
export class UserLoginFailedEvent extends BaseEvent {
  applicationId?: UUID;
  authenticationType?: string;
  user?: User;
}

export default UserLoginFailedEvent;
