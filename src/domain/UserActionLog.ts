
/**
 * A log for an action that was taken on a User.
 *
 * @author Brian Pontarelli
 */
export class UserActionLog {
  actioneeUserId?: UUID;
  actionerUserId?: UUID;
  applicationIds?: Array<UUID>;
  comment?: string;
  createInstant?: number;
  emailUserOnEnd?: boolean;
  endEventSent?: boolean;
  expiry?: number;
  history?: LogHistory;
  id?: UUID;
  localizedName?: string;
  localizedOption?: string;
  localizedReason?: string;
  name?: string;
  notifyUserOnEnd?: boolean;
  option?: string;
  reason?: string;
  reasonCode?: string;
  userActionId?: UUID;
}

export default UserActionLog;
