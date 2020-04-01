
/**
 * The transaction types for Webhooks and other event systems within FusionAuth.
 *
 * @author Brian Pontarelli
 */
export enum TransactionType {
  None,
  Any,
  SimpleMajority,
  SuperMajority,
  AbsoluteMajority
}

export default TransactionType;
