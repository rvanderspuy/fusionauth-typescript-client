
/**
 * @author Daniel DeGroff
 */
export class HYPRIdentityProvider extends BaseIdentityProvider<HYPRApplicationConfiguration> {
  licensingEnabled?: boolean;
  licensingURL?: string;
  relyingPartyApplicationId?: string;
  relyingPartyURL?: string;
}

export default HYPRIdentityProvider;
