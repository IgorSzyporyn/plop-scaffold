// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-reacts-with-plop-js-2da3b39914f3/
export default (plop) => {
  const { plopHelper, requireField } = require('../../utils/plop-helper')
  const { getEnvConst } = require('../../utils/get-env-const')

  const username = getEnvConst('gituser')
  const useremail = getEnvConst('gitemail')

  plopHelper(plop)

  plop.setActionType('executeInstallation', function (answers) {
    const { execute } = require('./execute')
    execute(answers)
    // if something went wrong
    throw 'error message'
    // otherwise
    return 'success status message'
  })

  plop.setGenerator('project-cli', {
    description: 'Create a react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        validate: requireField('name'),
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        validate: requireField('description'),
      },
      {
        type: 'list',
        name: 'typescript',
        message: `Typescript?`,
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
        type: 'list',
        name: 'commitlint',
        message: `Commitlint?`,
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
        type: 'input',
        name: 'author',
        message: 'Author',
        default: username,
        validate: requireField('author'),
      },
      {
        type: 'input',
        name: 'authoremail',
        message: 'Author email',
        default: useremail,
      },
    ],
    actions: () => {
      const cwd = getEnvConst('cwd')
      const actions = []

      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/package.json`,
        templateFile: `../../../dist/templates/commands/project-cli/templates/package.json.hbs`,
        skipIfExists: true,
      })

      actions.push({
        type: 'executeInstallation',
      })

      return actions
    },
  })
}
