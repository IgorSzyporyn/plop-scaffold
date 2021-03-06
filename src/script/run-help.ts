import { getShared } from '../utils/shared'
import { helpInit } from '../commands/init/help'
import { helpProjectCli } from '../commands/project-cli/help'
import { helpProjectReactComponent } from '../commands/project-react-component/help'
import { helpReactNextPage } from '../commands/react-next-page/help'
import { helpReact } from '../commands/react/help'
import { helpMain } from './help'

export function runHelp() {
  const { argv } = getShared()
  const key = argv.help ? 'help' : 'h'
  const type: true | Command = argv[key]

  switch (type) {
    case 'init':
      helpInit()
      break

    case 'react':
      helpReact()
      break

    case 'react-next-page':
      helpReactNextPage()
      break

    case 'project-cli':
      helpProjectCli()
      break

    case 'project-react-component':
      helpProjectReactComponent()
      break

    case true:
    default:
      helpMain()
      break
  }
}
