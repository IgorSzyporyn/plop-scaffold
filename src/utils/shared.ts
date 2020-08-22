import { PROJECT_ID } from '../constants'
import minimist from 'minimist'

export type Shared = {
  argv: minimist.ParsedArgs
  configPath: string
  cwd: string
  distPath: string
  liftoffEnv: LiftoffEnv
}

const root: Record<string, any> = global

root[PROJECT_ID] = {
  argv: {},
  configPath: '',
  cwd: '',
  distPath: '',
  liftoffEnv: {},
}

export function getShared() {
  return root[PROJECT_ID] as Shared
}

export function setShared(toSet: Record<string, any>) {
  Object.keys(toSet).forEach((key) => {
    root[PROJECT_ID][key] = toSet[key]
  })
}
