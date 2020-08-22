import path from 'path'
import { getShared } from './shared'

export function getPlopFilepath() {
  const { distPath } = getShared()

  const filepath = path.join(distPath, 'node_modules/plop/', 'plop.js')

  return filepath
}
