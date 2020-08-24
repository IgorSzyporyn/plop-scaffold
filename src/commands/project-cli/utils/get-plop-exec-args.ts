export function getPlopExecArgs(prefilledConfig: Record<string, any>) {
  const execArgs: string[] = ['project-cli']

  if (prefilledConfig.name) {
    execArgs.push(`${prefilledConfig.name}`)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.description) {
    execArgs.push(`${prefilledConfig.description}`)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.typescript) {
    const reply = prefilledConfig.typescript === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.commitlint) {
    const reply = prefilledConfig.commitlint === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.liftoff) {
    const reply = prefilledConfig.liftoff === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.author) {
    execArgs.push(`${prefilledConfig.author}`)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.authoremail) {
    execArgs.push(`${prefilledConfig.authoremail}`)
  } else {
    execArgs.push('_')
  }

  // If args are just full of _ then it should be empty
  let isEmpty = true

  execArgs.forEach((arg) => {
    if (arg !== '_') {
      isEmpty = false
    }

    return isEmpty
  })

  return isEmpty ? [] : execArgs
}
