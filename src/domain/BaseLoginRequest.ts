
/**
 * @author Daniel DeGroff
 */
export class BaseLoginRequest {
  applicationId?: UUID;
  ipAddress?: string;
  metaData?: MetaData;
  noJWT?: boolean;
}

export default BaseLoginRequest;
