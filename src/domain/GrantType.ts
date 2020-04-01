
/**
 * Authorization Grant types as defined by the <a href="https://tools.ietf.org/html/rfc6749">The OAuth 2.0 Authorization
 * Framework - RFC 6749</a>.
 * <p>
 * Specific names as defined by <a href="https://tools.ietf.org/html/rfc7591#section-4.1">
 * OAuth 2.0 Dynamic Client Registration Protocol - RFC 7591 Section 4.1</a>
 *
 * @author Daniel DeGroff
 */
export enum GrantType {
  authorization_code = "authorization_code",
  implicit = "implicit",
  password = "password",
  client_credentials = "client_credentials",
  refresh_token = "refresh_token",
  unknown = "unknown",
  device_code = "urn:ietf:params:oauth:grant-type:device_code"
}

export default GrantType;
