import { ProjectCliAnswers } from '..'

export function getTsExecArgs({ typescript: _typescript }: ProjectCliAnswers) {
  const typescript = _typescript === 'yes'
  let execArgs: string[] = [
    '--init',
    '--allowJs',
    '--outDir',
    'dist',
    'rootDir',
    'src',
    '--module',
    'CommonJS',
  ]

  if (typescript) {
    execArgs = [...execArgs, ...['--declaration']]
  }

  return execArgs
}
