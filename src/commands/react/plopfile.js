// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-reacts-with-plop-js-2da3b39914f3/
export default (plop) => {
  const { plopHelper, requireField } = require('../../utils/plop-helper')
  const { getTemplatePath } = require('./utils/get-template-path')
  const { getTestTemplateInfo } = require('./utils/get-test-template-info')
  const { getStorybookTemplateInfo } = require('./utils/get-storybook-template-info')

  function getInquirer(generator) {
    const inquirer = {
      description: 'Create a component in "components"',
      prompts: [
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
      actions: ({ typescript: _typescript, test, storybook }) => {
        const templatePath = getTemplatePath(generator)
        const actions = []
        const typescript = _typescript === 'yes'

        // Add the component template
        actions.push({
          type: 'add',
          path: `${templatePath}/{{pascalCase name}}/{{pascalCase name}}.${
            typescript ? 'tsx' : 'jsx'
          }`,
          templateFile: `../../../dist/templates/commands/react/templates/component/component.${
            typescript ? 'tsx' : 'jsx'
          }.hbs`,
          skipIfExists: true,
        })

        // If storybook is set - then we add this template
        if (storybook === 'yes') {
          const { storybookTemplatePath } = getStorybookTemplateInfo()

          actions.push({
            type: 'add',
            path: `${templatePath}/{{pascalCase name}}/${storybookTemplatePath}/{{pascalCase name}}.stories.${
              typescript ? 'tsx' : 'jsx'
            }`,
            templateFile: `../../../dist/templates/commands/react/templates/component/storybook.${
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
            path: `${templatePath}/{{pascalCase name}}/${testTemplatePath}/{{pascalCase name}}.test.${
              typescript ? 'tsx' : 'jsx'
            }`,
            templateFile: `../../../dist/templates/commands/react/templates/component/test.${testTemplateName}.${
              typescript ? 'tsx' : 'jsx'
            }.hbs`,
            skipIfExists: true,
          })
        }

        return actions
      },
    }

    return inquirer
  }

  plopHelper(plop)

  plop.setGenerator('component', {
    ...getInquirer('component'),
    description: 'Create a component in "components"',
  })

  plop.setGenerator('page', {
    ...getInquirer('page'),
    description: 'Create a component in "pages"',
  })

  plop.setGenerator('container', {
    ...getInquirer('container'),
    description: 'Create a component in "containers"',
  })

  plop.setGenerator('hook', {
    ...getInquirer('hook'),
    description: 'Create a hook in "hooks"',
  })
}
