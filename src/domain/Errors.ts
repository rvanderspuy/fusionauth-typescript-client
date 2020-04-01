
/**
 * Standard error domain object that can also be used as the response from an API call.
 *
 * @author Brian Pontarelli
 */
export class Errors {
  fieldErrors?: ObjectMap<string, Array<Error>>;
  generalErrors?: Array<Error>;
}

export default Errors;
