
/**
 * @author Trevor Smith
 */
export class DeviceResponse {
  device_code?: string;
  expires_in?: number;
  interval?: number;
  user_code?: string;
  verification_uri?: string;
  verification_uri_complete?: string;
}

export default DeviceResponse;
