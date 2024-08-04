import { ReactNode } from "react"
import { TwText, TwTouchableOpacity, TwView } from "../common/Tailwind"
import clsx from "clsx"

type TableProps = {
  header: ReactNode[] | string[]
  footer?: ReactNode[] | string[]
  colSizes: number[]
  rows: { key: string; content: ReactNode[] }[]
  isStripped?: boolean
  isPressable?: boolean
  onPressRow?: (row: { key: string; content: ReactNode[] }) => void
}

const Table = (props: TableProps) => {
  return (
    <TwView className={"px-3"}>
      <TwView className={"bg-white border border-gray-200 rounded-md"}>
        <TwView className={"flex-row px-4 py-3 border-b border-b-gray-200"}>
          {props.header.map((item, index) => (
            <TwView key={index} style={{ flex: props.colSizes[index] || 1 }}>
              {typeof item === "string" ? <TwText className={"font-inter-600 text-[16px] text-black"}>{item}</TwText> : item}
            </TwView>
          ))}
        </TwView>
        <TwView>
          {props.rows.map((row, rowIndex) => (
            <TwTouchableOpacity
              activeOpacity={0.5}
              disabled={!props.isPressable}
              onPress={() => props.onPressRow && props.onPressRow(row)}
              key={row.key}
              className={clsx("flex-row px-4 py-5", {
                "bg-gray-50": props.isStripped && rowIndex % 2 === 0,
                "rounded-b-md": !props.footer && rowIndex === props.rows.length - 1,
                "border-b border-b-gray-100": !(props.footer && rowIndex === props.rows.length - 1),
              })}
            >
              {row.content.map((item, index) => (
                <TwView key={index} style={{ flex: props.colSizes[index] || 1 }}>
                  {item}
                </TwView>
              ))}
            </TwTouchableOpacity>
          ))}
        </TwView>
        {props.footer && (
          <TwView className={"flex-row px-4 py-4 border-t border-t-gray-200"}>
            {props.footer.map((item, index) => (
              <TwView key={index} style={{ flex: props.colSizes[index] || 1 }}>
                {typeof item === "string" ? <TwText>{item}</TwText> : item}
              </TwView>
            ))}
          </TwView>
        )}
      </TwView>
    </TwView>
  )
}

export default Table
