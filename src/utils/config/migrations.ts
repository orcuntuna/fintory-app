import { db, tableNames } from "./database"
import { Migrations } from "../types/migration"

export const migrations: Migrations = [
  {
    id: 100,
    runner: async () => {
      await db.schema.createTable(tableNames.AppConfig, (table) => {
        table.increments()
        table.string("key").notNullable().unique()
        table.string("value")
      })

      // insert default last_migration row to app_config table
      await db(tableNames.AppConfig).insert({ key: "last_migration", value: "100" })
    },
  },
  {
    id: 101,
    runner: async () => {
      await db.schema.createTable(tableNames.UserConfig, (table) => {
        table.increments()
        table.string("key").notNullable().unique()
        table.string("value")
      })

      // insert primary_currency row to user_config table
      await db(tableNames.UserConfig).insert({ key: "primary_currency", value: "" })
    },
  },
]
