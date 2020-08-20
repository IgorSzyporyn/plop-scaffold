/**
 * Options and defaults
 *
 * --rootDir src
 *
 * Values that can be predefined and bypassed in plop
 *
 * --name
 * --type (component/page/hook/container)
 * --typescript
 * --useState
 * --useEffect
 * --styled
 * --emotion
 * --storybook false
 * --jest false
 *
 **/

export type RCConfig = {
  rootDir: string
  storybook: boolean | null
  jest: boolean | null
  name: string
  useState: boolean | null
  useEffect: boolean | null
  styled: boolean | null
  emotion: boolean | null
  type: 'component' | 'container' | 'page' | 'hook' | null
  typescript: boolean | null
}

export const defaultRCConfig: Readonly<RCConfig> = {
  rootDir: 'src',
  storybook: null,
  jest: null,
  name: '',
  useState: null,
  useEffect: null,
  type: null,
  styled: null,
  emotion: null,
  typescript: null,
}

export const allowedArgs = [
  'rootDir',
  'storybook',
  'jest',
  'name',
  'type',
  'styled',
  'emotion',
  'useState',
  'useEffect',
  'typescript',
]

export const prefilledArgs = [
  'type',
  'name',
  'typescript',
  'useState',
  'useEffect',
  'emotion',
  'styled',
  'storybook',
  'jest',
]

export * from './run'
