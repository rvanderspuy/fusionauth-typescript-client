
/**
 * This class is the user query. It provides a build pattern as well as public fields for use on forms and in actions.
 *
 * @author Brian Pontarelli
 */
export class UserSearchCriteria extends BaseSearchCriteria {
  ids?: Array<UUID>;
  query?: string;
  queryString?: string;
  sortFields?: Array<SortField>;
}

export default UserSearchCriteria;
