
/**
 * Group API request object.
 *
 * @author Daniel DeGroff
 */
export class GroupRequest {
  group?: Group;
  roleIds?: Array<UUID>;
}

export default GroupRequest;
