import { PROJECT_ID } from '../constants'

const root: Record<string, any> = global

root[PROJECT_ID] = {
  react: {
    configPath: '',
    cwd: '',
    running: false,
    projectPath: '',
  },
  'project-cli': {
    cwd: '',
    running: false,
  },
  main: {
    cwd: '',
    running: false,
    argv: {},
    liftoffEnv: {},
  },
}

export function getShared(name: SharedKey) {
  return root[PROJECT_ID][name] as Record<string, any>
}

export function setShared(name: SharedKey, toSet: Record<string, any>) {
  if (!root[PROJECT_ID][name]) {
    root[PROJECT_ID][name] = {}
  }

  Object.keys(toSet).forEach((key) => {
    root[PROJECT_ID][name][key] = toSet[key]
  })
}
