import chalk, { Color } from 'chalk'
import { getPckJson } from './get-pck-json'

type ColorMap = Record<string, typeof Color>

const color: ColorMap = {
  title: 'white',
  task: 'grey',
  success: 'green',
  error: 'red',
  info: 'blue',
  warn: 'yellow',
  message: 'cyan',
  command: 'white',
  commandDescription: 'white',
  arg: 'white',
  argDescription: 'white',
  argOption: 'white',
}

// eslint-disable-next-line no-console
export const print = (text: any) => console.log(text)

print.newline = () => print('  ')
print.task = (text: string) => print(chalk[color.task](text))
print.success = (text: string) => print(chalk[color.success](text))
print.info = (text: string) => print(chalk[color.info](text))
print.warn = (text: string) => print(chalk[color.warn](text))
print.error = (text: string) => print(chalk[color.error](text))
print.message = (text: string) => print(chalk[color.message](text))

print.title = (suffix = '') => {
  const { name } = getPckJson()
  const title = chalk[color.title](`${name} ${suffix}`)

  print(title)
}

type HelpEntry = {
  name: string
  description: string
  optionsName?: string
  options?: string[]
}

type HelpOptions = {
  type: 'main' | 'command'
  name?: string
  message?: string[]
  commands?: HelpEntry[]
  args?: HelpEntry[]
  padding?: number
}

print.help = ({
  name,
  type,
  args,
  message,
  commands,
  padding: _padding,
}: HelpOptions) => {
  const { name: pckName } = getPckJson()

  const suffix = type === 'main' ? 'command' : name
  const argsSuffix = args && args.length > 0 ? `[<args>]` : ''
  print(`usage: ${pckName} ${suffix} ${argsSuffix}`)

  if (message) {
    print.newline()
    message.forEach((msg) => print.message(msg))
  }

  let maxEntryNameLength = 0
  let padding = _padding || 37

  if (commands) {
    commands.forEach((command) => {
      if (command.name.length > maxEntryNameLength) {
        maxEntryNameLength = command.name.length
      }
    })
  }

  if (args) {
    args.forEach(({ name, optionsName }) => {
      const text = optionsName ? `${name} <${optionsName}>` : name

      if (text.length > maxEntryNameLength) {
        maxEntryNameLength = text.length
      }
    })
  }

  if (padding < maxEntryNameLength) {
    padding = maxEntryNameLength + 6
  }

  if (commands) {
    print.newline()
    print('Available commands:')
    print.newline()

    commands.forEach(({ name, description }) => {
      const spacing = padding - name.length
      const spacer = new Array(spacing).join(' ')

      print(
        `  ${chalk[color.command](name)}${spacer}${chalk[color.commandDescription](
          description
        )}`
      )
    })

    print.newline()
  }

  if (args) {
    const paddingSpacer = new Array(padding).join(' ')

    print.newline()
    print('Available arguments:')
    print.newline()

    args.forEach(({ name, description, optionsName, options }) => {
      const title = optionsName ? `${name} <${optionsName}>` : name
      const spacing = padding - title.length
      const spacer = new Array(spacing).join(' ')

      print(
        `  ${chalk[color.arg](title)}${spacer}${chalk[color.argDescription](
          description
        )}`
      )

      if (options && options.length > 0) {
        let optionsText = ''

        options.forEach((option, i) => {
          if (i === 0) {
            optionsText = `${chalk[color.argOption](option)}`
          } else {
            optionsText = `${optionsText} | ${chalk[color.argOption](option)}`
          }
        })

        print(`  ${paddingSpacer}${optionsText}`)
      }

      print.newline()
    })
  }
}
