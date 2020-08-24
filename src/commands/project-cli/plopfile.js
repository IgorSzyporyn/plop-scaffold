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
        name: 'liftoff',
        message: `Use Liftoff as launcher?`,
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
        name: 'commands',
        message: `Commands?`,
        when: ({ liftoff }) => liftoff === 'no',
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
        name: 'init',
        message: `Init Command?`,
        when: ({ commands }) => commands === 'yes',
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
        message: 'Author Git Username',
        default: username,
        validate: requireField('author'),
      },
      {
        type: 'input',
        name: 'authoremail',
        message: 'Author Email',
        default: useremail,
      },
    ],
    actions: ({
      typescript: _typescript,
      liftoff: _liftoff,
      commands: _commands,
      init: _init,
    }) => {
      const cwd = getEnvConst('cwd')

      const typescript = _typescript === 'yes' ? true : false
      const liftoff = _liftoff === 'yes' ? true : false
      const commands = _commands === 'yes' ? true : false
      const init = _init === 'yes' ? true : false
      const ext = typescript ? 'ts' : 'js'
      const actions = []

      // Copy in the package.json file
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/package.json`,
        templateFile: `../../../dist/templates/project-cli/package.json.hbs`,
        skipIfExists: true,
      })

      // Copy in eslint files
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/.eslintignore`,
        templateFile: `../../../dist/templates/project-cli/.eslintignore.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/.eslintrc`,
        templateFile: `../../../dist/templates/project-cli/.eslintrc.hbs`,
        skipIfExists: true,
      })

      // Copy in prettier files
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/.prettierignore`,
        templateFile: `../../../dist/templates/project-cli/.prettierignore.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/.prettierrc`,
        templateFile: `../../../dist/templates/project-cli/.prettierrc.hbs`,
        skipIfExists: true,
      })

      // Copy in markdown files
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/README.md`,
        templateFile: `../../../dist/templates/project-cli/README.md.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/CHANGELOG.md`,
        templateFile: `../../../dist/templates/project-cli/CHANGELOG.md.hbs`,
        skipIfExists: true,
      })

      // Copy in bin file
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/bin/main.${ext}`,
        templateFile: `../../../dist/templates/project-cli/bin/main.ts.hbs`,
        skipIfExists: true,
      })

      // Copy in script folder files
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/script/index.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/index.${ext}.hbs`,
        skipIfExists: true,
      })

      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/script/help.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/help.ts.hbs`,
        skipIfExists: true,
      })

      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/script/run.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/run.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/script/run-version.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/run-version.ts.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/script/run-help.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/run-help.${ext}.hbs`,
        skipIfExists: true,
      })

      if (commands) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/script/run-command.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/script/run-command.${ext}.hbs`,
          skipIfExists: true,
        })
      }

      if (!liftoff && !commands) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/script/run-execute.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/script/run-execute.ts.hbs`,
          skipIfExists: true,
        })
      }

      // Copy init command folder files if init is set
      if (init) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/commands/init/run.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/commands/init/run.ts.hbs`,
          skipIfExists: true,
        })
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/commands/init/help.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/commands/init/help.ts.hbs`,
          skipIfExists: true,
        })
      }

      if (liftoff) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/commands/init/templates/.{{lowerCase name}}.json`,
          templateFile: `../../../dist/templates/project-cli/src/commands/init/templates/.config-file.json.hbs`,
          skipIfExists: true,
        })
      }

      // Copy utils folder files
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/utils/get-command-from-argv.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/get-command-from-argv.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/utils/get-pck-json.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/get-pck-json.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/utils/shared.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/shared.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/utils/print.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/print.${ext}.hbs`,
        skipIfExists: true,
      })

      if (liftoff) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/utils/get-config-file.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/utils/get-config-file.ts.hbs`,
          skipIfExists: true,
        })
        actions.push({
          type: 'add',
          path: `${cwd}/{{lowerCase name}}/src/utils/get-config-file-exists.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/utils/get-config-file-exists.ts.hbs`,
          skipIfExists: true,
        })
      }

      // Copy typings folder files
      if (typescript) {
        if (liftoff) {
          actions.push({
            type: 'add',
            path: `${cwd}/{{lowerCase name}}/src/typings/liftoff-env.d.ts`,
            templateFile: `../../../dist/templates/project-cli/src/typings/liftoff-env.d.ts.hbs`,
            skipIfExists: true,
          })
        }

        if (commands) {
          actions.push({
            type: 'add',
            path: `${cwd}/{{lowerCase name}}/src/typings/command.d.ts`,
            templateFile: `../../../dist/templates/project-cli/src/typings/command.d.ts.hbs`,
            skipIfExists: true,
          })
        }
      }

      // Copy constants file
      actions.push({
        type: 'add',
        path: `${cwd}/{{lowerCase name}}/src/constants.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/constants.${ext}.hbs`,
        skipIfExists: true,
      })

      actions.push({
        type: 'executeInstallation',
      })

      return actions
    },
  })
}
