interface LiftoffEnv {
  /**
   * the current working directory
   */
  cwd: string
  /**
   * an array of modules that liftoff tried to pre-load
   */
  require: string[]
  /**
   * the config files searched for
   */
  configNameSearch: string[]
  /**
   * the full path to your configuration file (if found)
   */
  configPath: string | undefined
  /**
   * the base directory of your configuration file (if found)
   */
  configBase: string | undefined
  /**
   * the full path to the local module your project relies on (if found)
   */
  modulePath: string | undefined
  /**
   * the contents of the local module's package.json (if found)
   */
  modulePackage: { [key: string]: any } | undefined
  /**
   * an object of filepaths for each found config file (filepath values will be null if not found)
   */
  configFiles:
    | { [extensions: string]: { [path: string]: string | null } }
    | undefined
}
