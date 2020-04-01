
/**
 * A Application-level policy for deleting Users.
 *
 * @author Trevor Smith
 */
export class ApplicationRegistrationDeletePolicy {
  unverified?: TimeBasedDeletePolicy;
}

export default ApplicationRegistrationDeletePolicy;
