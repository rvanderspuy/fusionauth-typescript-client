
/**
 * Event log used internally by FusionAuth to help developers debug hooks, Webhooks, email templates, etc.
 *
 * @author Brian Pontarelli
 */
export class EventLog {
  id?: number;
  insertInstant?: number;
  message?: string;
  type?: EventLogType;
}

export default EventLog;
