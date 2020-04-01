
export class SAMLv2Configuration extends Enableable {
  audience?: string;
  callbackURL?: string;
  debug?: boolean;
  issuer?: string;
  keyId?: UUID;
  logoutURL?: string;
  xmlSignatureC14nMethod?: CanonicalizationMethod;
}

export default SAMLv2Configuration;
