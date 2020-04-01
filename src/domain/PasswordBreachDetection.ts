
/**
 * @author Daniel DeGroff
 */
export class PasswordBreachDetection extends Enableable {
  matchMode?: BreachMatchMode;
  notifyUserEmailTemplateId?: UUID;
  onLogin?: BreachAction;
}

export default PasswordBreachDetection;
