import { PROJECT_ID } from '../../../constants'

export function getTemplatePath(type: string) {
  const env = process.env
  let templateDir = ''

  const baseDir = env[`${PROJECT_ID}-baseDir`]
    ? env[`${PROJECT_ID}-baseDir`] !== 'NULL'
      ? env[`${PROJECT_ID}-baseDir`]
      : 'src'
    : 'src'

  const componentDir = env[`${PROJECT_ID}-componentDir`]
    ? env[`${PROJECT_ID}-componentDir`] !== 'NULL'
      ? env[`${PROJECT_ID}-componentDir`]
      : 'components'
    : 'components'

  const containerDir = env[`${PROJECT_ID}-containerDir`]
    ? env[`${PROJECT_ID}-containerDir`] !== 'NULL'
      ? env[`${PROJECT_ID}-containerDir`]
      : 'containers'
    : 'containers'

  const pageDir = env[`${PROJECT_ID}-pageDir`]
    ? env[`${PROJECT_ID}-pageDir`] !== 'NULL'
      ? env[`${PROJECT_ID}-pageDir`]
      : 'pages'
    : 'pages'

  const hookDir = env[`${PROJECT_ID}-hookDir`]
    ? env[`${PROJECT_ID}-hookDir`] !== 'NULL'
      ? env[`${PROJECT_ID}-hookDir`]
      : 'hooks'
    : 'hooks'

  switch (type) {
    case 'component':
      templateDir = componentDir as string
      break
    case 'container':
      templateDir = containerDir as string
      break
    case 'page':
      templateDir = pageDir as string
      break
    case 'hook':
      templateDir = hookDir as string
      break
    default:
      break
  }

  return `${baseDir}/${templateDir}`
}
