
/**
 * Models a consent.
 *
 * @author Daniel DeGroff
 */
export class Consent {
  consentEmailTemplateId?: UUID;
  countryMinimumAgeForSelfConsent?: LocalizedIntegers;
  data?: ObjectMap<string, any>;
  defaultMinimumAgeForSelfConsent?: number;
  emailPlus?: EmailPlus;
  id?: UUID;
  multipleValuesAllowed?: boolean;
  name?: string;
  values?: Array<string>;
}

export default Consent;
