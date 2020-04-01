
/**
 * Models the User Reactivate Event (and can be converted to JSON).
 *
 * @author Brian Pontarelli
 */
export class UserReactivateEvent extends BaseEvent {
  user?: User;
}

export default UserReactivateEvent;
