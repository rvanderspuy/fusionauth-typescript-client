
/**
 * Models the User Password Breach Event.
 *
 * @author Matthew Altman
 */
export class UserPasswordBreachEvent extends BaseEvent {
  user?: User;
}

export default UserPasswordBreachEvent;
