
/**
 * Raw login information for each time a user logs into an application.
 *
 * @author Brian Pontarelli
 */
export class RawLogin {
  applicationId?: UUID;
  instant?: number;
  ipAddress?: string;
  userId?: UUID;
}

export default RawLogin;
