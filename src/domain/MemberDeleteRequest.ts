
/**
 * Group Member Delete Request
 *
 * @author Daniel DeGroff
 */
export class MemberDeleteRequest {
  memberIds?: Array<UUID>;
  members?: ObjectMap<UUID, Array<UUID>>;
}

export default MemberDeleteRequest;
