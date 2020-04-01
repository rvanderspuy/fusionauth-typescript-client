
/**
 * Models the User Event (and can be converted to JSON) that is used for all user modifications (create, update,
 * delete).
 *
 * @author Brian Pontarelli
 */
export class UserDeleteEvent extends BaseEvent {
  user?: User;
}

export default UserDeleteEvent;
