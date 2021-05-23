export function getPlopExecArgs(
  prefilledConfig: Record<string, any>,
  prefilledArgs: Readonly<string[]>
) {
  const execArgs: string[] = ['component']
  const hooks: ('usestate' | 'useeffect')[] = []

  prefilledArgs.forEach((arg, index) => {
    switch (index) {
      case 0:
        if (prefilledConfig.type) {
          execArgs.push(prefilledConfig.type)
        } else {
          execArgs.push('_')
        }
        break
      case 1:
        // We do not allow prefil of name for this route
        execArgs.push('_')
        break
      case 2:
        if (prefilledConfig.typescript) {
          const reply = prefilledConfig.typescript === 'yes' ? 'yes' : 'no'
          execArgs.push(reply)
        } else {
          execArgs.push('_')
        }
        break
      default:
        break
    }

    if (prefilledConfig[arg] !== undefined) {
      switch (arg) {
        case 'useeffect':
          prefilledConfig[arg] && hooks.push('useeffect')
          break
        case 'usestate':
          prefilledConfig[arg] && hooks.push('usestate')
          break
      }
    }
  })

  if (hooks.length > 0) {
    execArgs.push(`${hooks.join(',')}`)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.cssinjs) {
    execArgs.push(`${prefilledConfig.cssinjs}`)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.examples) {
    const reply = prefilledConfig.examples === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.test) {
    execArgs.push(`${prefilledConfig.test}`)
  } else {
    execArgs.push('_')
  }

  if (prefilledConfig.storybook) {
    const reply = prefilledConfig.storybook === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
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
