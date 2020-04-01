
/**
 * Models the User Create Registration Event (and can be converted to JSON).
 *
 * @author Daniel DeGroff
 */
export class UserRegistrationCreateEvent extends BaseEvent {
  applicationId?: UUID;
  registration?: UserRegistration;
  user?: User;
}

export default UserRegistrationCreateEvent;
