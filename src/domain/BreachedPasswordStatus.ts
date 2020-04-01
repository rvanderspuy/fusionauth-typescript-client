
/**
 * @author Daniel DeGroff
 */
export enum BreachedPasswordStatus {
  None,
  ExactMatch,
  SubAddressMatch,
  PasswordOnly,
  CommonPassword
}

export default BreachedPasswordStatus;
