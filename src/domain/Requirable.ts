
/**
 * Something that can be required and thus also optional. This currently extends Enableable because anything that is
 * require/optional is almost always enableable as well.
 *
 * @author Brian Pontarelli
 */
export class Requirable extends Enableable {
  required?: boolean;
}

export default Requirable;
