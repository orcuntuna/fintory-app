import { TwText, TwTouchableOpacity, TwView } from "../../components/common/Tailwind"
import React from "react"
import RNPickerSelect from "react-native-picker-select"
import { CategoryKeys } from "../../utils/types/categories"
import { pickerDefaultProps } from "../../utils/constants/picker"

const sports = [
  {
    label: "Football",
    value: "football",
  },
  {
    label: "Baseball",
    value: "baseball",
  },
  {
    label: "Hockey",
    value: "hockey",
  },
]

const AddPortfolioItemScreen = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null)
  const [selectedAmountType, setSelectedAmountType] = React.useState<any>(null)

  return (
    <TwView className={"p-3"}>
      <TwView className={"bg-white border border-gray-200 rounded-md px-4 py-4 mb-3"}>
        <TwView className={"mb-4"}>
          <TwText className={"text-[15px] text-black font-inter-600 mb-2 pl-1"}>Kategori</TwText>
          <RNPickerSelect
            {...pickerDefaultProps}
            placeholder={{ label: "Bir kategori seçin..", value: null }}
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            items={[
              { label: "Döviz/Nakit", value: CategoryKeys.Currency },
              { label: "Altın", value: CategoryKeys.Gold },
              { label: "Borsa", value: CategoryKeys.Stock },
              { label: "Kripto Para", value: CategoryKeys.Crypto },
            ]}
          />
        </TwView>

        <TwView className={"mb-4"}>
          <TwText className={"text-[15px] text-black font-inter-600 mb-2 pl-1"}>Varlık</TwText>
          <RNPickerSelect
            disabled={selectedCategory === null}
            {...pickerDefaultProps}
            placeholder={{ label: "Bir varlık seçin..", value: null }}
            value={selectedAmountType}
            onValueChange={setSelectedAmountType}
            items={[
              { label: "Türk Lirası (TRY)", value: "TRY" },
              { label: "Amerikan Doları (USD)", value: "USD" },
              { label: "Euro (EUR)", value: "EUR" },
            ]}
          />
        </TwView>
      </TwView>
      <TwTouchableOpacity className={"w-full py-4 rounded-lg flex-row items-center justify-center bg-green-600"}>
        <TwText className={"font-inter-600 text-[16px] text-white"}>Kaydet</TwText>
      </TwTouchableOpacity>
    </TwView>
  )
}

export default AddPortfolioItemScreen
