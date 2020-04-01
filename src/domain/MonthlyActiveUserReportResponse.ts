
/**
 * Response for the daily active user report.
 *
 * @author Brian Pontarelli
 */
export class MonthlyActiveUserReportResponse {
  monthlyActiveUsers?: Array<Count>;
  total?: number;
}

export default MonthlyActiveUserReportResponse;
