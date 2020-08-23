/**
 * Options and defaults
 *
 * --baseDir src
 * --componentDir components
 * --pageDir pages
 * --containerDir containers
 * --testDir "name of test folder"
 *
 * Values that can be predefined and bypassed in plop
 *
 * --type (component/page/hook/container)
 * --typescript
 * --usestate
 * --useeffect
 * --cssinjs
 * --storybook
 * --test
 * --examples
 *
 **/

export type ReactConfig = {
  baseDir: string | null
  componentDir: string | null
  pageDir: string | null
  containerDir: string | null
  testDir: string | null
  storybookDir: string | null
  storybook: boolean | null
  usestate: boolean | null
  useeffect: boolean | null
  cssinjs: 'no' | 'styled-components' | '@emotion/styled' | null
  type: 'component' | 'container' | 'page' | null
  typescript: 'yes' | 'no' | null
  examples: 'yes' | 'no' | null
  test: 'no' | '@testing-library/react' | 'react-test-renderer' | 'enzyme' | null
}

export const defaultReactConfig: Readonly<ReactConfig> = {
  baseDir: 'src',
  componentDir: 'components',
  pageDir: 'pages',
  containerDir: 'containers',
  testDir: null,
  storybookDir: null,
  cssinjs: null,
  storybook: null,
  type: null,
  typescript: null,
  useeffect: null,
  usestate: null,
  examples: null,
  test: null,
}

export const allowedArgs = [
  'baseDir',
  'componentDir',
  'pageDir',
  'containerDir',
  'testDir',
  'storybookDir',
  'cssinjs',
  'storybook',
  'type',
  'typescript',
  'useeffect',
  'usestate',
  'examples',
  'test',
]

export const prefilledArgs = [
  'baseDir',
  'componentDir',
  'pageDir',
  'containerDir',
  'testDir',
  'storybookDir',
  'cssinjs',
  'storybook',
  'type',
  'typescript',
  'useeffect',
  'usestate',
  'examples',
  'test',
]

export * from './run'
