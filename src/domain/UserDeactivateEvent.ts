
/**
 * Models the User Deactivate Event (and can be converted to JSON).
 *
 * @author Brian Pontarelli
 */
export class UserDeactivateEvent extends BaseEvent {
  user?: User;
}

export default UserDeactivateEvent;
