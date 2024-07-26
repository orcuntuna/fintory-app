import { useFonts } from "expo-font"
import { fontsResources } from "../constants/fonts"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"

const useSplashScreen = () => {
  const [fontsLoaded, fontsError] = useFonts(fontsResources)

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync().then()
    }
  }, [fontsLoaded, fontsError])

  return null
}

export default useSplashScreen
