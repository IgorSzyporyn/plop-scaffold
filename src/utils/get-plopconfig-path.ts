import path from 'path'
import { getShared } from './shared'

export function getPlopConfigPath(name: SharedKey) {
  const { projectPath } = getShared(name)

  const plopConfigPath = path.join(projectPath, 'dist/commands/', name)

  return plopConfigPath
}
