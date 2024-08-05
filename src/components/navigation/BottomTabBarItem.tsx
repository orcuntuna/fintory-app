import Icon from "@expo/vector-icons/FontAwesome6"
import { Pressable, StyleSheet, Text } from "react-native"
import React, { useEffect } from "react"
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated"

type BottomTabBarItemProps = {
  onPress: () => void
  routeKey: string
  routeName: string
  title?: string
  isFocused: boolean
}

const tabIcons: Record<string, string> = {
  Overview: "house",
  Portfolio: "briefcase",
  CurrentRate: "coins",
  History: "hourglass-half",
  Settings: "gear",
}

const BottomTabBarItem = (props: BottomTabBarItemProps) => {
  const scale = useSharedValue(0.8)
  const opacity = useSharedValue(0.5)

  const focusedItemAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    }
  })

  useEffect(() => {
    if (props.isFocused) {
      opacity.value = withTiming(1, { duration: 250 })
      scale.value = withTiming(1, {
        duration: 250,
        easing: Easing.ease,
        reduceMotion: ReduceMotion.System,
      })
    } else {
      opacity.value = 0.5
      scale.value = 0.8
    }
  }, [props.isFocused])

  return (
    <Animated.View style={props.isFocused && focusedItemAnimatedStyle}>
      <Pressable onPress={props.onPress} key={props.routeKey} style={[styles.tabItem, props.isFocused && styles.tabItemActive]}>
        {props.isFocused ? (
          <>
            <Icon name={tabIcons[props.routeName]} size={18} color={"#fff"} />
            <Text style={styles.tabItemText}>{props.title}</Text>
          </>
        ) : (
          <Icon name={tabIcons[props.routeName]} size={18} color={"#888"} />
        )}
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  tabItemText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Inter-SemiBold",
  },
  tabItemActive: {
    paddingHorizontal: 20,
    backgroundColor: "#0284c7",
  },
})

export default BottomTabBarItem
