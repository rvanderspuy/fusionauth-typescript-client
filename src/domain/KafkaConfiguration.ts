
/**
 * @author Daniel DeGroff
 */
export class KafkaConfiguration extends Enableable {
  defaultTopic?: string;
  producer?: ObjectMap<string, string>;
}

export default KafkaConfiguration;
