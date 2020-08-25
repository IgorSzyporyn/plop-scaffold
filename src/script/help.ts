import chalk from 'chalk'
import { print } from '../utils/print'
import { allowedCommands } from '.'
import { CONFIG_FILE_NAME } from '../constants'
import { getPckJson } from '../utils/get-pck-json'

export function helpMain() {
  const { name } = getPckJson()

  print.help({
    type: 'main',
    message: [
      'Quickly scaffold your way into productivity with one of the offered scaffold commands',
    ],
    commands: [
      {
        name: 'init',
        description: `Initialize a ${CONFIG_FILE_NAME} config file in your folder`,
      },
      {
        name: 'project-cli',
        description: 'Create a project folder for a client based application',
      },
      {
        name: 'project-react-component',
        description: 'Create a project folder for a React Component',
      },
      {
        name: 'react',
        description: 'Generate a React component',
      },
    ],
    args: [
      {
        name: '--help, -h',
        description: `Show the help for ${name} or for a command`,
        optionsName: 'command',
        options: allowedCommands,
      },
      {
        name: '--version, -v',
        description: 'Show the current version',
      },
    ],
  })

  print.newline()
}
