
/**
 * Models the User Email Verify Event (and can be converted to JSON).
 *
 * @author Trevor Smith
 */
export class UserEmailVerifiedEvent extends BaseEvent {
  user?: User;
}

export default UserEmailVerifiedEvent;
