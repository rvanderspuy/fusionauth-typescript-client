
/**
 * Models a JWT Refresh Token.
 *
 * @author Daniel DeGroff
 */
export class RefreshToken {
  applicationId?: UUID;
  insertInstant?: number;
  metaData?: MetaData;
  startInstant?: number;
  token?: string;
  userId?: UUID;
}

export default RefreshToken;
