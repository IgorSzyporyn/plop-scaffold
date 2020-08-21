/**
 * Options and defaults
 *
 * --init
 *
 * Values that can be predefined and bypassed in plop
 *
 * --route (react/project-cli/project-react-component/react-next-page)
 *
 **/

export const allowedRoutes: RouteTypes[] = [
  'react',
  'react-next-page',
  'project-cli',
  'project-react-component',
]

export * from './run'
