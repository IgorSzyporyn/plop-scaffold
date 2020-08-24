import { getShared } from './shared'

export function getConfigFile(name: CommandTypes) {
  const { configPath } = getShared()
  let fileConfig = {}

  if (configPath) {
    const fileJson = require(configPath)

    if (fileJson && fileJson[name]) {
      fileConfig = fileJson[name]
    }
  }

  return fileConfig
}
