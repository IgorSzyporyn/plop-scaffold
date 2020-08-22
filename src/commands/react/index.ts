/**
 * Options and defaults
 *
 * --baseDir src
 * --componentDir components
 * --pageDir pages
 * --containerDir containers
 * --hookDir hooks
 *
 * Values that can be predefined and bypassed in plop
 *
 * --type (component/page/hook/container)
 * --typescript
 * --useState
 * --useEffect
 * --cssInJs
 * --storybook
 * --testing
 * --withComments
 * --withExampleCode
 *
 **/

export type ReactConfig = {
  baseDir: string | null
  componentDir: string | null
  pageDir: string | null
  containerDir: string | null
  hookDir: string | null
  storybook: boolean | null
  useState: boolean | null
  useEffect: boolean | null
  cssInJs: 'no' | 'styled-components' | '@emotion/styled' | null
  type: 'component' | 'container' | 'page' | 'hook' | null
  typescript: boolean | null
  withComments: boolean | null
  withExampleCode: boolean | null
  testing: 'no' | '@testing-library/react' | 'react-test-renderer' | 'enzyme' | null
}

export const defaultReactConfig: Readonly<ReactConfig> = {
  baseDir: 'src',
  componentDir: 'components',
  pageDir: 'pages',
  containerDir: 'containers',
  hookDir: 'hooks',
  cssInJs: null,
  storybook: null,
  type: null,
  typescript: null,
  useEffect: null,
  useState: null,
  withComments: null,
  withExampleCode: null,
  testing: null,
}

export const allowedArgs = [
  'baseDir',
  'componentDir',
  'pageDir',
  'containerDir',
  'hookDir',
  'cssInJs',
  'storybook',
  'type',
  'typescript',
  'useEffect',
  'useState',
  'withComments',
  'withExampleCode',
  'testing',
]

export const prefilledArgs = [
  'baseDir',
  'componentDir',
  'pageDir',
  'containerDir',
  'hookDir',
  'cssInJs',
  'storybook',
  'type',
  'typescript',
  'useEffect',
  'useState',
  'withComments',
  'withExampleCode',
  'testing',
]

export * from './run'
