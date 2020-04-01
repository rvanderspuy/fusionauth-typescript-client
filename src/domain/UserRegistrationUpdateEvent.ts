
/**
 * Models the User Update Registration Event (and can be converted to JSON).
 *
 * @author Daniel DeGroff
 */
export class UserRegistrationUpdateEvent extends BaseEvent {
  applicationId?: UUID;
  original?: UserRegistration;
  registration?: UserRegistration;
  user?: User;
}

export default UserRegistrationUpdateEvent;
