import { StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import * as SplashScreen from "expo-splash-screen"
import Navigation from "./src/screens/Navigation"
import useSplashScreen from "./src/hooks/useSplashScreen"

SplashScreen.preventAutoHideAsync().then()

const App = () => {
  useSplashScreen()

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <Navigation />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
})

export default App
