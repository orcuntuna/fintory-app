import React from "react"
import { TwText, TwView } from "../../components/common/Tailwind"
import HeaderNavBar from "../../components/navigation/HeaderNavBar"

const OverviewScreen = () => {
  return (
    <TwView className={"flex-1 relative"}>
      <HeaderNavBar title={"Genel Bakış"} />
      <TwText>Overview</TwText>
    </TwView>
  )
}

export default OverviewScreen
