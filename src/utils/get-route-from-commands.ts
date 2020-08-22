export function getRouteFromCommands(commands: string[], allowed: string[]) {
  let route = ''

  commands.some((command) => {
    const argIsAllowedRoute = allowed.indexOf(command) > -1

    if (argIsAllowedRoute) {
      route = command
    }

    return argIsAllowedRoute
  })

  return route
}
