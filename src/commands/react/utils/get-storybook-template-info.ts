import { PROJECT_ID } from '../../../constants'

export function getStorybookTemplateInfo() {
  const env = process.env[`${PROJECT_ID}-storybookDir`]
  let storybookTemplatePath = ''

  if (env !== undefined && env !== 'NULL') {
    storybookTemplatePath = env
  }

  return { storybookTemplatePath }
}
