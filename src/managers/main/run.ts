// import minimist from 'minimist'
import { print } from '../../utils/print'
import { setShared } from '../../utils/shared'

export function run(env: LiftoffEnv) {
  // const args = process.argv.slice(2)
  // const argv = minimist(args)
  const { configPath = '', cwd } = env

  setShared('main', { cwd, configPath })

  print.header()
  print.subtitle('Initialize')

  print.newline()
}
