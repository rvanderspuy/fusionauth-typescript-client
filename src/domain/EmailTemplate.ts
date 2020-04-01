
/**
 * Stores an email template used to send emails to users.
 *
 * @author Brian Pontarelli
 */
export class EmailTemplate {
  defaultFromName?: string;
  defaultHtmlTemplate?: string;
  defaultSubject?: string;
  defaultTextTemplate?: string;
  fromEmail?: string;
  id?: UUID;
  localizedFromNames?: LocalizedStrings;
  localizedHtmlTemplates?: LocalizedStrings;
  localizedSubjects?: LocalizedStrings;
  localizedTextTemplates?: LocalizedStrings;
  name?: string;
}

export default EmailTemplate;
