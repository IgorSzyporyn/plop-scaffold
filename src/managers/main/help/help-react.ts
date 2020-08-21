import chalk from 'chalk'
import { print } from '../../../utils/print'

export function helpReact() {
  print(
    `${chalk.blue.bold('plop-scaffold')} ${chalk.yellow.bold(
      'react'
    )} ${chalk.white.bold('[<args>]')}`
  )
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
}
