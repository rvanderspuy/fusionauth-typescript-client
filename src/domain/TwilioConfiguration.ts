
/**
 * Twilio Service Configuration.
 *
 * @author Daniel DeGroff
 */
export class TwilioConfiguration extends Enableable {
  accountSID?: string;
  authToken?: string;
  fromPhoneNumber?: string;
  messagingServiceSid?: string;
  url?: string;
}

export default TwilioConfiguration;
