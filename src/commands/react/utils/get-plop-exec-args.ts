type Input = {
  aid: string[]
  hooks: string[]
}

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
          execArgs.push('y')
        } else {
          execArgs.push('_')
        }
        break
      default:
        break
    }
  })

  const input: Input = {
    aid: [],
    hooks: [],
  }

  prefilledArgs.forEach((prefilledName) => {
    if (prefilled[prefilledName] !== undefined) {
      switch (prefilledName) {
        case 'useEffect':
          input.hooks.push('useeffect')
          break
        case 'useState':
          input.hooks.push('usestate')
          break
        case 'withComments':
          input.aid.push('withcomments')
          break
        case 'withExampleCode':
          input.aid.push('withexamplecode')
          break
        default:
          break
      }
    }
  })

  if (input.hooks.length > 0) {
    execArgs.push(`${input.hooks.join(',')}`)
  } else {
    execArgs.push('_')
  }

  if (prefilled.cssInJs !== undefined) {
    execArgs.push(`${prefilled.cssInJs}`)
  } else {
    execArgs.push('_')
  }

  if (input.aid.length > 0) {
    execArgs.push(`${input.aid.join(',')}`)
  } else {
    execArgs.push('_')
  }

  if (prefilled.testing !== undefined) {
    execArgs.push(`${prefilled.testing}`)
  } else {
    execArgs.push('_')
  }

  if (prefilled.storybook !== undefined) {
    execArgs.push(`${prefilled.storybook}`)
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
