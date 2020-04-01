
/**
 * Group Member Request
 *
 * @author Daniel DeGroff
 */
export class MemberRequest {
  members?: ObjectMap<UUID, Array<GroupMember>>;
}

export default MemberRequest;
