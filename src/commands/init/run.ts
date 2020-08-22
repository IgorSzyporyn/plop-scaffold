import { getConfigFileExists } from '../../utils/get-config-file-exists'
import { print } from '../../utils/print'
import { copyFileSync } from 'fs'
import { join as pathJoin } from 'path'
import { getShared } from '../../utils/shared'
import { IS_DEV, CONFIG_FILE_NAME } from '../../constants'

export function runInit() {
  const { cwd } = getShared('main')
  const initFileExists = getConfigFileExists('main')

  print.header()

  if (initFileExists) {
    print.newline()
    print(`Folder already has a configuration file`, 'error')
    print.newline()
  } else {
    const _source = IS_DEV
      ? `src/script/templates/${CONFIG_FILE_NAME}`
      : `node_modules/plop-scaffold/src/script/templates/${CONFIG_FILE_NAME}`

    const source = pathJoin(cwd, _source)
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
