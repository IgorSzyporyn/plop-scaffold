export function plopHelper(plop) {
  plop.setHelper('ifIn', function (elem, list, options) {
    if (list.indexOf(elem) > -1) {
      return options.fn(this)
    }
    return options.inverse(this)
  })

  plop.setHelper('hasHook', function (hooks, options) {
    return hooks && hooks.length > 0 ? options.fn(this) : options.inverse(this)
  })

  plop.setHelper('hasBothHooks', function (hooks, options) {
    return hooks && hooks.length > 1 ? options.fn(this) : options.inverse(this)
  })
  plop.setHelper('ifEqual', function (elem, match, options) {
    const isEqual = elem === match
    return isEqual ? options.fn(this) : options.inverse(this)
  })

  plop.setHelper('ifNotEqual', function (elem, match, options) {
    const isEqual = elem !== match
    return isEqual ? options.fn(this) : options.inverse(this)
  })
}

export function requireField(fieldName) {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required'
    }
    return true
  }
}
