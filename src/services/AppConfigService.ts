import { AppConfigRow } from "../utils/types/database"
import { db, tableNames } from "../utils/config/database"

export const AppConfigService = {
  hasTable: async (): Promise<boolean> => {
    return await db.schema.hasTable(tableNames.AppConfig)
  },
  getConfig: async (key: string): Promise<AppConfigRow | null> => {
    try {
      return await db(tableNames.AppConfig).where("key", key).first()
    } catch {
      return null
    }
  },
  setConfig: async (key: string, value: string | null): Promise<void> => {
    if (await AppConfigService.getConfig(key)) {
      await db(tableNames.AppConfig).where("key", key).update({ value })
    } else {
      await db(tableNames.AppConfig).insert({ key, value })
    }
  },
}
