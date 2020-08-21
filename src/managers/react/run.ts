import { fork } from 'child_process'
import minimist from 'minimist'
import { IS_DEV } from '../../constants'
import { checkForPrefilledValues } from '../../utils/check-for-prefilled-values'
import { getConfig } from '../../utils/get-config'
import { getPlopFilepath } from '../../utils/get-plop-filepath'
import { getPlopConfigPath } from '../../utils/get-plopconfig-path'
import { print } from '../../utils/print'
import { getShared, setShared } from '../../utils/shared'
import { getPlopExecArgs } from './get-plop-exec-args'
import { allowedArgs, defaultRCConfig, prefilledArgs } from './index'

export function run(liftoffEnv: LiftoffEnv, argv: minimist.ParsedArgs) {
  const { configPath = '', cwd } = liftoffEnv

  const { running: isSubroute } = getShared('main')

  setShared('react', { cwd, configPath, running: true })

  if (!isSubroute) {
    print.header()
  }

  print.subtitle('React')

  const { config } = getConfig('react', defaultRCConfig, argv, allowedArgs)
  const prefilled = checkForPrefilledValues(config, prefilledArgs)
  const plop = getPlopFilepath('react')
  const plopConfigPath = getPlopConfigPath('react')
  const execArgs = getPlopExecArgs(prefilled, prefilledArgs)

  print.newline()

  const child = fork(
    plop,
    [`--cwd=${plopConfigPath}`, `--dest=${config.rootDir}`, ...execArgs],
    { silent: !IS_DEV, cwd }
  )

  child.on('disconnect', () => {
    print.newline()
  })
}
