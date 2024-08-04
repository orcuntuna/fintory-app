import React from "react"
import { View, Text } from "react-native"
import HeaderNavBar from "../../components/navigation/HeaderNavBar"

const CurrentRateScreen = () => {
  return (
    <View>
      <HeaderNavBar title={"Güncel Kurlar"} />
      <Text>Current Rate screen!</Text>
    </View>
  )
}

export default CurrentRateScreen
