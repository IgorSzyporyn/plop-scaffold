type SharedKey = keyof Shared

type Shared = {
  main: Record<string, string>
  reactComponent: Record<string, string>
  projectCli: Record<string, string>
}
