import { sharedStyles } from "./styles"
import Icon from "@expo/vector-icons/FontAwesome6"
import React from "react"

export const pickerDefaultProps = {
  style: {
    inputIOS: sharedStyles.picker,
    placeholder: sharedStyles.pickerPlaceholder,
    iconContainer: sharedStyles.pickerIconContainer,
  },
  Icon: () => <Icon name={"chevron-down"} size={16} color={"#666"} />,
  doneText: "Tamam",
  touchableWrapperProps: { activeOpacity: 0.7 },
}
