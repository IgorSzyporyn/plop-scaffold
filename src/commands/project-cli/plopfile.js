// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-reacts-with-plop-js-2da3b39914f3/
export default (plop) => {
  const { plopHelper, requireField } = require('../../utils/plop-helper')
  const { getEnvConst } = require('../../utils/get-env-const')
  const { print } = require('../../utils/print')

  const username = getEnvConst('gituser')
  const useremail = getEnvConst('gitemail')

  plopHelper(plop)

  plop.setActionType('Install NPM Dependencies', function (answers) {
    const path = require('path')
    const { getEnv } = require('../../utils/get-env')
    const { closeSync, openSync } = require('fs')
    const {
      installDependencies,
      installDevDependencies,
    } = require('./utils/install-npm-dependencies')

    const { name } = answers
    const { cwd } = getEnv()
    const workingDir = path.join(cwd, name)

    process.chdir(workingDir)

    const pckJsonLock = path.join(workingDir, 'package-lock.json')
    closeSync(openSync(pckJsonLock, 'w'))

    print(' All files created successfully')
    print.newline()

    print.info('Installing NPM dependencies....')
    installDevDependencies(answers)
    installDependencies(answers)

    print.newline()
  })

  plop.setActionType('No git setup', function () {
    print(' NPM dependencies successfully installed')

    print.newline()
  })

  plop.setActionType('Setup git', function (answers) {
    print(' NPM dependencies successfully installed')

    const git = answers.git === 'yes'

    if (git) {
      const path = require('path')
      const { getEnv } = require('../../utils/get-env')
      const { setupGit } = require('./utils/setup-git')

      print.newline()
      print.info('Configuring git....')

      const { name } = answers
      const { cwd } = getEnv()
      const workingDir = path.join(cwd, name)

      process.chdir(workingDir)

      setupGit(answers)

      print.newline()
    }
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
      {
        type: 'list',
        name: 'git',
        message: 'Initialize git',
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
        name: 'gitproxy',
        message: 'Git proxy',
        when: ({ git }) => git === 'yes',
        choices: [
          {
            name: 'SSH',
            value: 'ssh',
          },
          {
            name: 'HTTPS',
            value: 'https',
          },
        ],
      },
    ],
    actions: (answers) => {
      const {
        typescript: _typescript,
        liftoff: _liftoff,
        commands: _commands,
        commitlint: _commitlint,
        init: _init,
        git: _git,
      } = answers

      print('Answers collected succesfully')
      print.newline()
      print.info('Creating project file structure')
      print.newline()

      const cwd = getEnvConst('cwd')

      const typescript = _typescript === 'yes' ? true : false
      const liftoff = _liftoff === 'yes' ? true : false
      const commands = _commands === 'yes' ? true : false
      const commitlint = _commitlint === 'yes' ? true : false
      const init = _init === 'yes' ? true : false
      const git = _git === 'yes' ? true : false
      const ext = typescript ? 'ts' : 'js'
      const actions = []

      // Copy in .vscode config
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/.vscode/settings.json`,
        templateFile: `../../../dist/templates/project-cli/.vscode/settings.json.hbs`,
        skipIfExists: true,
      })

      // Copy in the package.json file
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/package.json`,
        templateFile: `../../../dist/templates/project-cli/package.json.hbs`,
        skipIfExists: true,
      })

      // Copy in project level tsconfig.json
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/tsconfig.json`,
        templateFile: `../../../dist/templates/project-cli/tsconfig.json.hbs`,
        skipIfExists: true,
      })

      // Copy in source level tsconfig.json
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/tsconfig.json`,
        templateFile: `../../../dist/templates/project-cli/src/tsconfig.json.hbs`,
        skipIfExists: true,
      })

      // Copy in .gitignore if git is chosen
      if (git) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/.gitignore`,
          templateFile: `../../../dist/templates/project-cli/.gitignore.hbs`,
          skipIfExists: true,
        })
      }

      // Copy in eslint files
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/.eslintignore`,
        templateFile: `../../../dist/templates/project-cli/.eslintignore.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/.eslintrc`,
        templateFile: `../../../dist/templates/project-cli/.eslintrc.hbs`,
        skipIfExists: true,
      })

      // Copy in prettier files
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/.prettierignore`,
        templateFile: `../../../dist/templates/project-cli/.prettierignore.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/.prettierrc`,
        templateFile: `../../../dist/templates/project-cli/.prettierrc.hbs`,
        skipIfExists: true,
      })

      // Copy in commitlint config file
      if (commitlint) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/.commitlintrc.json`,
          templateFile: `../../../dist/templates/project-cli/.commitlintrc.json.hbs`,
          skipIfExists: true,
        })
      }

      // Copy in markdown files
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/README.md`,
        templateFile: `../../../dist/templates/project-cli/README.md.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/CHANGELOG.md`,
        templateFile: `../../../dist/templates/project-cli/CHANGELOG.md.hbs`,
        skipIfExists: true,
      })

      // Copy in bin file
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/bin/main.${ext}`,
        templateFile: `../../../dist/templates/project-cli/bin/main.ts.hbs`,
        skipIfExists: true,
      })

      // Copy in script folder files
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/script/index.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/index.${ext}.hbs`,
        skipIfExists: true,
      })

      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/script/help.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/help.ts.hbs`,
        skipIfExists: true,
      })

      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/script/run.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/run.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/script/run-version.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/run-version.ts.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/script/run-help.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/script/run-help.${ext}.hbs`,
        skipIfExists: true,
      })

      if (commands || liftoff) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/script/run-command.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/script/run-command.${ext}.hbs`,
          skipIfExists: true,
        })
      }

      if (!liftoff && !commands) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/script/run-execute.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/script/run-execute.ts.hbs`,
          skipIfExists: true,
        })
      }

      // Copy init command folder files if init is set
      if (init || liftoff) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/commands/init/run.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/commands/init/run.ts.hbs`,
          skipIfExists: true,
        })
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/commands/init/help.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/commands/init/help.ts.hbs`,
          skipIfExists: true,
        })
      }

      if (liftoff) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/commands/init/templates/.{{kebabCase name}}.json`,
          templateFile: `../../../dist/templates/project-cli/src/commands/init/templates/.config-file.json.hbs`,
          skipIfExists: true,
        })
      }

      // Copy utils folder files
      if (liftoff || commands) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/utils/get-command-from-argv.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/utils/get-command-from-argv.${ext}.hbs`,
          skipIfExists: true,
        })
      }
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/utils/get-pck-json.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/get-pck-json.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/utils/shared.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/shared.${ext}.hbs`,
        skipIfExists: true,
      })
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/utils/print.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/utils/print.${ext}.hbs`,
        skipIfExists: true,
      })

      if (liftoff) {
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/utils/get-config-file.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/utils/get-config-file.${ext}.hbs`,
          skipIfExists: true,
        })
        actions.push({
          type: 'add',
          path: `${cwd}/{{kebabCase name}}/src/utils/get-config-file-exists.${ext}`,
          templateFile: `../../../dist/templates/project-cli/src/utils/get-config-file-exists.ts.hbs`,
          skipIfExists: true,
        })
      }

      // Copy typings folder files
      if (typescript) {
        if (liftoff) {
          actions.push({
            type: 'add',
            path: `${cwd}/{{kebabCase name}}/src/typings/liftoff-env.d.ts`,
            templateFile: `../../../dist/templates/project-cli/src/typings/liftoff-env.d.ts.hbs`,
            skipIfExists: true,
          })
        }

        if (commands || liftoff) {
          actions.push({
            type: 'add',
            path: `${cwd}/{{kebabCase name}}/src/typings/command.d.ts`,
            templateFile: `../../../dist/templates/project-cli/src/typings/command.d.ts.hbs`,
            skipIfExists: true,
          })
        }
      }

      // Copy constants file
      actions.push({
        type: 'add',
        path: `${cwd}/{{kebabCase name}}/src/constants.${ext}`,
        templateFile: `../../../dist/templates/project-cli/src/constants.${ext}.hbs`,
        skipIfExists: true,
      })

      actions.push({ type: 'Install NPM Dependencies' })

      if (git) {
        actions.push({ type: 'Setup git' })
      } else {
        actions.push({ type: 'No git setup' })
      }

      return actions
    },
  })
}
