import { getConfigFileExists } from '../../utils/get-config-file-exists'
import { print } from '../../utils/print'
import { copyFileSync } from 'fs'
import { join as pathJoin } from 'path'
import { getShared } from '../../utils/shared'
import { CONFIG_FILE_NAME } from '../../constants'
import path from 'path'

export function runInit() {
  const { cwd, distPath } = getShared()
  const initFileExists = getConfigFileExists()

  print.header()

  if (initFileExists) {
    print.newline()
    print(`Folder already has a configuration file`, 'error')
    print.newline()
  } else {
    const source = path.join(
      distPath,
      'templates/commands/init/templates/',
      CONFIG_FILE_NAME
    )
    const destination = pathJoin(cwd, CONFIG_FILE_NAME)

    let didCopyFile = false

    try {
      copyFileSync(source, destination)
      didCopyFile = true
    } catch (e) {}

    if (didCopyFile) {
      print.newline()
      print.success(`Succesfully copied ${CONFIG_FILE_NAME} to your folder`)
      print.newline()
    } else {
      print.newline()
      print.failure(
        `Something went wrong copying ${CONFIG_FILE_NAME} to your folder`
      )
      print.newline()
    }
  }
}
