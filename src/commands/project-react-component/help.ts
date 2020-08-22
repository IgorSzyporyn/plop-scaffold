import chalk from 'chalk'
import { print } from '../../utils/print'

export function helpProjectReactComponent() {
  print(
    `${chalk.yellow('plop-scaffold')} ${chalk.blueBright(
      'project-react-component'
    )} [<args>]`
  )
  print.newline()
  print('Create a NPM release ready scaffold project for a React Component.')
  print.newline()
  print('List of arguments')
  print.newline()
  print(
    `${chalk.cyan(`  --name ${chalk.green('<string>')}`)}             ${chalk.white(
      'Name of the project (used for component name, package.json etc..)'
    )}`
  )

  print(
    `${chalk.cyan(`  --dir ${chalk.green('<string>')}`)}              ${chalk.white(
      'Name of the base directory for the project (will default to "name" value)'
    )}`
  )

  print(
    `${chalk.cyan(
      '  --typescript'
    )}                Will your project be typescript based?`
  )

  print(
    `${chalk.cyan(
      `  --support ${chalk.green('<string>')}`
    )}          Comma seperated string to specify which support packages should be added`
  )
  print(
    chalk.white(
      `                              "${chalk.green('storybook')}" | "${chalk.green(
        'jest'
      )}"`
    )
  )
  print.newline()
}
