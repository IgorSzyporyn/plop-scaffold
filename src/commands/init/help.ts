import { print } from '../../utils/print'
import { getPckJson } from '../../utils/get-pck-json'
import { CONFIG_FILE_NAME } from '../../constants'

export function helpInit() {
  const { name } = getPckJson()

  print.newline()
  print(`Attempt to create a ${CONFIG_FILE_NAME} in your folder.`)
  print.newline()
  print(
    `You can also add your configuration to your package.json file under the key "${name}"`
  )
  print.newline()
}
