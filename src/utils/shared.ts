import { PROJECT_ID } from '../constants'
import minimist from 'minimist'

export type Shared = {
  argv: minimist.ParsedArgs
  configPath: string
  cwd: string
  distPath: string
  liftoffEnv: LiftoffEnv
  username: string
  useremail: string
}

const root: Record<string, any> = global

root[PROJECT_ID] = {
  argv: {},
  configPath: '',
  cwd: '',
  distPath: '',
  liftoffEnv: {},
  username: '',
  useremail: '',
}

export function getShared() {
  return root[PROJECT_ID] as Shared
}

export function setShared(toSet: Record<string, any>) {
  Object.keys(toSet).forEach((key) => {
    root[PROJECT_ID][key] = toSet[key]
  })
}
