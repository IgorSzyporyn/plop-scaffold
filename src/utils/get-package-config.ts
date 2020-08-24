import path from 'path'
import { getShared } from './shared'
import { print } from './print'

export function getPackageConfig(name: CommandTypes) {
  const { cwd } = getShared()
  const pckJsonPath = path.join(cwd, 'package.json')
  let pckJson: false | Record<string, any> = false

  try {
    pckJson = require(pckJsonPath)
  } catch (e) {
    print('No package.json file found in your folder', 'info')
  }

  let packageConfig = {}

  if (pckJson) {
    packageConfig =
      (pckJson && pckJson['plop-scaffold'] && pckJson['plop-scaffold'][name]) || {}
  }

  return packageConfig
}
