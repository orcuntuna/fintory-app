import { TwText, TwView } from "../Tailwind"
import clsx from "clsx"
import { Pressable } from "react-native"

type TabItemProps = {
  itemKey: string
  text: string
  isFocused: boolean
}

const TabItem = (props: TabItemProps) => {
  return (
    <TwView
      className={clsx("flex-row items-center justify-center py-3 px-4 rounded-full", {
        "border-sky-600 bg-sky-600": props.isFocused,
      })}
    >
      <TwText className={clsx("font-inter-500", { "font-inter-600 text-white": props.isFocused })}>{props.text}</TwText>
    </TwView>
  )
}

export default TabItem
