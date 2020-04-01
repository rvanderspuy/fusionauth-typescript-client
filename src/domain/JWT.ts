
/**
 * JSON Web Token (JWT) as defined by RFC 7519.
 * <pre>
 * From RFC 7519 Section 1. Introduction:
 *    The suggested pronunciation of JWT is the same as the English word "jot".
 * </pre>
 * The JWT is not Thread-Safe and should not be re-used.
 *
 * @author Daniel DeGroff
 */
export class JWT {
  aud?: any;
  exp?: number;
  iat?: number;
  iss?: string;
  jti?: string;
  nbf?: number;
  [otherClaims: string]: any; // Any other fields
  sub?: string;
}

export default JWT;
