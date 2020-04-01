
/**
 * Group Member Response
 *
 * @author Daniel DeGroff
 */
export class MemberResponse {
  members?: ObjectMap<UUID, Array<GroupMember>>;
}

export default MemberResponse;
