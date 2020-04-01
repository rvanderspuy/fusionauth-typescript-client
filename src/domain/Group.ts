
/**
 * @author Tyler Scott
 */
export class Group {
  data?: ObjectMap<string, any>;
  id?: UUID;
  name?: string;
  roles?: ObjectMap<UUID, Array<ApplicationRole>>;
  tenantId?: UUID;
}

export default Group;
