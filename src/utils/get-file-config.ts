import { getShared } from './shared'

export function getFileConfig(name: ConfigType) {
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
