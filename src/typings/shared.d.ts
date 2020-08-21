type SharedKey = keyof Shared

type Shared = {
  main: Record<string, any>
  react: Record<string, any>
  'project-cli': Record<string, any>
}
