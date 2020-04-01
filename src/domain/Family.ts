
/**
 * Models a family grouping of users.
 *
 * @author Brian Pontarelli
 */
export class Family {
  id?: UUID;
  members?: Array<FamilyMember>;
}

export default Family;
