import minimist from 'minimist'
import path from 'path'
import { runInit } from '../commands/init/run'
import { getCommandFromArgv } from '../utils/get-command-from-argv'
import { getGitInfo } from '../utils/get-git-info'
import { setShared } from '../utils/shared'
import { allowedCommands } from './index'
import { runCommand } from './run-command'
import { runHelp } from './run-help'
import { runVersion } from './run-version'

export function run(env: LiftoffEnv) {
  const args = process.argv.slice(2)
  const argv = minimist(args)
  const { configPath = '', cwd } = env
  const { username, useremail } = getGitInfo()

  setShared({
    argv: argv,
    configPath,
    cwd,
    liftoffEnv: env,
    running: true,
    distPath: path.join(__dirname, '../'),
    username,
    useremail,
  })

  const hasInitCommand = argv._.indexOf('init') > -1
  const command = getCommandFromArgv(argv, allowedCommands)

  if (hasInitCommand) {
    runInit()
  } else if (argv.version || argv.v) {
    runVersion()
  } else if (argv.help || argv.h || !command) {
    runHelp()
  } else if (command) {
    runCommand(command)
  }
}
