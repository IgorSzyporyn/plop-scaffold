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

export function run(liftoffEnv: LiftoffEnv) {
  const args = process.argv.slice(2)
  const argv = minimist(args)
  const { configPath = '', cwd } = liftoffEnv
  const distPath = path.join(__dirname, '../')
  const { username, useremail } = getGitInfo()

  setShared({
    argv,
    configPath,
    cwd,
    liftoffEnv,
    distPath,
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
