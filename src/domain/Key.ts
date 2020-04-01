
/**
 * Domain for a public key, key pair or an HMAC secret. This is used by KeyMaster to manage keys for JWTs, SAML, etc.
 *
 * @author Brian Pontarelli
 */
export class Key {
  algorithm?: KeyAlgorithm;
  certificate?: string;
  certificateInformation?: CertificateInformation;
  expirationInstant?: number;
  id?: UUID;
  insertInstant?: number;
  issuer?: string;
  kid?: string;
  length?: number;
  name?: string;
  pair?: boolean;
  privateKey?: string;
  publicKey?: string;
  secret?: string;
  type?: KeyType;
}

export default Key;
