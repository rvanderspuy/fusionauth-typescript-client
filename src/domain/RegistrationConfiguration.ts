
export class RegistrationConfiguration extends Enableable {
  birthDate?: Requirable;
  confirmPassword?: boolean;
  firstName?: Requirable;
  fullName?: Requirable;
  lastName?: Requirable;
  loginIdType?: LoginIdType;
  middleName?: Requirable;
  mobilePhone?: Requirable;
}

export default RegistrationConfiguration;
