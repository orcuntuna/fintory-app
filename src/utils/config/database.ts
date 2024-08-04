import ExpoSQLiteDialect from "@expo/knex-expo-sqlite-dialect"
import Knex from "knex"
import { sqliteDatabaseName } from "../constants/database"

export const db = Knex({
  client: ExpoSQLiteDialect,
  connection: {
    filename: sqliteDatabaseName,
  },
  useNullAsDefault: true,
})

export const tableNames = {
  AppConfig: "app_config",
  UserConfig: "user_config",
  PortfolioItems: "portfolio_items",
}
