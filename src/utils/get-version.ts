export function getPckJson() {
  const pckJson = require('../../package.json')

  return pckJson as Record<string, any>
}
