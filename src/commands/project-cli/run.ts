import { paramCase } from 'change-case'
import { fork } from 'child_process'
import { checkForPrefilledValues } from '../../utils/check-for-prefilled-values'
import { getCommandEnv } from '../../utils/get-command-env'
import { getConfig } from '../../utils/get-config'
import { getPlopFilepath } from '../../utils/get-plop-filepath'
import { getPlopConfigPath } from '../../utils/get-plopconfig-path'
import { print } from '../../utils/print'
import { getShared } from '../../utils/shared'
import { allowedArgs, defaultProjectCliConfig, prefilledArgs } from './index'
import { printFinalNote } from './print-final-note'
import { getPlopExecArgs } from './utils/get-plop-exec-args'

const command = 'project-cli'

export const run = async () => {
  print.message('Create a NPM release ready a NodeJS client project scaffold')

  const { argv, cwd } = getShared()
  const { config } = getConfig(command, defaultProjectCliConfig, argv, allowedArgs)

  // Only allow config.name as a paramCased string if it comes in as a config
  if (config.name) {
    try {
      config.name = JSON.stringify(config.name)
    } catch (e) {}

    if (typeof config.name === 'string') {
      config.name = paramCase(config.name)
    }
  }

  const plopBin = getPlopFilepath()
  const plopConfigPath = getPlopConfigPath(command)
  const commandEnv = getCommandEnv(config)
  const prefilled = checkForPrefilledValues(config, prefilledArgs)
  const execArgs = getPlopExecArgs(prefilled)

  print.newline()

  const child = fork(
    plopBin,
    [`--cwd=${plopConfigPath}`, `--dest=${cwd}`, ...execArgs],
    {
      cwd,
      env: {
        ...process.env,
        ...commandEnv,
      },
    }
  )

  // The actions "install npm" & "configure ts" both requires the answers
  // from plop - so plop.setActionType callback functions takes care of this
  // inside plopfile.js

  child.on('close', (code) => {
    if (code === 0) {
      printFinalNote()
    }
  })
}
