
/**
 * A JavaScript lambda function that is executed during certain events inside FusionAuth.
 *
 * @author Brian Pontarelli
 */
export class Lambda extends Enableable {
  body?: string;
  debug?: boolean;
  id?: UUID;
  insertInstant?: number;
  name?: string;
  type?: LambdaType;
}

export default Lambda;
