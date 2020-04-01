
/**
 * Models the User Update Event (and can be converted to JSON).
 *
 * @author Brian Pontarelli
 */
export class UserUpdateEvent extends BaseEvent {
  original?: User;
  user?: User;
}

export default UserUpdateEvent;
