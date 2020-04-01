
/**
 * A user over an period (for daily and monthly active user calculations).
 *
 * @author Brian Pontarelli
 */
export class IntervalUser {
  applicationId?: UUID;
  period?: number;
  userId?: UUID;
}

export default IntervalUser;
