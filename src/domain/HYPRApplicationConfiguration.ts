
/**
 * @author Daniel DeGroff
 */
export class HYPRApplicationConfiguration extends BaseIdentityProviderApplicationConfiguration {
  licensingEnabled?: boolean;
  licensingEnabledOverride?: boolean;
  licensingURL?: string;
  relyingPartyApplicationId?: string;
  relyingPartyURL?: string;
}

export default HYPRApplicationConfiguration;
