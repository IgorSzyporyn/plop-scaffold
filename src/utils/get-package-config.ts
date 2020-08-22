import path from 'path'
import { getShared } from './shared'

export function getPackageConfig(name: RouteTypes) {
  const { cwd } = getShared()
  const pckJsonPath = path.join(cwd, 'package.json')
  const pckJson = require(pckJsonPath)

  let packageConfig = {}

  if (pckJson) {
    packageConfig =
      (pckJson && pckJson['plop-scaffold'] && pckJson['plop-scaffold'][name]) || {}
  }

  return packageConfig
}
