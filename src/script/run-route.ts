import { run as reactRun } from '../commands/react/run'
import { getRouteFromCommands } from '../utils/get-route-from-commands'
import { getShared } from '../utils/shared'
import { allowedRoutes } from './index'

export function runRoute() {
  const { liftoffEnv: _liftoffEnv, argv } = getShared('main')
  const liftoffEnv = _liftoffEnv as LiftoffEnv
  const route = getRouteFromCommands(argv._, allowedRoutes)

  switch (route) {
    case 'react':
      reactRun(liftoffEnv, argv)
      break
    case 'react-next-page':
      break
    case 'project-cli':
      break
    case 'project-react-component':
      break
    default:
      break
  }
}
