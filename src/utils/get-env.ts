import { PROJECT_ID } from '../constants'

export function getEnv() {
  const sourceEnv = { ...process.env }
  const env: Record<string, string> = {}

  for (const key in sourceEnv) {
    const match = key.match(PROJECT_ID)

    if (match !== null) {
      const toReplace = `${PROJECT_ID}-`
      const newKey = key.replace(toReplace, '')
      const value = sourceEnv[key] || ''
      env[newKey] = value !== 'NULL' ? value : ''
    }
  }

  return env
}
