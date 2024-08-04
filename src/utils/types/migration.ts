export type Migration = {
  id: number
  runner: () => Promise<void>
}

export type Migrations = Migration[]
