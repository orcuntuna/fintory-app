import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OverviewScreen from "./tabs/OverviewScreen"
import BottomTabBar from "../components/navigation/BottomTabBar"
import HistoryScreen from "./tabs/HistoryScreen"
import SettingsScreen from "./tabs/SettingsScreen"
import PortfolioScreen from "./tabs/PortfolioScreen"
import CurrentRateScreen from "./tabs/CurrentRateScreen"
import AddPortfolioItemScreen from "./modals/AddPortfolioItemScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={BottomTabBar} initialRouteName={"Portfolio"} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={"Overview"} options={{ title: "Genel Bakış" }} component={OverviewScreen} />
      <Tab.Screen name={"Portfolio"} options={{ title: "Portfolyo" }} component={PortfolioScreen} />
      <Tab.Screen name={"CurrentRate"} options={{ title: "Kurlar" }} component={CurrentRateScreen} />
      <Tab.Screen name={"History"} options={{ title: "Geçmiş" }} component={HistoryScreen} />
      <Tab.Screen name={"Settings"} options={{ title: "Ayarlar" }} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Tabs"} component={Tabs} options={{ headerShown: false }} />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="AddPortfolioItem" options={{ title: "Yeni Varlık Ekle" }} component={AddPortfolioItemScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
