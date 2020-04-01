
/**
 * Models the JWT public key Refresh Token Revoke Event (and can be converted to JSON). This event might be for a single
 * token, a user or an entire application.
 *
 * @author Brian Pontarelli
 */
export class JWTPublicKeyUpdateEvent extends BaseEvent {
  applicationIds?: Set<UUID>;
}

export default JWTPublicKeyUpdateEvent;
