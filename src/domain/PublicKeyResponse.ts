
/**
 * JWT Public Key Response Object
 *
 * @author Daniel DeGroff
 */
export class PublicKeyResponse {
  publicKey?: string;
  publicKeys?: ObjectMap<string, string>;
}

export default PublicKeyResponse;
