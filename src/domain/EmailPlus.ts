
export class EmailPlus extends Enableable {
  emailTemplateId?: UUID;
  maximumTimeToSendEmailInHours?: number;
  minimumTimeToSendEmailInHours?: number;
}

export default EmailPlus;
