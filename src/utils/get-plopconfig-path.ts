import path from 'path'
import { getShared } from './shared'
import { IS_DEV } from '../constants'

export function getPlopConfigPath(name: SharedKey) {
  const { cwd } = getShared(name)

  const _path = IS_DEV
    ? `dist/commands/${name}/`
    : `node_modules/plop-scaffold/dist/commands/${name}/`

  const plopConfigFilepath = path.relative(cwd, _path)

  return plopConfigFilepath
}
