
/**
 * This class is a simple attachment with a byte array, name and MIME type.
 *
 * @author Brian Pontarelli
 */
export class Attachment {
  attachment?: Array<number>;
  mime?: string;
  name?: string;
}

export default Attachment;
