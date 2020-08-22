type PrefilledType = {
  key: string
  value: any
}

export function checkForPrefilledValues(
  config: Record<string, any>,
  keys: string[]
) {
  let hasPrefilledValues = false
  const prefilledArray: PrefilledType[] = []
  const prefilledObject: { [key: string]: any } = {}

  keys.forEach((key) => {
    if (config[key] !== null && config[key] !== '') {
      hasPrefilledValues = true
      prefilledArray.push({ key, value: config[key] })
    }
  })

  if (hasPrefilledValues) {
    prefilledArray.forEach((prefilled) => {
      prefilledObject[prefilled.key] = prefilled.value
    })
  }

  return prefilledObject
}
