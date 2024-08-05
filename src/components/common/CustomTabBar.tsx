import { NavigationState, SceneRendererProps, TabBar } from "react-native-tab-view"
import React from "react"
import { StyleSheet, Text } from "react-native"

const CustomTabBar = (
  props: SceneRendererProps & {
    navigationState: NavigationState<{ key: string; title: string }>
  }
) => {
  return (
    <TabBar
      {...props}
      style={styles.style}
      indicatorStyle={styles.indicatorStyle}
      inactiveColor={"black"}
      activeColor={"#0891b2"}
      renderLabel={({ route, focused, color }) => (
        <Text style={[{ color }, styles.labelStyle, focused && styles.focusedLabelStyle]}>{route.title}</Text>
      )}
    />
  )
}

const styles = StyleSheet.create({
  style: { backgroundColor: "white" },
  indicatorStyle: { backgroundColor: "#0891b2" },
  labelStyle: { textTransform: "none", fontSize: 16, fontFamily: "Inter-Medium" },
  focusedLabelStyle: { fontFamily: "Inter-SemiBold" },
})

export default CustomTabBar
