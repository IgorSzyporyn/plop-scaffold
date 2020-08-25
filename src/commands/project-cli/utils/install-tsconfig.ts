import path from 'path'
import { execSync } from 'child_process'
import { ProjectCliAnswers } from '../index'
import { getTsExecArgs } from './get-ts-exec-args'

export function installTsConfig(answers: ProjectCliAnswers) {
  const tsArgs = getTsExecArgs(answers)

  execSync(
    `node ${path.join('./node_modules/typescript/bin/tsc')} ${tsArgs.join(' ')}`
  )
}
