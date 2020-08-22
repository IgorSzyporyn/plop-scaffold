import chalk from 'chalk'
import { print } from '../../utils/print'

export function helpInit() {
  print(`${chalk.yellow.bold('plop-scaffold')} ${chalk.blue.bold('init')}`)
  print.newline()
  print(
    'Attempt to create a config file with the default settings for you in the folder you are in.'
  )
  print.newline()
  print('Will refuse if a .plop-scaffold.json file is already present.')
  print.newline()
  print(
    'Remember you can also add your configuration to your package.json file if you should wish,'
  )
  print('under the key "plop-scaffold".')
  print.newline()
}
