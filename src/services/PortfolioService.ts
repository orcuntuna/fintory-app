import { CategoryKeys } from "../utils/types/categories"
import { PortfolioItemsRow } from "../utils/types/database"

export const PortfolioService = {
  getPortfolioItems: async (): Promise<PortfolioItemsRow[]> => {
    return []
  },
  getPortfolioItemsByCategory: async (categoryKey: CategoryKeys): Promise<PortfolioItemsRow[]> => {
    return []
  },
  getPortfolioItemById: async (id: number): Promise<PortfolioItemsRow | null> => {
    return null
  },
  addPortfolioItem: async (item: Pick<PortfolioItemsRow, "category" | "amount_type" | "amount">): Promise<PortfolioItemsRow> => {
    throw new Error()
  },
}
