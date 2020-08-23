import { run as reactRun } from '../commands/react/run'
import { run as projectCliRun } from '../commands/project-cli/run'
import { getRouteFromCommands } from '../utils/get-route-from-commands'
import { getShared } from '../utils/shared'
import { allowedRoutes } from './index'

export function runRoute() {
  const { argv } = getShared()
  const route = getRouteFromCommands(argv._, allowedRoutes)

  switch (route) {
    case 'react':
      reactRun()
      break
    case 'react-next-page':
      break
    case 'project-cli':
      projectCliRun()
      break
    case 'project-react-component':
      break
    default:
      break
  }
}
