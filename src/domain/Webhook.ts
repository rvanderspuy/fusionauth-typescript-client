
/**
 * A server where events are sent. This includes user action events and any other events sent by FusionAuth.
 *
 * @author Brian Pontarelli
 */
export class Webhook {
  applicationIds?: Array<UUID>;
  connectTimeout?: number;
  data?: ObjectMap<string, any>;
  description?: string;
  eventsEnabled?: ObjectMap<EventType, boolean>;
  global?: boolean;
  headers?: HTTPHeaders;
  httpAuthenticationPassword?: string;
  httpAuthenticationUsername?: string;
  id?: UUID;
  readTimeout?: number;
  sslCertificate?: string;
  url?: string;
}

export default Webhook;
