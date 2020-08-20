const shared: Shared = {
  reactComponent: {
    cwd: '',
    configPath: '',
  },
  projectCli: {
    cwd: '',
  },
  main: {
    cwd: '',
  },
}

export function getShared(name: SharedKey) {
  return shared[name]
}

export function setShared(name: SharedKey, toSet: Record<string, string>) {
  if (!shared[name]) {
    shared[name] = {}
  }

  Object.keys(toSet).forEach((key) => {
    shared[name][key] = toSet[key]
  })
}
