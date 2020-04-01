
/**
 * A log for an event that happened to a User.
 *
 * @author Brian Pontarelli
 */
export class UserComment {
  comment?: string;
  commenterId?: UUID;
  createInstant?: number;
  id?: UUID;
  userId?: UUID;
}

export default UserComment;
