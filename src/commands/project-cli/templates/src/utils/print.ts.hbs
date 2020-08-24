import chalk from 'chalk'
import { getPckJson } from './get-version'

export const newline = () => {
  print('  ')
}

export const titleWithCommand = (command?: string) => {
  const { name } = getPckJson()
  const title = chalk.white(`${name}`)
  const suffixText = command ? chalk.blueBright(command) : ' '

  print(`${title} ${suffixText}`)
}

export const titleWithSuffix = (suffix?: string) => {
  const { name } = getPckJson()
  const title = chalk.white(`${name}`)
  const suffixText = suffix ? chalk.white(suffix) : ' '

  print(`${title} ${suffixText}`)
}

export const title = () => {
  const { name } = getPckJson()
  const title = chalk.white(`${name}`)

  print(`${title}`)
}

export const subtitle = (name: string) => {
  const subtitle = chalk.white(`${name}`)

  print(subtitle)
}

export type BorderType = '_' | '-' | string

export type BorderProps =
  | number
  | {
      text?: string
      length?: number
      type?: string
    }

const renderBorder = (length: number, type: BorderType) => {
  let border = ''
  for (let i = 0; i < length; i++) {
    border = `${border}${type}`
  }

  return border
}

export const border = (props: BorderProps, type: BorderType = '-') => {
  let borderLine = ''
  let text = ''

  if (typeof props === 'number') {
    borderLine = renderBorder(props, type)
  } else {
    text = props.text || ''
    const length = props.length || (text ? text.length : 0)

    borderLine = renderBorder(length, props.type || type)
  }

  if (text) {
    print(text)
  }

  print(borderLine)
}

export const task = (text: string) => {
  print(`${chalk.grey(text)}`)
}

export const success = (text: string) => {
  print(`${chalk.greenBright(text)}`)
}

export const failure = (text: string) => {
  print(`${chalk.redBright(text)}`)
}

export type PrintType = 'log' | 'info' | 'warn' | 'error' | 'task'

export const print = (source: any, type: PrintType = 'log') => {
  switch (type) {
    case 'error':
      // eslint-disable-next-line no-console
      console.log(`${chalk.yellow(source)}`)
      break
    case 'warn':
      // eslint-disable-next-line no-console
      console.log(`${chalk.red(source)}`)
      break
    case 'info':
      // eslint-disable-next-line no-console
      console.log(`${chalk.blue(source)}`)
      break
    case 'log':
    default:
      // eslint-disable-next-line no-console
      console.log(source)
      break
  }
}

print.newline = newline
print.title = title
print.titleWithCommand = titleWithCommand
print.titleWithSuffix = titleWithSuffix
print.border = border
print.task = task
print.success = success
print.failure = failure
print.subtitle = subtitle
