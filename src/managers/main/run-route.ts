import { CONFIG_FILE_NAME } from '../../constants'
import { getShared } from '../../utils/shared'
import { run as reactRun } from '../react/run'
import { allowedRoutes } from './index'
import { print } from '../../utils/print'
import chalk from 'chalk'

type Args = {
  [arg: string]: any
  '--'?: string[] | undefined
  _: string[]
}

export function runRoute() {
  const { argv } = getShared('main')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _, ...restArgs } = argv as Args
}

export function executeRoute(route: RouteTypes) {
  const { liftoffEnv: _liftoffEnv, argv } = getShared('main')
  const liftoffEnv = _liftoffEnv as LiftoffEnv

  switch (route) {
    case 'react':
      reactRun(liftoffEnv, argv)
      break
    case 'project-cli':
      break
    case 'project-react-component':
      break
    case 'react-next-page':
      break
    default:
      break
  }
}
