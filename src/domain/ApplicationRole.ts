
/**
 * A role given to a user for a specific application.
 *
 * @author Seth Musselman
 */
export class ApplicationRole {
  description?: string;
  id?: UUID;
  isDefault?: boolean;
  isSuperRole?: boolean;
  name?: string;
}

export default ApplicationRole;
