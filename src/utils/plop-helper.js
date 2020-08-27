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
    let isEqual = false

    if (typeof elem === 'string' && typeof match === 'string') {
      isEqual = elem.toLowerCase() === match.toLowerCase()
    } else {
      isEqual = elem === match
    }

    return isEqual ? options.fn(this) : options.inverse(this)
  })

  plop.setHelper('ifNotEqual', function (elem, match, options) {
    let isEqual = false

    if (typeof elem === 'string' && typeof match === 'string') {
      isEqual = elem.toLowerCase() !== match.toLowerCase()
    } else {
      isEqual = elem !== match
    }

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

export function requiredButNoFolderExists(fieldName) {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required'
    }

    const { paramCase } = require('change-case')
    const fs = require('fs')
    const path = require('path')
    const { getEnvConst } = require('./get-env-const')
    const cwd = getEnvConst('cwd')

    const asParamCase = paramCase(value)
    const folder = path.join(cwd, asParamCase)
    const folderExits = fs.existsSync(folder)

    if (folderExits) {
      return `${folder} already exists`
    }

    return true
  }
}
