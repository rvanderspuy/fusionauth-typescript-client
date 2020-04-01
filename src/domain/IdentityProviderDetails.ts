
export class IdentityProviderDetails {
  id?: UUID;
  name?: string;
  oauth2?: IdentityProviderOauth2Configuration;
  type?: IdentityProviderType;
}

export default IdentityProviderDetails;
