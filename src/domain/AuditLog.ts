
/**
 * An audit log.
 *
 * @author Brian Pontarelli
 */
export class AuditLog {
  data?: ObjectMap<string, any>;
  id?: number;
  insertInstant?: number;
  insertUser?: string;
  message?: string;
  newValue?: any;
  oldValue?: any;
  reason?: string;
}

export default AuditLog;
