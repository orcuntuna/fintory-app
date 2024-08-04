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
      className={clsx("flex-row items-center justify-center pt-2.5 pb-4 border-b-[3px] border-b-transparent", {
        "border-b-sky-600": props.isFocused,
      })}
    >
      <TwText className={clsx("font-inter-500 text-[16px] text-black", { "font-inter-600 text-sky-600": props.isFocused })}>
        {props.text}
      </TwText>
    </TwView>
  )
}

export default TabItem
