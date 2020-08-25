import { PROJECT_ID } from '../constants'
import minimist from 'minimist'

export type Shared<T = Record<string, any>> = {
  argv: minimist.ParsedArgs
  configPath: string
  cwd: string
  distPath: string
  liftoffEnv: LiftoffEnv
  username: string
  useremail: string
  plopSuccess: boolean
  answers: T
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
  plopSuccess: false,
  answers: {},
}

export function getShared<T>() {
  return root[PROJECT_ID] as Shared<T>
}

export function setShared(toSet: Record<string, any>) {
  Object.keys(toSet).forEach((key) => {
    root[PROJECT_ID][key] = toSet[key]
  })
}
