
/**
 * Models a single family member.
 *
 * @author Brian Pontarelli
 */
export class FamilyMember {
  data?: ObjectMap<string, any>;
  insertInstant?: number;
  owner?: boolean;
  role?: FamilyRole;
  userId?: UUID;
}

export default FamilyMember;
