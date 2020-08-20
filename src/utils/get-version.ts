export function getVersion() {
  const { version } = require('../../package.json')

  return version as string
}
