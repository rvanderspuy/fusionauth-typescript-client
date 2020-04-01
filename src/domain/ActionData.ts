
export class ActionData {
  actioneeUserId?: UUID;
  actionerUserId?: UUID;
  applicationIds?: Array<UUID>;
  comment?: string;
  emailUser?: boolean;
  expiry?: number;
  notifyUser?: boolean;
  option?: string;
  reasonId?: UUID;
  userActionId?: UUID;
}

export default ActionData;
