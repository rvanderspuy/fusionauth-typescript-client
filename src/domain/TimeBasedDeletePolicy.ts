
/**
 * A policy for deleting Users.
 *
 * @author Trevor Smith
 */
export class TimeBasedDeletePolicy extends Enableable {
  numberOfDaysToRetain?: number;
}

export default TimeBasedDeletePolicy;
