import { getShared } from './shared'

import path from 'path'

export function getPlopFilepath(name: SharedKey) {
  const { cwd } = getShared(name)
  const filepath = path.relative(
    cwd,
    'node_modules/plop-scaffold/node_modules/plop/bin/plop.js'
  )

  return filepath
}
