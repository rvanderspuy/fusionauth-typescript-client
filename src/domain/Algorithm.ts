
/**
 * Available JSON Web Algorithms (JWA) as described in RFC 7518 available for this JWT implementation.
 *
 * @author Daniel DeGroff
 */
export enum Algorithm {
  ES256 = "SHA256withECDSA",
  ES384 = "SHA384withECDSA",
  ES512 = "SHA512withECDSA",
  HS256 = "HmacSHA256",
  HS384 = "HmacSHA384",
  HS512 = "HmacSHA512",
  RS256 = "SHA256withRSA",
  RS384 = "SHA384withRSA",
  RS512 = "SHA512withRSA",
  none = "None"
}

export default Algorithm;
