import { getShared } from './shared'

export function getConfigFile(name: ConfigTypes) {
  const { configPath } = getShared(name)
  let fileConfig = {}

  if (configPath) {
    const fileJson = require(configPath)

    if (fileJson && fileJson[name]) {
      fileConfig = fileJson[name]
    }
  }

  return fileConfig
}
