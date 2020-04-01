
/**
 * User API delete request object.
 *
 * @author Daniel DeGroff
 */
export class UserDeleteRequest {
  dryRun?: boolean;
  hardDelete?: boolean;
  query?: string;
  queryString?: string;
  userIds?: Array<UUID>;
}

export default UserDeleteRequest;
