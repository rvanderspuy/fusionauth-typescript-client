
/**
 * @author Daniel DeGroff
 */
export class SendRequest {
  bccAddresses?: Array<string>;
  ccAddresses?: Array<string>;
  requestData?: ObjectMap<string, any>;
  userIds?: Array<UUID>;
}

export default SendRequest;
