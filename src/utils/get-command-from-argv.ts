import minimist from 'minimist'

export function getCommandFromArgv({ _ }: minimist.ParsedArgs, allowed: string[]) {
  let command = ''

  _.some((argvCommand) => {
    const argIsAllowedRoute = allowed.indexOf(argvCommand) > -1

    if (argIsAllowedRoute) {
      command = argvCommand
    }

    return argIsAllowedRoute
  })

  return command as Command
}
