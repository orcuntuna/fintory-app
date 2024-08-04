import { TwSafeAreaView, TwText, TwView } from "../common/Tailwind"
import clsx from "clsx"

type HeaderNavBarProps = {
  title: string
  hideBorder?: boolean
}

const HeaderNavBar = (props: HeaderNavBarProps) => {
  return (
    <TwView className={"bg-white"}>
      <TwSafeAreaView>
        <TwView
          className={clsx("flex flex-row items-center justify-center bg-white pt-2 pb-4", {
            "border-b border-b-gray-200": !props.hideBorder,
          })}
        >
          <TwText className={"text-[18px] font-inter-600"}>{props.title}</TwText>
        </TwView>
      </TwSafeAreaView>
    </TwView>
  )
}

export default HeaderNavBar
