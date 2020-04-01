
/**
 * Models the User Registration Verified Event (and can be converted to JSON).
 *
 * @author Trevor Smith
 */
export class UserRegistrationVerifiedEvent extends BaseEvent {
  applicationId?: UUID;
  registration?: UserRegistration;
  user?: User;
}

export default UserRegistrationVerifiedEvent;
