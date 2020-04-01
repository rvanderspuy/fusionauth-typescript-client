
/**
 * @author Daniel DeGroff
 */
export class LoginRecordSearchCriteria extends BaseSearchCriteria {
  applicationId?: UUID;
  end?: number;
  start?: number;
  userId?: UUID;
}

export default LoginRecordSearchCriteria;
