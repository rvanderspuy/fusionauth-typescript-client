
/**
 * Base-class for all FusionAuth events.
 *
 * @author Brian Pontarelli
 */
export class BaseEvent {
  createInstant?: number;
  id?: UUID;
  tenantId?: UUID;
}

export default BaseEvent;
