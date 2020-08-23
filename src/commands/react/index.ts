/**
 * Options and defaults
 *
 * --baseDir src
 * --componentDir components
 * --containerDir containers
 * --pageDir pages
 * --testDir "name of test folder"
 * --storybookDir "name of test folder"
 * --cssinjs
 * --examples
 * --storybook
 * --test
 * --type (component/page/hook/container)
 * --typescript
 * --useeffect
 * --usestate
 *
 **/

export type ReactConfigTypes =
  | 'baseDir'
  | 'componentDir'
  | 'containerDir'
  | 'pageDir'
  | 'storybookDir'
  | 'testDir'
  | 'cssinjs'
  | 'examples'
  | 'storybook'
  | 'test'
  | 'type'
  | 'typescript'
  | 'useeffect'
  | 'usestate'

export type ReactConfig = {
  baseDir: string | null
  componentDir: string | null
  containerDir: string | null
  pageDir: string | null
  storybookDir: string | null
  testDir: string | null
  cssinjs: 'no' | 'styled-components' | '@emotion/styled' | null
  examples: 'yes' | 'no' | null
  storybook: 'yes' | 'no' | null
  test: 'no' | '@testing-library/react' | 'react-test-renderer' | 'enzyme' | null
  type: 'component' | 'container' | 'page' | null
  typescript: 'yes' | 'no' | null
  useeffect: boolean | null
  usestate: boolean | null
}

export const defaultReactConfig: Readonly<ReactConfig> = {
  baseDir: 'src',
  componentDir: 'components',
  containerDir: 'containers',
  pageDir: 'pages',
  storybookDir: null,
  testDir: null,
  cssinjs: null,
  examples: null,
  storybook: null,
  test: null,
  type: null,
  typescript: null,
  useeffect: null,
  usestate: null,
}

export const allowedArgs: Readonly<ReactConfigTypes[]> = [
  'baseDir',
  'componentDir',
  'containerDir',
  'pageDir',
  'storybookDir',
  'testDir',
  'cssinjs',
  'examples',
  'storybook',
  'test',
  'type',
  'typescript',
  'useeffect',
  'usestate',
]

export const prefilledArgs: Readonly<ReactConfigTypes[]> = [
  'baseDir',
  'componentDir',
  'containerDir',
  'pageDir',
  'storybookDir',
  'testDir',
  'cssinjs',
  'examples',
  'storybook',
  'test',
  'type',
  'typescript',
  'useeffect',
  'usestate',
]

export * from './run'
