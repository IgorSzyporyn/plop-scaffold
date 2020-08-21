import path from 'path'
import { getShared } from './shared'
import { IS_DEV } from '../constants'

export function getPlopFilepath(name: SharedKey) {
  const { cwd } = getShared(name)

  const _path = IS_DEV
    ? 'node_modules/plop/bin/plop.js'
    : 'node_modules/plop-scaffold/node_modules/plop/bin/plop.js'

  const filepath = path.relative(cwd, _path)

  return filepath
}
