import { getShared } from './shared'

import path from 'path'

export function getPlopConfigPath(name: SharedKey) {
  const { cwd } = getShared(name)

  const plopConfigFilepath = path.relative(
    cwd,
    'node_modules/plop-scaffold/dist/managers/react-component/'
  )

  return plopConfigFilepath
}
