import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OverviewScreen from "./tabs/OverviewScreen"
import BottomTabBar from "../components/navigation/BottomTabBar"
import HistoryScreen from "./tabs/HistoryScreen"
import SettingsScreen from "./tabs/SettingsScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={BottomTabBar}>
      <Tab.Screen name={"Overview"} options={{ title: "Overview" }} component={OverviewScreen} />
      <Tab.Screen name={"History"} options={{ title: "History" }} component={HistoryScreen} />
      <Tab.Screen name={"Settings"} options={{ title: "Settings" }} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Tabs"} component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
