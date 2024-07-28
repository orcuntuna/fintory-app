import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import * as SplashScreen from "expo-splash-screen"
import Navigation from "./src/screens/Navigation"
import useAppInit from "./src/hooks/useAppInit"
import { sharedStyles } from "./src/utils/constants/styles"

SplashScreen.preventAutoHideAsync().then()

const App = () => {
  const { canRenderApp } = useAppInit()

  if (!canRenderApp) {
    return null
  }

  return (
    <GestureHandlerRootView style={sharedStyles.flex1}>
      <Navigation />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  )
}

export default App
