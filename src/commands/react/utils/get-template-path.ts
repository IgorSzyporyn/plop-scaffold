import { PROJECT_ID } from '../../../constants'

export function getTemplatePath(type: string) {
  const env = process.env
  let templatePath = ''

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
      templatePath = componentDir as string
      break
    case 'container':
      templatePath = containerDir as string
      break
    case 'page':
      templatePath = pageDir as string
      break
    case 'hook':
      templatePath = hookDir as string
      break
    default:
      break
  }

  return templatePath
}
