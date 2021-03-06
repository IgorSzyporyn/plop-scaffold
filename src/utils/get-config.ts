import chalk from 'chalk'
import { ParsedArgs } from 'minimist'
import deepmerge from 'ts-deepmerge'
import { CONFIG_FILE_NAME } from '../constants'
import { getConfigFile } from './get-config-file'
import { getPackageConfig } from './get-package-config'
import { print } from './print'

export function getConfig(
  name: Command,
  defaultConfig: Record<string, any> = {},
  argv: ParsedArgs,
  allowedArgs?: Readonly<string[]>
) {
  const packageConfig = getPackageConfig(name)
  const rcConfig = getConfigFile(name)

  const hasPackageConfig = Object.keys(packageConfig).length > 0
  const hasRcConfig = Object.keys(rcConfig).length > 0

  if (hasPackageConfig) {
    print.newline()
    print.success(`Using configuration found in package.json`)
  }

  if (hasRcConfig) {
    if (!hasPackageConfig) {
      print.newline()
    }
    print.success(`Using configuration found in ${CONFIG_FILE_NAME}`)
  }

  if (hasPackageConfig && hasRcConfig) {
    print.newline()
    print.error(
      ` \u261D  You have configurations in both ${chalk.white.bold(
        'package.json'
      )} and ${chalk.white.bold(CONFIG_FILE_NAME)}`
    )
    print.error(
      `    Please only use one or the other (${CONFIG_FILE_NAME} will overwrite package.json)`
    )
  }

  const baseConfig = deepmerge(packageConfig, rcConfig)
  const configBeforeCulling = deepmerge(defaultConfig, baseConfig)
  const configBeforeSanitazion: Config = {}
  const config: Config = {}

  Object.keys(argv).forEach((key) => {
    const value = argv[key]
    configBeforeCulling[key] = value
  })

  Object.keys(configBeforeCulling).forEach((key) => {
    if (allowedArgs) {
      const isAllowed = allowedArgs.indexOf(key) > -1

      if (isAllowed) {
        configBeforeSanitazion[key] = configBeforeCulling[key]
      }
    } else {
      configBeforeSanitazion[key] = configBeforeCulling[key]
    }
  })

  Object.keys(configBeforeSanitazion).forEach((key) => {
    const value = configBeforeSanitazion[key]
    let sanitizedValue = undefined

    if (value === 'true' || value === 'false' || value === 'null') {
      try {
        sanitizedValue = JSON.parse(value)
      } catch (e) {}
      if (sanitizedValue !== undefined) {
        config[key] = sanitizedValue
      }
    } else {
      config[key] = value
    }
  })

  return { config, hasPackageConfig, hasRcConfig }
}
