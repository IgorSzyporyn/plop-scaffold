export function getTestTemplatePath(type: string) {
  let testTemplatePath = ''

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
