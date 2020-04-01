
/**
 * The response from the total report. This report stores the total numbers for each application.
 *
 * @author Brian Pontarelli
 */
export class TotalsReportResponse {
  applicationTotals?: ObjectMap<UUID, Totals>;
  globalRegistrations?: number;
  totalGlobalRegistrations?: number;
}

export default TotalsReportResponse;
