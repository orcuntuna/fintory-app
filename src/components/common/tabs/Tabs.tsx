import { TwPressable, TwScrollView, TwView } from "../Tailwind"
import TabItem from "./TabItem"
import { Pressable, StyleSheet } from "react-native"
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
    <TwView className={"w-full flex-row px-4 py-3"}>
      <TwView className={"flex-1 flex-row border border-[#eee] bg-white rounded-full"}>
        {props.items.map((item) => (
          <TwPressable key={item.key} onPress={() => onPressTab(item.key)} className={"flex-1"}>
            <TabItem itemKey={item.key} text={item.text} isFocused={item.key === props.selectedKey} />
          </TwPressable>
        ))}
      </TwView>
    </TwView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
})

export default Tabs
