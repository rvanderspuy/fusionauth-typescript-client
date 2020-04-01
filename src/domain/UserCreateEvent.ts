
/**
 * Models the User Create Event (and can be converted to JSON).
 *
 * @author Brian Pontarelli
 */
export class UserCreateEvent extends BaseEvent {
  user?: User;
}

export default UserCreateEvent;
