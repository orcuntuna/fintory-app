import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"

export default function App() {
  return (
    <View className={"bg-sky-200 items-center justify-center flex-1"}>
      <Text className={"font-semibold"}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
