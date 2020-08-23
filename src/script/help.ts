import chalk from 'chalk'
import { print } from '../utils/print'

export function helpMain() {
  print.titleWithSuffix(`[--version] [--help]`)
  print(`              <command> [<args>]`)
  print.newline()
  print('List of commands')
  print.newline()
  print(
    `${chalk.blueBright(
      '  init'
    )}                        Initialize a .plop-scaffold.json config file in your folder`
  )
  print(
    `${chalk.blueBright(
      '  react'
    )}                       Start the react based scaffold generator for components/hooks`
  )
  print(
    `${chalk.blueBright(
      '  project-cli'
    )}                 Create a scaffolded project folder for a client based application`
  )
  print(
    `${chalk.blueBright(
      '  project-react-component'
    )}     Create a scaffolded project folder for a client based application`
  )
  print.newline()
  print(
    "'plop-scaffold --help <command>' lists available arguments for the command."
  )
  print.newline()
}
