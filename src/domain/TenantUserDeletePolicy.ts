
/**
 * A Tenant-level policy for deleting Users.
 *
 * @author Trevor Smith
 */
export class TenantUserDeletePolicy {
  unverified?: TimeBasedDeletePolicy;
}

export default TenantUserDeletePolicy;
