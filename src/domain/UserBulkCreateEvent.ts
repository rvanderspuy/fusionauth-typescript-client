
/**
 * Models the User Bulk Create Event (and can be converted to JSON).
 *
 * @author Brian Pontarelli
 */
export class UserBulkCreateEvent extends BaseEvent {
  users?: Array<User>;
}

export default UserBulkCreateEvent;
