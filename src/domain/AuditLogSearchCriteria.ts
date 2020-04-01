
/**
 * @author Brian Pontarelli
 */
export class AuditLogSearchCriteria extends BaseSearchCriteria {
  end?: number;
  message?: string;
  start?: number;
  user?: string;
}

export default AuditLogSearchCriteria;
