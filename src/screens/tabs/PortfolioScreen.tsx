import React, { useState } from "react"
import { CategoryKeys } from "../../utils/types/categories"
import { TwText, TwView } from "../../components/common/Tailwind"
import Tabs from "../../components/common/tabs/Tabs"
import Table from "../../components/table/Table"
import { Alert } from "react-native"

const tabItems = [
  { key: "all", text: "Tümü" },
  { key: CategoryKeys.Currency, text: "Döviz" },
  { key: CategoryKeys.Gold, text: "Altın" },
  { key: CategoryKeys.Stock, text: "Borsa" },
  { key: CategoryKeys.Crypto, text: "Kripto" },
]

const tableHeaders = [
  "Varlık",
  <TwText className={"font-inter-600 text-[16px] text-black text-center"}>Adet</TwText>,
  <TwText className={"font-inter-600 text-[16px] text-black text-center"}>Değer</TwText>,
]

const tableFooters = [
  <TwText className={"font-inter-700 text-green-700 text-[15px]"}>Toplam Değer</TwText>,
  "",
  <TwText className={"font-inter-600 text-green-700 text-[15px] text-center"}>23.587 ₺</TwText>,
]

const tableRows = [
  {
    key: "1",
    content: [
      <TwText className={"font-inter-600"}>Gram altın</TwText>,
      <TwText className={"text-center"}>3 gr</TwText>,
      <TwText className={"text-center font-inter-500"}>7.587 ₺</TwText>,
    ],
  },
  {
    key: "2",
    content: [
      <TwText className={"font-inter-600"}>Çeyrek altın</TwText>,
      <TwText className={"text-center"}>1 adet</TwText>,
      <TwText className={"text-center font-inter-500"}>4.130 ₺</TwText>,
    ],
  },
  {
    key: "3",
    content: [
      <TwText className={"font-inter-600"}>Amerikan doları</TwText>,
      <TwText className={"text-center"}>480 $</TwText>,
      <TwText className={"text-center font-inter-500"}>15.813 ₺</TwText>,
    ],
  },
]

const PortfolioScreen = () => {
  const [selectedTabKey, setSelectedTabKey] = useState(tabItems[0].key)

  return (
    <TwView className={"flex-1 relative"}>
      <Tabs items={tabItems} selectedKey={selectedTabKey} onChangeSelectedKey={setSelectedTabKey} />
      <Table header={tableHeaders} footer={tableFooters} colSizes={[5, 2, 2]} rows={tableRows} isStripped={true} />
    </TwView>
  )
}

export default PortfolioScreen
