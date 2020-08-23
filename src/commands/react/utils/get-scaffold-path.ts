import { getEnvConst } from '../../../utils/get-env-const'

export function getScaffoldPath(type: string) {
  const baseDir = getEnvConst('baseDir') || 'src'
  const componentDir = getEnvConst('componentDir') || 'components'
  const containerDir = getEnvConst('containerDir') || 'containers'
  const pageDir = getEnvConst('baseDir') || 'pages'

  let scaffoldDir = ''

  switch (type) {
    case 'component':
      scaffoldDir = componentDir
      break
    case 'container':
      scaffoldDir = containerDir
      break
    case 'page':
      scaffoldDir = pageDir
      break
    default:
      break
  }

  return `${baseDir}/${scaffoldDir}`
}
