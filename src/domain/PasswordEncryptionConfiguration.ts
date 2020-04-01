
/**
 * Password Encryption Scheme Configuration
 *
 * @author Daniel DeGroff
 */
export class PasswordEncryptionConfiguration {
  encryptionScheme?: string;
  encryptionSchemeFactor?: number;
  modifyEncryptionSchemeOnLogin?: boolean;
}

export default PasswordEncryptionConfiguration;
