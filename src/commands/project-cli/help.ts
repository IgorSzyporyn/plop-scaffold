import { print } from '../../utils/print'

export function helpProjectCli() {
  print.help({
    name: 'project-cli',
    type: 'command',
    message: ['Create an empty Node Cli based project ready for NPM release'],
    args: [
      {
        name: '--name',
        description: `Name of the project (used for package.json etc..)`,
        optionsName: 'string',
      },
      {
        name: '--description',
        description: 'Add a description to your project',
        optionsName: 'string',
      },
      {
        name: '--commands',
        description: 'Does your project include cli commands',
        optionsName: 'options',
        options: ['yes', 'no'],
      },
      {
        name: '--init',
        description: 'Does your project include an init command',
        optionsName: 'options',
        options: ['yes', 'no'],
      },
      {
        name: '--typescript',
        description: 'Does your project use typescript',
        optionsName: 'options',
        options: ['yes', 'no'],
      },
      {
        name: '--commitlint',
        description: 'Do you wish to include commitlint for your project',
        optionsName: 'options',
        options: ['yes', 'no'],
      },
      {
        name: '--liftoff',
        description: 'Do you wish to use liftoff as script launcher',
        optionsName: 'options',
        options: ['yes', 'no'],
      },
      {
        name: '--author',
        description: 'Your git name',
        optionsName: 'string',
      },
      {
        name: '--authoremail',
        description: 'Your email',
        optionsName: 'string',
      },
    ],
  })

  print.newline()
}
