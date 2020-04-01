
/**
 * An action that can be executed on a user (discipline or reward potentially).
 *
 * @author Brian Pontarelli
 */
export class UserAction {
  active?: boolean;
  cancelEmailTemplateId?: UUID;
  endEmailTemplateId?: UUID;
  id?: UUID;
  includeEmailInEventJSON?: boolean;
  localizedNames?: LocalizedStrings;
  modifyEmailTemplateId?: UUID;
  name?: string;
  options?: Array<UserActionOption>;
  preventLogin?: boolean;
  sendEndEvent?: boolean;
  startEmailTemplateId?: UUID;
  temporal?: boolean;
  transactionType?: TransactionType;
  userEmailingEnabled?: boolean;
  userNotificationsEnabled?: boolean;
}

export default UserAction;
