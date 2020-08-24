import { execSync } from 'child_process'
import { ProjectCliConfig } from '../index'

export function installDevDependencies({
  typescript,
  commitlint,
}: ProjectCliConfig) {
  let success = false
  let response = ''

  let devDependencies = [
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'generate-changelog',
    'prettier',
    'rimraf',
    'typescript',
  ]

  if (commitlint === 'yes') {
    const tsDevDependencies = [
      '@types/node',
      '@types/v8flags',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ]

    devDependencies = [...devDependencies, ...tsDevDependencies]
  }

  if (typescript === 'yes') {
    const commitlintDevDependencies = [
      '@commitlint/cli',
      '@commitlint/config-conventional',
      'husky',
      'lint-staged',
    ]

    devDependencies = [...devDependencies, ...commitlintDevDependencies]
  }

  const devDependenciesString = devDependencies.join(' ')

  try {
    const npmInstall = execSync(`npm i -D ${devDependenciesString}`)
    response = npmInstall.toString()

    success = true
  } catch (e) {}

  return { success, response }
}

export function installDependencies({ liftoff }: ProjectCliConfig) {
  let success = false
  let response = ''
  let dependencies = ['chalk']

  if (liftoff === 'yes') {
    const liftoffDependencies = ['interpret', 'liftoff', 'minimist', 'v8flags']
    dependencies = [...dependencies, ...liftoffDependencies]
  }

  const dependenciesString = dependencies.join(' ')

  try {
    const npmInstall = execSync(`npm i ${dependenciesString}`)
    response = npmInstall.toString()

    success = true
  } catch (e) {}

  return { success, response }
}
