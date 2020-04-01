
/**
 * Registration API request object.
 *
 * @author Brian Pontarelli
 */
export class RegistrationRequest {
  generateAuthenticationToken?: boolean;
  registration?: UserRegistration;
  sendSetPasswordEmail?: boolean;
  skipRegistrationVerification?: boolean;
  skipVerification?: boolean;
  user?: User;
}

export default RegistrationRequest;
