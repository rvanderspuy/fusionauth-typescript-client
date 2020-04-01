
/**
 * @author Brian Pontarelli
 */
export class TwoFactorRequest {
  code?: string;
  delivery?: TwoFactorDelivery;
  secret?: string;
  secretBase32Encoded?: string;
}

export default TwoFactorRequest;
