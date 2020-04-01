
/**
 * Search criteria for the event log.
 *
 * @author Brian Pontarelli
 */
export class EventLogSearchCriteria extends BaseSearchCriteria {
  end?: number;
  message?: string;
  start?: number;
  type?: EventLogType;
}

export default EventLogSearchCriteria;
