import { execSync } from 'child_process'
import { ProjectCliConfig } from '../index'

export function installDevDependencies({ typescript }: ProjectCliConfig) {
  let success = false
  let response = ''

  let devDependencies = [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'generate-changelog',
    'husky',
    'lint-staged',
    'prettier',
    'rimraf',
    'typescript',
  ]

  if (typescript === 'yes') {
    const tsDevDependencies = [
      '@types/node',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ]

    devDependencies = [...devDependencies, ...tsDevDependencies]
  }

  const devDependenciesString = devDependencies.join(' ')

  try {
    const npmInstall = execSync(`npm i -D ${devDependenciesString}`)
    response = npmInstall.toString()

    success = true
  } catch (e) {}

  return { success, response }
}

export function installDependencies() {
  let success = false
  let response = ''

  const dependencies = [
    '@types/v8flags',
    'chalk',
    'interpret',
    'liftoff',
    'minimist',
    'plop',
    'ts-deepmerge',
    'v8flags',
  ]

  const dependenciesString = dependencies.join(' ')

  try {
    const npmInstall = execSync(`npm i ${dependenciesString}`)
    response = npmInstall.toString()

    success = true
  } catch (e) {}

  return { success, response }
}
