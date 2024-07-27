import { TwPressable, TwView } from "../Tailwind"
import TabItem from "./TabItem"
import { startTransition } from "react"

type TabsPros = {
  items: { key: string; text: string }[]
  selectedKey: string
  onChangeSelectedKey: (selectedKey: string) => void
}

const Tabs = (props: TabsPros) => {
  const onPressTab = (key: string) => {
    startTransition(() => {
      props.onChangeSelectedKey(key)
    })
  }

  return (
    <TwView className={"w-full flex-row px-3 py-3"}>
      <TwView className={"flex-1 flex-row border border-gray-200 bg-white rounded-md"}>
        {props.items.map((item, index) => (
          <TwPressable key={item.key} onPress={() => onPressTab(item.key)} className={"flex-1"}>
            <TabItem
              itemKey={item.key}
              text={item.text}
              isFocused={item.key === props.selectedKey}
              isFirstItem={index === 0}
              isLastItem={index === props.items.length - 1}
            />
          </TwPressable>
        ))}
      </TwView>
    </TwView>
  )
}

export default Tabs
