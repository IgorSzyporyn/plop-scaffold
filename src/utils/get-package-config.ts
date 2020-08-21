import path from 'path'
import { getShared } from './shared'

export function getPackageConfig(name: ConfigTypes) {
  const { cwd } = getShared('react')

  const pckage = require(path.join(cwd, 'package.json'))

  let packageConfig = {}

  if (pckage) {
    packageConfig =
      (pckage && pckage['plop-scaffold'] && pckage['plop-scaffold'][name]) || {}
  }

  return packageConfig
}
