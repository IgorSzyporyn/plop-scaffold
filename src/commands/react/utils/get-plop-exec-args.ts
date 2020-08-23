export function getPlopExecArgs(
  prefilled: Record<string, any>,
  prefilledArgs: string[]
) {
  const execArgs: string[] = []

  prefilledArgs.forEach((_, index) => {
    switch (index) {
      case 0:
        if (prefilled.type !== undefined) {
          execArgs.push(prefilled.type)
        } else {
          execArgs.push('_')
        }
        break
      case 1:
        if (prefilled.name !== undefined) {
          execArgs.push(`${prefilled.name}`)
        } else {
          execArgs.push('_')
        }
        break
      case 2:
        if (prefilled.typescript !== undefined) {
          const reply = prefilled.typescript === 'yes' ? 'yes' : 'no'
          execArgs.push(reply)
        } else {
          execArgs.push('_')
        }
        break
      default:
        break
    }
  })

  const hooks: string[] = []

  prefilledArgs.forEach((prefilledName) => {
    if (prefilled[prefilledName] !== undefined) {
      switch (prefilledName) {
        case 'useEffect':
          hooks.push('useeffect')
          break
        case 'useState':
          hooks.push('usestate')
          break
      }
    }
  })

  if (hooks.length > 0) {
    execArgs.push(`${hooks.join(',')}`)
  } else {
    execArgs.push('_')
  }

  if (prefilled.cssinjs !== undefined) {
    execArgs.push(`${prefilled.cssinjs}`)
  } else {
    execArgs.push('_')
  }

  if (prefilled.examples !== undefined) {
    const reply = prefilled.examples === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
  } else {
    execArgs.push('_')
  }

  if (prefilled.test !== undefined) {
    execArgs.push(`${prefilled.test}`)
  } else {
    execArgs.push('_')
  }

  if (prefilled.storybook !== undefined) {
    const reply = prefilled.storybook === 'yes' ? 'yes' : 'no'
    execArgs.push(reply)
  } else {
    execArgs.push('_')
  }

  // If args are just full of _ then it should be empty
  let isEmpty = true

  execArgs.some((arg) => {
    if (arg !== '_') {
      isEmpty = false
    }

    return isEmpty
  })

  return isEmpty ? [] : execArgs
}
