import { print } from '../../utils/print'
import { getPckJson } from '../../utils/get-pck-json'
import { CONFIG_FILE_NAME } from '../../constants'

export function helpInit() {
  const { name } = getPckJson()

  print.help({
    name: 'init',
    type: 'command',
    message: [
      `Attempt to create a ${CONFIG_FILE_NAME} in your folder`,
      '',
      `You can also add your configuration to your package.json file under the key "${name}"`,
    ],
  })
}
