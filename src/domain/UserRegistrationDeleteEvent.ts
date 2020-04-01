
/**
 * Models the User Delete Registration Event (and can be converted to JSON).
 *
 * @author Daniel DeGroff
 */
export class UserRegistrationDeleteEvent extends BaseEvent {
  applicationId?: UUID;
  registration?: UserRegistration;
  user?: User;
}

export default UserRegistrationDeleteEvent;
