// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-reacts-with-plop-js-2da3b39914f3/
export default (plop) => {
  const { plopHelper, requireField } = require('../../utils/plop-helper')
  const { getTemplatePath } = require('./utils/get-template-path')
  const { getTestTemplatePath } = require('./utils/get-test-template-path')

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
          name: 'cssInJs',
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
          name: 'withExamples',
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
          name: 'testing',
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
      actions: ({ typescript: _typescript, testing, storybook }) => {
        const path = getTemplatePath(generator)
        const actions = []
        const typescript = _typescript === 'yes'

        // Add the component template
        actions.push({
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.${
            typescript ? 'tsx' : 'jsx'
          }`,
          templateFile: `../../../dist/templates/commands/react/templates/component/component.${
            typescript ? 'tsx' : 'jsx'
          }.hbs`,
          skipIfExists: true,
        })

        // If storybook is set - then we add this template
        if (storybook === 'yes') {
          actions.push({
            type: 'add',
            path: `${path}/{{pascalCase name}}/{{pascalCase name}}.stories.${
              typescript ? 'tsx' : 'jsx'
            }`,
            templateFile: `../../../dist/templates/commands/react/templates/component/storybook.${
              typescript ? 'tsx' : 'jsx'
            }.hbs`,
            skipIfExists: true,
          })
        }

        // If testing is not "no" then we add a testing template
        if (testing !== 'no') {
          const testTemplate = getTestTemplatePath(testing)

          actions.push({
            type: 'add',
            path: `${path}/{{pascalCase name}}/{{pascalCase name}}.test.${
              typescript ? 'ts' : 'js'
            }`,
            templateFile: `../../../dist/templates/commands/react/templates/component/test.${testTemplate}.${
              typescript ? 'ts' : 'js'
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
