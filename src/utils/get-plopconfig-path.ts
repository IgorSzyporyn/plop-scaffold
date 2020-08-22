import path from 'path'
import { getShared } from './shared'

export function getPlopConfigPath(name: RouteTypes) {
  const { distPath } = getShared()

  const plopConfigPath = path.join(distPath, 'commands/', name)

  return plopConfigPath
}
