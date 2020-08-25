import path from 'path'
import { getShared } from './shared'
import { print } from './print'

export function getPackageConfig(command: Command) {
  const { cwd } = getShared()
  const pckJsonPath = path.join(cwd, 'package.json')
  let pckJson: false | Record<string, any> = false

  try {
    pckJson = require(pckJsonPath)
  } catch (e) {
    if (command !== 'project-cli') {
      print.info('No package.json file found in your folder')
    }
  }

  let packageConfig = {}

  if (pckJson) {
    packageConfig =
      (pckJson && pckJson['plop-scaffold'] && pckJson['plop-scaffold'][command]) ||
      {}
  }

  return packageConfig
}
