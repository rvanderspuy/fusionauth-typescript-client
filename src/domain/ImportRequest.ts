
/**
 * Import request.
 *
 * @author Brian Pontarelli
 */
export class ImportRequest {
  encryptionScheme?: string;
  factor?: number;
  users?: Array<User>;
  validateDbConstraints?: boolean;
}

export default ImportRequest;
