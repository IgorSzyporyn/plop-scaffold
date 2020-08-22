import { getVersion } from '../utils/get-version'
import { print } from '../utils/print'

export function runVersion() {
  const version = getVersion()
  print(version, 'info')
}
