import chalk from 'chalk'
import { print } from '../../utils/print'

export function helpReact() {
  print(`${chalk.yellow('plop-scaffold')} ${chalk.blueBright('react')} [<args>]`)
  print.newline()
  print(
    'Creates a React component scaffold with optional typescript support, useState and/or useEffect,'
  )
  print(
    'optional css-in-js framework support from styled-components or emotion and the ability to add'
  )
  print('supportive files for storybook and/or jest')
  print.newline()
  print('List of arguments')
  print.newline()

  print(
    `${chalk.cyan(`  --type ${chalk.green('<option>')}`)}            ${chalk.white(
      'Choose the generator to start'
    )}`
  )
  print(
    chalk.white(
      `                             "${chalk.green('component')}" | "${chalk.green(
        'container'
      )}" | "${chalk.green('page')}" | "${chalk.green('hook')}"`
    )
  )

  print.newline()

  print(
    `${chalk.cyan(`  --baseDir ${chalk.green('<string>')}`)}         ${chalk.white(
      `Name of base folder for your scaffolds (defaults to "${chalk.green('src')}")`
    )}`
  )

  print(
    `${chalk.cyan(`  --componentDir ${chalk.green('<string>')}`)}    ${chalk.white(
      `Name of folder where components are placed (defaults to "${chalk.green(
        'components'
      )}")`
    )}`
  )

  print(
    `${chalk.cyan(`  --containerDir ${chalk.green('<string>')}`)}    ${chalk.white(
      `Name of folder where containers are placed (defaults to "${chalk.green(
        'containers'
      )}")`
    )}`
  )

  print(
    `${chalk.cyan(`  --pageDir ${chalk.green('<string>')}`)}         ${chalk.white(
      `Name of folder where pages are placed (defaults to "${chalk.green('pages')}")`
    )}`
  )

  print(
    `${chalk.cyan(`  --hookDir ${chalk.green('<string>')}`)}         ${chalk.white(
      `Name of folder where hooks are placed (defaults to "${chalk.green('hooks')}")`
    )}`
  )

  print.newline()

  print(
    `${chalk.cyan(
      `  --typescript ${chalk.green('<option>')}`
    )}               Implement typescript in your component`
  )
  print(
    chalk.white(
      `                     "${chalk.green('yes')}" | "${chalk.green('no')}"`
    )
  )

  print.newline()

  print(
    `${chalk.cyan(
      '  --useState'
    )}                 Add state managment hook to component`
  )

  print(
    `${chalk.cyan('  --useEffect')}                Add lifecycle hook to component`
  )

  print.newline()

  print(
    `${chalk.cyan(
      `  --cssInJs ${chalk.green('<option>')}`
    )}         Add a css-in-js framework for a styled component`
  )
  print(
    chalk.white(
      `                             "${chalk.green('no')}" | "${chalk.green(
        'styled-components'
      )}" | "${chalk.green('@emotion/styled')}"`
    )
  )
  print.newline()

  print(
    `${chalk.cyan(
      `  --withExamples ${chalk.green('<option>')}`
    )}         Add example code and comments`
  )
  print(
    chalk.white(
      `                     "${chalk.green('yes')}" | "${chalk.green('no')}"`
    )
  )

  print.newline()

  print(
    `${chalk.cyan('  --testing')} ${chalk.green(
      '<option>'
    )}         Add a test file for the component`
  )
  print(
    chalk.white(
      `                             "${chalk.green('no')}" | "${chalk.green(
        '@testing-library/react'
      )}" | "${chalk.green('react-test-renderer')}" | "${chalk.green('enzyme')}"`
    )
  )

  print.newline()

  print(
    `${chalk.cyan(
      '  --storybook'
    )}                Add a storybook file for the component`
  )
  print.newline()
}
