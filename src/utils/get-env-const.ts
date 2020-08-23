import { PROJECT_ID } from '../constants'

export function getEnvConst(name: string) {
  const { env } = process

  const envConst = env[`${PROJECT_ID}-${name}`]
    ? env[`${PROJECT_ID}-${name}`] !== 'NULL'
      ? env[`${PROJECT_ID}-${name}`]
      : ''
    : ''

  return envConst
}
