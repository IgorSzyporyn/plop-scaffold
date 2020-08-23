import { getPckJson } from '../utils/get-version'
import { print } from '../utils/print'

export function runVersion() {
  const { version } = getPckJson()
  print(version)
}
