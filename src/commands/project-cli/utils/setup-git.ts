import { execSync, execFileSync, spawnSync } from 'child_process'
import { ProjectCliAnswers } from '..'
import { print } from '../../../utils/print'
import chalk from 'chalk'

export function setupGit({ author, name, gitproxy }: ProjectCliAnswers) {
  execSync(`git init`)
  print('- git initialized')
  execSync(`git add .`)
  execSync(`git commit -m "first commit"`)
  print('- project added and committed')

  const sshProxy = gitproxy === 'ssh'
  const remoteUrl = sshProxy
    ? `git@github.com:${author}/${name}.git`
    : ` https://github.com/${author}/${name}.git`
  const remoteCommand = `git remote add origin ${remoteUrl}`

  let remoteExists = false
  try {
    print('- attempting to connect to remote')
    execSync(remoteCommand, { stdio: 'ignore' })
    execSync('git push -u origin master')
    remoteExists = true
  } catch (e) {}

  if (!remoteExists) {
    print(`- no remote repository found - remember to create online and add`)
    print(`  ${chalk.bold(remoteCommand)}`)
    print(`  ${chalk.bold('git push -u origin master')}`)
  }
}
