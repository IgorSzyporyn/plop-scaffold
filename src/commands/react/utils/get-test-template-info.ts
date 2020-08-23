import { PROJECT_ID } from '../../../constants'

export function getTestTemplateInfo(type: string) {
  let testTemplateName = ''
  let testTemplatePath = ''

  const testDir = process.env[`${PROJECT_ID}-testDir`]

  if (testDir !== undefined && testDir !== 'NULL') {
    testTemplatePath = testDir
  }

  switch (type) {
    case '@testing-library/react':
      testTemplateName = 'testing-library-react'
      break
    case 'react-test-renderer':
      testTemplateName = 'react-test-renderer'
      break
    case 'enzyme':
      testTemplateName = 'enzyme'
      break
    default:
      break
  }

  return { testTemplateName, testTemplatePath }
}
