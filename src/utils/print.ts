import chalk from 'chalk'
import { getVersion } from './get-version'

export const newline = () => {
  print('  ')
}

export const title = () => {
  const version = getVersion()
  const title = chalk.bold.cyan(`Plop Scaffold ${version}`)

  print(title)
}

export const subtitle = (name: string) => {
  const subtitle = chalk.white(`Using sub-route for: ${name}`)

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
  print(`\u23F1  ${chalk.grey(text)}`)
}

export const success = (text: string) => {
  print(`\u2705  ${chalk.green.bold(text)}`)
}

export const failure = (text: string) => {
  print(`\u26D4  ${chalk.red.bold(text)}`)
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
print.header = title
print.border = border
print.task = task
print.success = success
print.failure = failure
print.subtitle = subtitle
