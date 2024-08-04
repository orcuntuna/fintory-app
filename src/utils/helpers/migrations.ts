import { db, tableNames } from "../config/database"
import { migrations as allMigrations } from "../config/migrations"
import { Migrations } from "../types/migration"
import { AppConfigService } from "../../services/AppConfigService"

export const applyMigrations = async () => {
  let migrationList: Migrations

  const hasAppConfigTable = await AppConfigService.hasTable()
  if (!hasAppConfigTable) {
    migrationList = allMigrations
  } else {
    const lastUsedMigration = await AppConfigService.getConfig("last_migration")
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

    await AppConfigService.setConfig("last_migration", String(lastAppliedMigrationId))
  }
}

export const dropAllTables = async () => {
  for (const tableName of Object.values(tableNames)) {
    await db.schema.dropTableIfExists(tableName)
  }
}
