
/**
 * A JSON Web Key as defined by <a href="https://tools.ietf.org/html/rfc7517#section-4">RFC 7517 JSON Web Key (JWK)
 * Section 4</a> and <a href="https://tools.ietf.org/html/rfc7518">RFC 7518 JSON Web Algorithms (JWA)</a>.
 *
 * @author Daniel DeGroff
 */
export class JSONWebKey {
  alg?: Algorithm;
  crv?: string;
  d?: string;
  dp?: string;
  dq?: string;
  e?: string;
  kid?: string;
  kty?: KeyType;
  n?: string;
  [other: string]: any; // Any other fields
  p?: string;
  q?: string;
  qi?: string;
  use?: string;
  x?: string;
  x5c?: Array<string>;
  x5t?: string;
  x5t_S256?: string;
  y?: string;
}

export default JSONWebKey;
