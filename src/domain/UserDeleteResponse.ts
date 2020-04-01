
/**
 * User API bulk response object.
 *
 * @author Trevor Smith
 */
export class UserDeleteResponse {
  dryRun?: boolean;
  hardDelete?: boolean;
  total?: number;
  userIds?: Array<string>;
}

export default UserDeleteResponse;
