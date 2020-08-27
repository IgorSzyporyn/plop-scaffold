import { execSync } from 'child_process'
import { ProjectCliConfig } from '../index'

export function installDevDependencies({
  typescript,
  commitlint,
  liftoff,
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

  if (typescript === 'yes') {
    const tsDevDependencies = [
      '@types/node',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ]

    if (liftoff === 'yes') {
      tsDevDependencies.push('@types/v8flags')
    }

    devDependencies = [...devDependencies, ...tsDevDependencies]
  }

  if (commitlint === 'yes') {
    const commitlintDevDependencies = [
      '@commitlint/cli',
      '@commitlint/config-conventional',
      'husky',
      'lint-staged',
    ]

    devDependencies = [...devDependencies, ...commitlintDevDependencies]
  }

  if (liftoff === 'yes') {
    const liftoffDevDependencies = ['@types/liftoff', '@types/interpret']

    devDependencies = [...devDependencies, ...liftoffDevDependencies]
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
