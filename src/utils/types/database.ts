export type AppConfigRow = {
  id: number
  key: string
  value: string | null
}

export type UserConfigRow = AppConfigRow

export type PortfolioItemsRow = {
  id: number
  category: string
  amount_type: string
  amount: number
  created_at: string
  updated_at: string
}
