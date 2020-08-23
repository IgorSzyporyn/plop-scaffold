import { fork } from 'child_process'
import { checkForPrefilledValues } from '../../utils/check-for-prefilled-values'
import { getCommandEnv } from '../../utils/get-command-env'
import { getConfig } from '../../utils/get-config'
import { getPlopFilepath } from '../../utils/get-plop-filepath'
import { getPlopConfigPath } from '../../utils/get-plopconfig-path'
import { print } from '../../utils/print'
import { allowedArgs, defaultReactConfig, prefilledArgs } from './index'
import { getPlopExecArgs } from './utils/get-plop-exec-args'
import { getShared } from '../../utils/shared'

const command = 'react'

export function run() {
  const { argv, cwd } = getShared()

  print.title()
  print.subtitle('Create a React scaffold')

  const { config } = getConfig(command, defaultReactConfig, argv, allowedArgs)
  const plopBin = getPlopFilepath()
  const plopConfigPath = getPlopConfigPath(command)
  const commandEnv = getCommandEnv(config)
  const prefilled = checkForPrefilledValues(config, prefilledArgs)
  const execArgs = getPlopExecArgs(prefilled, prefilledArgs)

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

  child.on('disconnect', () => {
    print.newline()
  })
}
