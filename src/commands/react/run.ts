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

export function run() {
  const { argv, cwd } = getShared()

  print.header()
  print.subtitle('Create a React scaffold')

  const { config } = getConfig('react', defaultReactConfig, argv, allowedArgs)
  const plop = getPlopFilepath()
  const plopConfigPath = getPlopConfigPath('react')
  const commandEnv = getCommandEnv(config)
  const prefilled = checkForPrefilledValues(config, prefilledArgs)
  const execArgs = getPlopExecArgs(prefilled, prefilledArgs)

  print.newline()

  const child = fork(
    plop,
    [
      `--cwd=${plopConfigPath}`,
      `--dest=${prefilled.baseDir || config.baseDir || 'src'}`,
      ...execArgs,
    ],
    {
      silent: true,
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
