type Input = {
  support: string[]
  cssinjs: string[]
  feature: string[]
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

  const inputArgs = prefilledArgs.filter(
    (a) => a !== 'name' && a !== 'type' && a !== 'typescript'
  )
  const input: Input = {
    feature: [],
    support: [],
    cssinjs: [],
  }

  inputArgs.forEach((prefilledName) => {
    if (prefilled[prefilledName] !== undefined) {
      switch (prefilledName) {
        case 'storybook':
          input.support.push('storybook')
          break
        case 'jest':
          input.support.push('jest')
          break
        case 'useEffect':
          input.feature.push('useeffect')
          break
        case 'useState':
          input.feature.push('usestate')
          break
        case 'styled':
          input.support.push('styled')
          break
        case 'emotion':
          input.support.push('emotion')
          break
        default:
          break
      }
    }
  })

  if (input.feature.length > 0) {
    execArgs.push(`${input.feature.join(',')}`)
  } else {
    execArgs.push('_')
  }

  if (input.cssinjs.length > 0) {
    execArgs.push(`${input.cssinjs.join(',')}`)
  } else {
    execArgs.push('_')
  }

  if (input.support.length > 0) {
    execArgs.push(`${input.support.join(',')}`)
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
