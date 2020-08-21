import { getShared } from '../../utils/shared'
import { helpMain } from './help/help-main'
import { helpReact } from './help/help-react'

export function runHelp() {
  const { argv } = getShared('main')
  const key = argv.help ? 'help' : 'h'
  const type: true | RouteTypes = argv[key]

  switch (type) {
    case 'react':
      helpReact()
      break

    case true:
    default:
      helpMain()
      break
  }
}
