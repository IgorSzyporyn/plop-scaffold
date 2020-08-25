import chalk from 'chalk'
import { print } from '../../utils/print'

export function helpReactNextPage() {
  print.title(`react-next-page ${chalk.white('[<args>]')}`)
  print.newline()
  print('Create an empty Node Cli based project ready for NPM release.')
  print.newline()
  print('List of arguments')
  print.newline()
  print(
    `${chalk.green('  --name <string>')}             ${chalk.white(
      'Name of the project (used for package.json etc..)'
    )}`
  )

  print(
    `${chalk.green('  --dir <string>')}              ${chalk.white(
      'Name of the base directory for the project (will default to "name")'
    )}`
  )

  print(
    `${chalk.green(
      '  --typescript'
    )}                Will your project be typescript based?`
  )

  print.newline()
}
