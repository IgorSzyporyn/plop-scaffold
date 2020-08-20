// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-react-components-with-plop-js-2da3b39914f3/
export default (plop) => {
  const { plopHelper, requireField } = require('../../utils/plop-helper')

  plopHelper(plop)

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Use typescript?',
      },
      {
        type: 'checkbox',
        name: 'feature',
        message: 'Select react utilities',
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
        type: 'checkbox',
        name: 'cssinjs',
        message: 'Styled component?',
        choices: [
          {
            name: 'styled',
            value: 'styled',
          },
          {
            name: 'emotion',
            value: 'emotion',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'support',
        message: 'Add any support files?',
        choices: [
          {
            name: 'storybook',
            value: 'storybook',
          },
          {
            name: 'jest',
            value: 'jest',
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile:
          '../../../src/managers/react-component/templates/Component/Component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          '../../../src/managers/react-component/templates/Component/Component.test.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile:
          '../../../src/managers/react-component/templates/Component/Component.stories.tsx.hbs',
        skipIfExists: true,
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
      {
        type: 'checkbox',
        name: 'feature',
        message: 'Select extra features?',
        choices: [
          {
            name: 'typescript',
            value: 'typescript',
          },
          {
            name: 'useState',
            value: 'usestate',
          },
          {
            name: 'useEffect',
            value: 'useeffect',
          },
          {
            name: 'styled',
            value: 'styled',
            checked: true,
          },
          {
            name: 'emotion',
            value: 'emotion',
            checked: true,
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component/Component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: './templates/Component/Component.test.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/Component/Component.stories.tsx.hbs',
        skipIfExists: true,
      },
    ],
  })

  plop.setGenerator('container', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
      {
        type: 'checkbox',
        name: 'feature',
        message: 'Select extra features?',
        choices: [
          {
            name: 'typescript',
            value: 'typescript',
          },
          {
            name: 'useState',
            value: 'usestate',
          },
          {
            name: 'useEffect',
            value: 'useeffect',
          },
          {
            name: 'styled',
            value: 'styled',
            checked: true,
          },
          {
            name: 'emotion',
            value: 'emotion',
            checked: true,
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component/Component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: './templates/Component/Component.test.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/Component/Component.stories.tsx.hbs',
        skipIfExists: true,
      },
    ],
  })

  plop.setGenerator('hook', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
      {
        type: 'checkbox',
        name: 'feature',
        message: 'Select extra features?',
        choices: [
          {
            name: 'typescript',
            value: 'typescript',
          },
          {
            name: 'useState',
            value: 'usestate',
          },
          {
            name: 'useEffect',
            value: 'useeffect',
          },
          {
            name: 'styled',
            value: 'styled',
            checked: true,
          },
          {
            name: 'emotion',
            value: 'emotion',
            checked: true,
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component/Component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: './templates/Component/Component.test.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/Component/Component.stories.tsx.hbs',
        skipIfExists: true,
      },
    ],
  })
}
