import { TwPressable, TwView } from "../Tailwind"
import TabItem from "./TabItem"
import { startTransition } from "react"
import * as Haptics from "expo-haptics"

type TabsPros = {
  items: { key: string; text: string }[]
  selectedKey: string
  onChangeSelectedKey: (selectedKey: string) => void
}

const Tabs = (props: TabsPros) => {
  const onPressTab = (key: string) => {
    startTransition(() => {
      Haptics.selectionAsync().then()
      props.onChangeSelectedKey(key)
    })
  }

  return (
    <TwView className={"w-full flex-row mb-4 border-b border-b-gray-200"}>
      <TwView className={"flex-1 flex-row bg-white"}>
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
