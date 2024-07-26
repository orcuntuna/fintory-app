import React, { useState } from "react"
import { TwView } from "../../components/common/Tailwind"
import Tabs from "../../components/common/tabs/Tabs"

const tabItems = [
  { key: "all", text: "Tümü" },
  { key: "currency", text: "Döviz" },
  { key: "stock", text: "Borsa" },
  { key: "crypto", text: "Kripto" },
]

const OverviewScreen = () => {
  const [selectedTabKey, setSelectedTabKey] = useState(tabItems[0].key)

  return (
    <TwView className={"flex-1 relative"}>
      <Tabs items={tabItems} selectedKey={selectedTabKey} onChangeSelectedKey={setSelectedTabKey} />
    </TwView>
  )
}

export default OverviewScreen
