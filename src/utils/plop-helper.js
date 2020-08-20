export function plopHelper(plop) {
  plop.setHelper('ifIn', function (elem, list, options) {
    if (list.indexOf(elem) > -1) {
      return options.fn(this)
    }
    return options.inverse(this)
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
