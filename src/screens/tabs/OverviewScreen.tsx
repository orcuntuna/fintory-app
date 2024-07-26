import React from "react"
import { View, Text } from "react-native"
import { TwText } from "../../components/common/Tailwind"

const OverviewScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, fontFamily: "Inter-Regular" }}>Overview screen!</Text>
      <TwText className={"text-[30px]"}>Overview screen!</TwText>
    </View>
  )
}

export default OverviewScreen
