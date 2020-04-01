
/**
 * Models the event types that FusionAuth produces.
 *
 * @author Brian Pontarelli
 */
export enum EventType {
  UserDelete = "user.delete",
  UserCreate = "user.create",
  UserUpdate = "user.update",
  UserDeactivate = "user.deactivate",
  UserBulkCreate = "user.bulk.create",
  UserReactivate = "user.reactivate",
  UserAction = "user.action",
  JWTRefreshTokenRevoke = "jwt.refresh-token.revoke",
  JWTPublicKeyUpdate = "jwt.public-key.update",
  UserLoginSuccess = "user.login.success",
  UserLoginFailed = "user.login.failed",
  UserRegistrationCreate = "user.registration.create",
  UserRegistrationUpdate = "user.registration.update",
  UserRegistrationDelete = "user.registration.delete",
  UserRegistrationVerified = "user.registration.verified",
  UserEmailVerified = "user.email.verified",
  UserPasswordBreach = "user.password.breach",
  Test = "test"
}

export default EventType;
