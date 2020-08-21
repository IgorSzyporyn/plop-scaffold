import minimist from 'minimist'
import { setShared } from '../../utils/shared'
import { runInit } from './run-init'
import { runRoute } from './run-route'
import { runVersion } from './run-version'
import { runHelp } from './run-help'
import { argsHasRoute } from '../../utils/args-has-route'
import { allowedRoutes } from '.'

export function run(env: LiftoffEnv) {
  const args = process.argv.slice(2)
  const argv = minimist(args)
  const { configPath = '', cwd } = env

  setShared('main', {
    cwd,
    configPath,
    running: true,
    argv: argv,
    liftoffEnv: env,
  })

  const hasInit = argv._.indexOf('init') > -1
  const hasRoute = argsHasRoute(argv._, allowedRoutes)

  if (hasInit) {
    runInit()
  } else if (argv.version || argv.v) {
    runVersion()
  } else if (argv.help || argv.h || !hasRoute) {
    runHelp()
  } else if (hasRoute) {
    runRoute()
  }
}
