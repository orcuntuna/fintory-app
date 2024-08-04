import { TwTouchableOpacity, TwView } from "./Tailwind"
import Icon from "@expo/vector-icons/FontAwesome6"
import React from "react"
import * as Haptics from "expo-haptics"
import { sharedStyles } from "../../utils/constants/styles"

type ActionButtonProps = {
  icon: string
  onPress: () => void
}

const ActionButton = (props: ActionButtonProps) => {
  return (
    <TwTouchableOpacity
      activeOpacity={0.5}
      className={"absolute bottom-[20px] right-[20px] bg-green-600 flex-row items-center justify-center w-16 h-16 rounded-full z-50"}
      style={sharedStyles.shadow}
      onPress={() => {
        Haptics.selectionAsync().then()
        props.onPress()
      }}
    >
      <TwView className={"items-center justify-center"}>
        <Icon name={props.icon} size={28} color={"#fff"} />
      </TwView>
    </TwTouchableOpacity>
  )
}

export default ActionButton
