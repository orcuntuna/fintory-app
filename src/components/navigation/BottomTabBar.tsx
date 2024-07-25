import { SafeAreaView, Text, View, StyleSheet, Pressable } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types"
import React from "react"
import Icon from "@expo/vector-icons/FontAwesome6"
import * as Haptics from "expo-haptics"

const tabIcons: Record<string, string> = {
  Overview: "house",
  History: "hourglass-half",
  Settings: "gear",
}

const BottomTabBar = (props: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        {props.state.routes.map((route, index) => {
          const { options } = props.descriptors[route.key]
          const isFocused = props.state.index === index

          const onPressTab = () => {
            Haptics.selectionAsync().then()

            const event = props.navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate(route.name)
            }
          }

          return (
            <Pressable onPress={onPressTab} key={route.key} style={[styles.tabItem, isFocused && styles.tabItemActive]}>
              <Icon name={tabIcons[route.name]} size={18} color={isFocused ? "#fff" : "#666"} />
              {isFocused && <Text style={styles.tabItemText}>{options.title}</Text>}
            </Pressable>
          )
        })}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  content: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  tabItemText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  tabItemActive: {
    paddingHorizontal: 20,
    backgroundColor: "blue",
  },
})

export default BottomTabBar
