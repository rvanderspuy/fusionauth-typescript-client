
/**
 * CleanSpeak configuration at the system and application level.
 *
 * @author Brian Pontarelli
 */
export class CleanSpeakConfiguration extends Enableable {
  apiKey?: string;
  applicationIds?: Array<UUID>;
  url?: string;
  usernameModeration?: UsernameModeration;
}

export default CleanSpeakConfiguration;
