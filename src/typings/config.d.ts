type ConfigType = 'main' | 'reactComponent' | 'projectCli'
type Config = {
  [key: string]: boolean | null | string | number | undefined
}
