import { TwText, TwView } from "../Tailwind"
import clsx from "clsx"

type TabItemProps = {
  itemKey: string
  text: string
  isFocused: boolean
  isFirstItem: boolean
  isLastItem: boolean
}

const TabItem = (props: TabItemProps) => {
  return (
    <TwView
      className={clsx("flex-row items-center justify-center py-3.5", {
        "bg-sky-600": props.isFocused,
        "border-r border-gray-200": !props.isLastItem,
        "rounded-l-md": props.isFirstItem,
        "rounded-r-md": props.isLastItem,
      })}
    >
      <TwText className={clsx("font-inter-500 text-[15px] text-gray-900", { "font-inter-600 text-white": props.isFocused })}>
        {props.text}
      </TwText>
    </TwView>
  )
}

export default TabItem
