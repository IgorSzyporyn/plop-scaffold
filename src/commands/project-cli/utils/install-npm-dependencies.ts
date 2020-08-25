import { execSync } from 'child_process'
import { ProjectCliConfig } from '../index'

export function installDevDependencies({
  typescript,
  commitlint,
}: ProjectCliConfig) {
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
    execSync(`npm i -D ${devDependenciesString}`)
  } catch (e) {}
}

export function installDependencies({ liftoff }: ProjectCliConfig) {
  let dependencies = ['chalk']

  if (liftoff === 'yes') {
    const liftoffDependencies = ['interpret', 'liftoff', 'minimist', 'v8flags']
    dependencies = [...dependencies, ...liftoffDependencies]
  }

  const dependenciesString = dependencies.join(' ')

  try {
    execSync(`npm i ${dependenciesString}`)
  } catch (e) {}
}
