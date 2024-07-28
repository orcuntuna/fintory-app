import React from "react"
import { TwText, TwView } from "../../components/common/Tailwind"
import { Alert, Button } from "react-native"
import { db } from "../../utils/config/database"

const OverviewScreen = () => {
  return (
    <TwView className={"flex-1 relative"}>
      <TwText>Overview</TwText>
    </TwView>
  )
}

export default OverviewScreen
