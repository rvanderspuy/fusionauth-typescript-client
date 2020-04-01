
export class CertificateInformation {
  issuer?: string;
  md5Fingerprint?: string;
  serialNumber?: string;
  sha1Fingerprint?: string;
  sha1Thumbprint?: string;
  sha256Fingerprint?: string;
  sha256Thumbprint?: string;
  subject?: string;
  validFrom?: number;
  validTo?: number;
}

export default CertificateInformation;
