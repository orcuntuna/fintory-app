import { SafeAreaView, Text, View, StyleSheet, Pressable } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types"
import React from "react"
import * as Haptics from "expo-haptics"
import BottomTabBarItem from "./BottomTabBarItem"

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
            <BottomTabBarItem
              key={route.key}
              onPress={onPressTab}
              routeKey={route.key}
              routeName={route.name}
              title={options.title}
              isFocused={isFocused}
            />
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
})

export default BottomTabBar
