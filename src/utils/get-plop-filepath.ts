import path from 'path'
import { getShared } from './shared'

export function getPlopFilepath() {
  const { projectPath } = getShared('main')

  const filepath = path.join(projectPath, 'node_modules/plop/', 'plop.js')

  return filepath
}
