import { ProcessEnvOptions } from 'child_process'
import { PROJECT_ID } from '../constants'

export function getCommandEnv(config: Config) {
  const env = { ...process.env }

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

    env[`${PROJECT_ID}-${key}`] = value
  })

  return env as ProcessEnvOptions['env']
}
