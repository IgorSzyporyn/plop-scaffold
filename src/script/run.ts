import minimist from 'minimist'
import path from 'path'
import { runInit } from '../commands/init/run'
import { argsHasCommand } from '../utils/args-has-command'
import { setShared } from '../utils/shared'
import { allowedRoutes } from './index'
import { runHelp } from './run-help'
import { runRoute } from './run-route'
import { runVersion } from './run-version'

export function run(env: LiftoffEnv) {
  const args = process.argv.slice(2)
  const argv = minimist(args)
  const { configPath = '', cwd } = env

  setShared({
    argv: argv,
    configPath,
    cwd,
    liftoffEnv: env,
    running: true,
    distPath: path.join(__dirname, '../'),
  })

  const hasInit = argv._.indexOf('init') > -1
  const hasRoute = argsHasCommand(argv._, allowedRoutes)

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
