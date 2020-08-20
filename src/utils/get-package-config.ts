import path from 'path'
import { getShared } from './shared'

export function getPackageConfig(name: ConfigType) {
  const { cwd } = getShared('reactComponent')

  const pckage = require(path.join(cwd, 'package.json'))

  let packageConfig = {}

  if (pckage) {
    packageConfig =
      (pckage && pckage['plop-scaffold'] && pckage['plop-scaffold'][name]) || {}
  }

  return packageConfig
}
