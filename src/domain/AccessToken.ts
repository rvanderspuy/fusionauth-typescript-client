
/**
 * @author Daniel DeGroff
 */
export class AccessToken {
  access_token?: string;
  expires_in?: number;
  id_token?: string;
  refresh_token?: string;
  scope?: string;
  token_type?: TokenType;
  userId?: UUID;
}

export default AccessToken;
