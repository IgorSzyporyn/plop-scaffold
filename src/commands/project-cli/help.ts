import chalk from 'chalk'
import { print } from '../../utils/print'

export function helpProjectCli() {
  print(
    `${chalk.yellow('plop-scaffold')} ${chalk.blueBright(
      'project-cli'
    )} ${chalk.white('[<args>]')}`
  )
  print.newline()
  print('Create an empty Node Cli based project ready for NPM release.')
  print.newline()
  print('List of arguments')
  print.newline()
  print(
    `${chalk.cyan(`  --name ${chalk.green('<string>')}`)}             ${chalk.white(
      `Name of the project (used for package.json etc..)`
    )}`
  )

  print(
    `${chalk.cyan(`  --dir ${chalk.green('<string>')}`)}              ${chalk.white(
      `Name of the base directory for the project (will default to "name")`
    )}`
  )

  print(
    `${chalk.cyan(
      '  --typescript'
    )}                Will your project be typescript based?`
  )

  print.newline()
}
