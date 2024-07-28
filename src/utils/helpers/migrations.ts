import { db, tableNames } from "../config/database"
import { migrations } from "../config/migrations"

type MigrationIds = keyof typeof migrations

export const applyMigrations = async () => {
  let migrationList = []

  const hasAppConfigTable = await db.schema.hasTable(tableNames.AppConfig)
  if (!hasAppConfigTable) {
    migrationList = Object.values(migrations)
  } else {
    const lastUsedMigration = await db(tableNames.AppConfig).where("key", "last_migration").first()
    if (!lastUsedMigration) {
      migrationList = Object.values(migrations)
    } else {
      const lastUsedMigrationId = Number(lastUsedMigration.value)
      const migrationKeys = Object.keys(migrations)
        .map(Number)
        .filter((migrationId) => migrationId > lastUsedMigrationId)
      migrationList = migrationKeys.map((migrationId) => migrations[String(migrationId) as MigrationIds])
    }
  }

  let lastAppliedMigrationId
  for (const migration of migrationList) {
    lastAppliedMigrationId = await migration()
  }

  if (lastAppliedMigrationId) {
    await db(tableNames.AppConfig).where("key", "last_migration").update({ value: lastAppliedMigrationId })
  }
}

export const dropAllTables = async () => {
  for (const tableName of Object.values(tableNames)) {
    await db.schema.dropTableIfExists(tableName)
  }
}
