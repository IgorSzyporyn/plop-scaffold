// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-reacts-with-plop-js-2da3b39914f3/
export default (plop) => {
  const { plopHelper, requireField } = require('../../utils/plop-helper')
  const { getScaffoldPath } = require('./utils/get-scaffold-path')
  const { getTestTemplateInfo } = require('./utils/get-test-template-info')
  const { getStorybookTemplateInfo } = require('./utils/get-storybook-template-info')
  const { getEnvConst } = require('../../utils/get-env-const')
  const baseDir = getEnvConst('baseDir')
  const componentDir = getEnvConst('componentDir')
  const containerDir = getEnvConst('containerDir')
  const pageDir = getEnvConst('pageDir')

  plopHelper(plop)

  plop.setGenerator('component', {
    description: 'Create a react component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: `Create in ${baseDir} /`,
        choices: [
          {
            name: componentDir,
            value: 'component',
          },
          {
            name: containerDir,
            value: 'container',
          },
          {
            name: pageDir,
            value: 'page',
          },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
        validate: requireField('name'),
      },
      {
        type: 'list',
        name: 'typescript',
        message: 'Typescript?',
        choices: [
          {
            name: 'Yes',
            value: 'yes',
          },
          {
            name: 'No',
            value: 'no',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'hooks',
        message: 'Hooks:',
        choices: [
          {
            name: 'useState',
            value: 'usestate',
          },
          {
            name: 'useEffect',
            value: 'useeffect',
          },
        ],
      },
      {
        type: 'list',
        name: 'cssinjs',
        message: 'CSS-in-JS?',
        choices: [
          {
            name: 'No',
            value: 'no',
          },
          {
            name: 'styled-components',
            value: 'styled-components',
          },
          {
            name: '@emotion/styled',
            value: '@emotion/styled',
          },
        ],
      },
      {
        type: 'list',
        name: 'examples',
        message: 'Example code & comments?',
        choices: [
          {
            name: 'No',
            value: 'no',
          },
          {
            name: 'Yes',
            value: 'yes',
          },
        ],
      },
      {
        type: 'list',
        name: 'test',
        message: 'Add a test file?',
        choices: [
          {
            name: 'No',
            value: 'no',
          },
          {
            name: 'Jest: @testing-library/react',
            value: '@testing-library/react',
          },
          {
            name: 'Jest: react-test-renderer',
            value: 'react-test-renderer',
          },
          {
            name: 'Jest: enzyme',
            value: 'enzyme',
          },
        ],
      },
      {
        type: 'list',
        name: 'storybook',
        message: 'Add a storybook file?',
        choices: [
          {
            name: 'No',
            value: 'no',
          },
          {
            name: 'Yes',
            value: 'yes',
          },
        ],
      },
    ],
    actions: ({ typescript: _typescript, test, type, storybook }) => {
      const scaffoldPath = getScaffoldPath(type)
      const typescript = _typescript === 'yes'
      const actions = []

      // Add the component template
      actions.push({
        type: 'add',
        path: `${scaffoldPath}/{{pascalCase name}}/{{pascalCase name}}.${
          typescript ? 'tsx' : 'jsx'
        }`,
        templateFile: `../../../dist/templates/react/component.${
          typescript ? 'tsx' : 'jsx'
        }.hbs`,
        skipIfExists: true,
      })

      // If storybook is set - then we add this template
      if (storybook === 'yes') {
        const { storybookTemplatePath } = getStorybookTemplateInfo()

        actions.push({
          type: 'add',
          data: { hasParentFolder: !!storybookTemplatePath },
          path: `${scaffoldPath}/{{pascalCase name}}/${storybookTemplatePath}/{{pascalCase name}}.stories.${
            typescript ? 'tsx' : 'jsx'
          }`,
          templateFile: `../../../dist/templates/react/storybook.${
            typescript ? 'tsx' : 'jsx'
          }.hbs`,
          skipIfExists: true,
        })
      }

      // If test is not "no" then we add a test template
      if (test !== 'no') {
        const { testTemplatePath, testTemplateName } = getTestTemplateInfo(test)

        actions.push({
          type: 'add',
          data: { hasParentFolder: !!testTemplatePath },
          path: `${scaffoldPath}/{{pascalCase name}}/${testTemplatePath}/{{pascalCase name}}.test.${
            typescript ? 'tsx' : 'jsx'
          }`,
          templateFile: `../../../dist/templates/react/test.${testTemplateName}.${
            typescript ? 'tsx' : 'jsx'
          }.hbs`,
          skipIfExists: true,
        })
      }

      return actions
    },
  })
}
