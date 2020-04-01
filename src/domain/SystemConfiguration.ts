
/**
 * @author Brian Pontarelli
 */
export class SystemConfiguration {
  auditLogConfiguration?: AuditLogConfiguration;
  cookieEncryptionIV?: string;
  cookieEncryptionKey?: string;
  corsConfiguration?: CORSConfiguration;
  data?: ObjectMap<string, any>;
  eventLogConfiguration?: EventLogConfiguration;
  loginRecordConfiguration?: LoginRecordConfiguration;
  reportTimezone?: string;
  uiConfiguration?: UIConfiguration;
}

export default SystemConfiguration;
