import { getEnv } from './get-env'

export function getEnvConst(name: string) {
  const env = getEnv()
  const envConst = env[name] !== 'NULL' ? env[name] : ''

  return envConst
}
