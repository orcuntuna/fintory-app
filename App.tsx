import { StatusBar } from "expo-status-bar"
import Navigation from "./src/screens/Navigation"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  )
}

export default App
