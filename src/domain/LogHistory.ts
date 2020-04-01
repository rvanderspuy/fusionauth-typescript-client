
/**
 * A historical state of a user log event. Since events can be modified, this stores the historical state.
 *
 * @author Brian Pontarelli
 */
export class LogHistory {
  historyItems?: Array<HistoryItem>;
}

export default LogHistory;
