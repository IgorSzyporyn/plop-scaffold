import { fork } from 'child_process'
import minimist from 'minimist'
import { checkForPrefilledValues } from '../../utils/check-for-prefilled-values'
import { getConfig } from '../../utils/get-config'
import { print } from '../../utils/print'
import { setShared } from '../../utils/shared'
import { getPlopExecArgs } from './get-plop-exec-args'
import { allowedArgs, defaultRCConfig, prefilledArgs } from './index'
import { getPlopFilepath } from '../../utils/get-plop-filepath'
import { getPlopConfigPath } from '../../utils/get-plopconfig-path'

export function run(env: LiftoffEnv) {
  const args = process.argv.slice(2)
  const argv = minimist(args)
  const { configPath = '', cwd } = env

  setShared('reactComponent', { cwd, configPath })

  print.header()
  print.subtitle('React')

  const { config } = getConfig('reactComponent', defaultRCConfig, argv, allowedArgs)
  const prefilled = checkForPrefilledValues(config, prefilledArgs)
  const plop = getPlopFilepath('reactComponent')
  const plopConfigPath = getPlopConfigPath('reactComponent')
  const execArgs = getPlopExecArgs(prefilled, prefilledArgs)

  print.newline()

  const child = fork(
    plop,
    [`--cwd=${plopConfigPath}`, `--dest=${config.rootDir}`, ...execArgs],
    {
      silent: false,
      cwd,
    }
  )

  child.on('disconnect', () => {
    print.newline()
  })
}
