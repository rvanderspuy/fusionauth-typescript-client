
/**
 * @author Trevor Smith
 */
export class Theme {
  data?: ObjectMap<string, any>;
  defaultMessages?: string;
  id?: UUID;
  insertInstant?: number;
  lastUpdateInstant?: number;
  localizedMessages?: LocalizedStrings;
  name?: string;
  stylesheet?: string;
  templates?: Templates;
}

export default Theme;
