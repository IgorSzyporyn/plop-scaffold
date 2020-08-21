type ConfigTypes = 'main' | 'react' | 'project-cli'

type Config = {
  [key: string]: boolean | null | string | number | undefined
}
