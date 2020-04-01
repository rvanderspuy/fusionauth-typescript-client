
/**
 * @author Brian Pontarelli
 */
export class FamilyConfiguration extends Enableable {
  allowChildRegistrations?: boolean;
  confirmChildEmailTemplateId?: UUID;
  deleteOrphanedAccounts?: boolean;
  deleteOrphanedAccountsDays?: number;
  familyRequestEmailTemplateId?: UUID;
  maximumChildAge?: number;
  minimumOwnerAge?: number;
  parentEmailRequired?: boolean;
  parentRegistrationEmailTemplateId?: UUID;
}

export default FamilyConfiguration;
