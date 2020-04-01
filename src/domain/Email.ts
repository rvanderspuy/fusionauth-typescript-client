
/**
 * This class is an abstraction of a simple email message.
 *
 * @author Brian Pontarelli
 */
export class Email {
  attachments?: Array<Attachment>;
  bcc?: Array<EmailAddress>;
  cc?: Array<EmailAddress>;
  from?: EmailAddress;
  html?: string;
  replyTo?: EmailAddress;
  subject?: string;
  text?: string;
  to?: Array<EmailAddress>;
}

export default Email;
