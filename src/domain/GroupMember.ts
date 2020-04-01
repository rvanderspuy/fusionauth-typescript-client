
/**
 * A User's membership into a Group
 *
 * @author Daniel DeGroff
 */
export class GroupMember {
  data?: ObjectMap<string, any>;
  groupId?: UUID;
  id?: UUID;
  insertInstant?: number;
  userId?: UUID;
}

export default GroupMember;
