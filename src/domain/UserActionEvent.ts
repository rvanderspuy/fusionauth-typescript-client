
/**
 * Models the user action event (and can be converted to JSON).
 *
 * @author Brian Pontarelli
 */
export class UserActionEvent extends BaseEvent {
  action?: string;
  actioneeUserId?: UUID;
  actionerUserId?: UUID;
  actionId?: UUID;
  applicationIds?: Array<UUID>;
  comment?: string;
  email?: Email;
  emailedUser?: boolean;
  expiry?: number;
  localizedAction?: string;
  localizedDuration?: string;
  localizedOption?: string;
  localizedReason?: string;
  notifyUser?: boolean;
  option?: string;
  phase?: UserActionPhase;
  reason?: string;
  reasonCode?: string;
}

export default UserActionEvent;
