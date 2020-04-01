
/**
 * The types of lambdas that indicate how they are invoked by FusionAuth.
 *
 * @author Brian Pontarelli
 */
export enum LambdaType {
  JWTPopulate,
  OpenIDReconcile,
  SAMLv2Reconcile,
  SAMLv2Populate
}

export default LambdaType;
