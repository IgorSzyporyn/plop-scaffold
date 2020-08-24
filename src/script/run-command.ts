import { run as projectCliRun } from '../commands/project-cli/run'
import { run as reactRun } from '../commands/react/run'

export function runCommand(command: CommandTypes) {
  switch (command) {
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
