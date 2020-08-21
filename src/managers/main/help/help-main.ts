import chalk from 'chalk'
import { print } from '../../../utils/print'

export function helpMain() {
  print(
    `${chalk.blue.bold('plop-scaffold')} ${chalk.white.bold('[--version] [--help]')}`
  )
  print(chalk.white.bold('              <command> [<args>]'))
  print.newline()
  print('List of commands')
  print.newline()
  print(
    `${chalk.green(
      '  init'
    )}                         Initialize a .plop-scaffold.json config file in your folder`
  )
  print(
    `${chalk.green(
      '  react'
    )}                        Start the react based scaffold generator for components/hooks`
  )
  print(
    `${chalk.green(
      '  project-cli'
    )}                  Create a scaffolded project folder for a client based application`
  )
  print(
    `${chalk.green(
      '  project-react-component'
    )}      Create a scaffolded project folder for a client based application`
  )
  print.newline()
  print(
    "'plop-scaffold --help <command>' lists available arguments for the command."
  )
  print.newline()
}
