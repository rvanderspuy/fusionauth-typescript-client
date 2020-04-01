
export class CORSConfiguration extends Enableable {
  allowCredentials?: boolean;
  allowedHeaders?: Array<string>;
  allowedMethods?: Array<HTTPMethod>;
  allowedOrigins?: Array<string>;
  exposedHeaders?: Array<string>;
  preflightMaxAgeInSeconds?: number;
}

export default CORSConfiguration;
