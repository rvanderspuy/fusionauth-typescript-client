
/**
 * Models the Refresh Token Revoke Event (and can be converted to JSON). This event might be for a single token, a user
 * or an entire application.
 *
 * @author Brian Pontarelli
 */
export class JWTRefreshTokenRevokeEvent extends BaseEvent {
  applicationId?: UUID;
  applicationTimeToLiveInSeconds?: ObjectMap<UUID, number>;
  user?: User;
  userId?: UUID;
}

export default JWTRefreshTokenRevokeEvent;
