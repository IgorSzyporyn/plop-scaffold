import { fork } from 'child_process'
import { checkForPrefilledValues } from '../../utils/check-for-prefilled-values'
import { getCommandEnv } from '../../utils/get-command-env'
import { getConfig } from '../../utils/get-config'
import { getPlopFilepath } from '../../utils/get-plop-filepath'
import { getPlopConfigPath } from '../../utils/get-plopconfig-path'
import { print } from '../../utils/print'
import { getShared } from '../../utils/shared'
import { allowedArgs, defaultProjectCliConfig, prefilledArgs } from './index'
import { getPlopExecArgs } from './utils/get-plop-exec-args'

const command = 'project-cli'

export const run = async () => {
  const { argv } = getShared()

  print.subtitle('Create a nodejs client project')

  const { config } = getConfig(command, defaultProjectCliConfig, argv, allowedArgs)
  const plopBin = getPlopFilepath()
  const plopConfigPath = getPlopConfigPath(command)
  const commandEnv = getCommandEnv(config)
  const prefilled = checkForPrefilledValues(config, prefilledArgs)
  const execArgs = getPlopExecArgs(prefilled)

  print.newline()

  const child = fork(plopBin, [`--cwd=${plopConfigPath}`, ...execArgs], {
    env: {
      ...process.env,
      ...commandEnv,
    },
  })

  child.on('disconnect', () => {
    print.newline()
  })
}
