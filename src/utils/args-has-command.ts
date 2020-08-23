export function argsHasCommand(args: string[], allowed: string[]) {
  let hasRoute = false

  args.some((arg) => {
    const argIsAllowedRoute = allowed.indexOf(arg) > -1

    if (argIsAllowedRoute) {
      hasRoute = true
    }

    return argIsAllowedRoute
  })

  return hasRoute
}
