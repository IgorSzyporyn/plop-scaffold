type ConfigTypes =
  | 'main'
  | 'react'
  | 'project-cli'
  | 'project-react-component'
  | 'react-next-page'

type Config = {
  [key: string]: boolean | null | string | number | undefined
}
