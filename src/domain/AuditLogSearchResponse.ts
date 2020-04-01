
/**
 * Audit log response.
 *
 * @author Brian Pontarelli
 */
export class AuditLogSearchResponse {
  auditLogs?: Array<AuditLog>;
  total?: number;
}

export default AuditLogSearchResponse;
