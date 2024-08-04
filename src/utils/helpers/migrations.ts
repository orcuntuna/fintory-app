import { db, tableNames } from "../config/database"
import { migrations as allMigrations } from "../config/migrations"
import { Migrations } from "../types/migration"

export const applyMigrations = async () => {
  let migrationList: Migrations

  const hasAppConfigTable = await db.schema.hasTable(tableNames.AppConfig)
  if (!hasAppConfigTable) {
    migrationList = allMigrations
  } else {
    const lastUsedMigration = await db(tableNames.AppConfig).where("key", "last_migration").first()
    if (!lastUsedMigration) {
      migrationList = allMigrations
    } else {
      const lastUsedMigrationId = Number(lastUsedMigration.value) || 0
      migrationList = allMigrations.filter((migration) => migration.id > lastUsedMigrationId)
    }
  }

  let lastAppliedMigrationId
  if (migrationList.length > 0) {
    for (const migration of migrationList) {
      await migration.runner()
      lastAppliedMigrationId = migration.id
    }

    await db(tableNames.AppConfig).where("key", "last_migration").update({ value: lastAppliedMigrationId })
  }
}

export const dropAllTables = async () => {
  for (const tableName of Object.values(tableNames)) {
    await db.schema.dropTableIfExists(tableName)
  }
}
