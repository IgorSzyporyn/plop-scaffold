import path from 'path'
import { ProjectCliAnswers } from '.'
import { getEnv } from '../../utils/get-env'
import {
  installDevDependencies,
  installDependencies,
} from './utils/install-npm-dependencies'
import { print } from '../../utils/print'

export function execute(answers: ProjectCliAnswers) {
  const { name } = answers
  const { cwd } = getEnv()
  const workingDir = path.join(cwd, name)

  process.chdir(workingDir)

  print.newline()
  print('Installing Dev Dependencies....', 'info')
  installDevDependencies(answers)
  print.newline()
  print('Installing Dependencies....', 'info')
  installDependencies(answers)
}
