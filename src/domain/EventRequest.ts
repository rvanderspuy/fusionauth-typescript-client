
/**
 * Container for the event information. This is the JSON that is sent from FusionAuth to webhooks.
 *
 * @author Brian Pontarelli
 */
export class EventRequest {
  event?: BaseEvent;
}

export default EventRequest;
