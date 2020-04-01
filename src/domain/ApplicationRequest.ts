
/**
 * The Application API request object.
 *
 * @author Brian Pontarelli
 */
export class ApplicationRequest {
  application?: Application;
  role?: ApplicationRole;
  webhookIds?: Array<UUID>;
}

export default ApplicationRequest;
