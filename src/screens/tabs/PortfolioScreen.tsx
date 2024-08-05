import React, { useState } from "react"
import { TabView, SceneMap } from "react-native-tab-view"
import { CategoryKeys } from "../../utils/types/categories"
import { TwText, TwView } from "../../components/common/Tailwind"
import Table from "../../components/table/Table"
import ActionButton from "../../components/common/ActionButton"
import { useNavigation } from "@react-navigation/native"
import HeaderNavBar from "../../components/navigation/HeaderNavBar"
import { useWindowDimensions } from "react-native"
import CustomTabBar from "../../components/common/CustomTabBar"

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

const AllRoute = () => (
  <TwView className={"mt-3"}>
    <Table header={tableHeaders} footer={tableFooters} colSizes={[5, 2, 2]} rows={tableRows} isStripped={true} />
  </TwView>
)
const CurrencyRoute = () => (
  <TwView>
    <TwText>Döviz</TwText>
  </TwView>
)
const GoldRoute = () => (
  <TwView>
    <TwText>Altın</TwText>
  </TwView>
)
const StockRoute = () => (
  <TwView>
    <TwText>Borsa</TwText>
  </TwView>
)
const CryptoRoute = () => (
  <TwView>
    <TwText>Kripto</TwText>
  </TwView>
)

const renderScene = SceneMap({
  all: AllRoute,
  currency: CurrencyRoute,
  gold: GoldRoute,
  stock: StockRoute,
  crypto: CryptoRoute,
})

const PortfolioScreen = () => {
  const navigation = useNavigation()
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: "all", title: "Tümü" },
    { key: "currency", title: "Döviz" },
    { key: "gold", title: "Altın" },
    { key: "stock", title: "Borsa" },
    { key: "crypto", title: "Kripto" },
  ])

  return (
    <TwView className={"flex-1 relative"}>
      <HeaderNavBar title={"Portfolyo"} hideBorder={true} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={CustomTabBar}
      />
      <ActionButton icon={"plus"} onPress={() => navigation.navigate("AddPortfolioItem" as never)} />
    </TwView>
  )
}

export default PortfolioScreen
