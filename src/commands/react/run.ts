import minimist from 'minimist'
import { fork } from 'child_process'
import { checkForPrefilledValues } from '../../utils/check-for-prefilled-values'
import { getCommandEnv } from '../../utils/get-command-env'
import { getConfig } from '../../utils/get-config'
import { getPlopFilepath } from '../../utils/get-plop-filepath'
import { getPlopConfigPath } from '../../utils/get-plopconfig-path'
import { print } from '../../utils/print'
import { setShared } from '../../utils/shared'
import { allowedArgs, defaultReactConfig, prefilledArgs } from './index'
import { getPlopExecArgs } from './utils/get-plop-exec-args'

export function run(liftoffEnv: LiftoffEnv, argv: minimist.ParsedArgs) {
  const { configPath = '', cwd } = liftoffEnv

  setShared('react', { cwd, configPath, running: true })

  print.header()
  print.subtitle('Create React Component Scaffold')

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
