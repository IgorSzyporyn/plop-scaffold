/**
 * Options and defaults
 *
 * --name
 * --description
 * --liftoff
 * --author
 * --authoremail
 * --typescript
 * --commitlint
 *
 **/

export type ProjectCliConfig = {
  name: string | null
  description: 'yes' | 'no' | null
  typescript: 'yes' | 'no' | null
  commitlint: 'yes' | 'no' | null
  liftoff: 'yes' | 'no' | null
  author: string | null
  authoremail: string | null
}

export type ProjectCliAnswers = {
  name: string
  description: 'yes' | 'no'
  typescript: 'yes' | 'no'
  commitlint: 'yes' | 'no'
  liftoff: 'yes' | 'no'
  author: string
  authoremail: string
}

export const defaultProjectCliConfig: Readonly<ProjectCliConfig> = {
  name: null,
  description: null,
  typescript: null,
  commitlint: null,
  liftoff: null,
  author: null,
  authoremail: null,
}

export const allowedArgs: Readonly<(keyof ProjectCliConfig)[]> = [
  'name',
  'description',
  'typescript',
  'commitlint',
  'liftoff',
  'author',
  'authoremail',
]

export const prefilledArgs: Readonly<(keyof ProjectCliConfig)[]> = [
  'name',
  'description',
  'typescript',
  'commitlint',
  'liftoff',
  'author',
  'authoremail',
]

export * from './run'
