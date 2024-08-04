import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { ReactNode } from "react"

type CustomTouchableOpacityProps = { children: ReactNode } & TouchableOpacityProps

const CustomTouchableOpacity = (props: CustomTouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      {props.children}
    </TouchableOpacity>
  )
}

export default CustomTouchableOpacity
