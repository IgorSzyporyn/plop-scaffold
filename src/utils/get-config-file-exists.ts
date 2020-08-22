import path from 'path'
import { existsSync } from 'fs'
import { getShared } from './shared'
import { CONFIG_FILE_NAME } from '../constants'

export function getConfigFileExists() {
  const { cwd } = getShared()
  const filepath = path.join(cwd, CONFIG_FILE_NAME)
  let exists = false

  try {
    exists = existsSync(filepath)
  } catch (e) {}

  return exists
}
