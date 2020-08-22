import { ProcessEnvOptions } from 'child_process'
import { PROJECT_ID } from '../../../constants'

export function getTestTemplatePath(env: ProcessEnvOptions['env'] = {}) {
  let testTemplatePath = ''

  const type = env[`${PROJECT_ID}-testing`]

  if (!type || type === 'NULL') {
    return testTemplatePath
  }

  switch (type) {
    case '@testing-library/react':
      testTemplatePath = 'testing-library-react'
      break
    case 'react-test-renderer':
      testTemplatePath = 'react-test-renderer'
      break
    case 'enzyme':
      testTemplatePath = 'enzyme'
      break
    default:
      break
  }

  return testTemplatePath
}
