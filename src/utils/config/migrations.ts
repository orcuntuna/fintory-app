import { db, tableNames } from "./database"

export const migrations = {
  "100": async () => {
    // create app config table
    await db.schema.createTable(tableNames.AppConfig, (table) => {
      table.increments()
      table.string("key").notNullable().unique()
      table.string("value")
    })

    // insert default last_migration row to app_config table
    await db(tableNames.AppConfig).insert({ key: "last_migration", value: "100" })

    return "100"
  },
  "101": async () => {
    // create user config table
    await db.schema.createTable(tableNames.UserConfig, (table) => {
      table.increments()
      table.string("key").notNullable().unique()
      table.string("value")
    })

    // insert primary_currency row to user_config table
    await db(tableNames.UserConfig).insert({ key: "primary_currency", value: "" })

    return "101"
  },
}
