import { loadAsync as loadFontsAsync } from "expo-font"
import { fontsResources } from "../utils/constants/fonts"
import { useEffect, useMemo, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import { applyMigrations } from "../utils/helpers/migrations"

const useAppInit = () => {
  const [fontsDone, setFontsDone] = useState(false)
  const [migrationsDone, setMigrationsDone] = useState(false)

  const loadFonts = async () => {
    loadFontsAsync(fontsResources).finally(() => {
      setFontsDone(true)
    })
  }

  const loadMigrations = async () => {
    applyMigrations().then(() => {
      setMigrationsDone(true)
    })
  }

  useEffect(() => {
    Promise.all([loadFonts(), loadMigrations()])
  }, [])

  const canRenderApp = useMemo(() => {
    return fontsDone && migrationsDone
  }, [fontsDone, migrationsDone])

  useEffect(() => {
    if (canRenderApp) {
      SplashScreen.hideAsync().then()
    }
  }, [canRenderApp])

  return { canRenderApp }
}

export default useAppInit
