import { ProcessEnvOptions } from 'child_process'
import { PROJECT_ID } from '../constants'
import { getShared } from './shared'

function extend(
  env: {
    [x: string]: string | null | undefined
  },
  config: Config
) {
  const extendedEnv = { ...env }

  Object.keys(config).forEach((key) => {
    let value = config[key]

    if (value === null) {
      value = 'NULL'
    }

    if (typeof value === 'boolean') {
      value = value ? 'TRUE' : 'FALSE'
    }

    if (typeof value === 'number') {
      value = `${value}`
    }

    extendedEnv[`${PROJECT_ID}-${key}`] = value
  })

  return extendedEnv
}

export function getCommandEnv(config: Config) {
  const configEnv = extend(process.env, config)
  const { username, useremail, cwd } = getShared()
  const env = extend(configEnv, { gituser: username, gitemail: useremail, cwd })

  return env as ProcessEnvOptions['env']
}
