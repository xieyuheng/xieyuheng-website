import { type SetupContext, type SlotsType } from 'vue'
import { useGlobalLang } from './useGlobalLang'

type Slots = SlotsType<{
  zh: void
  en: void
}>

export default function Lang(props: {}, context: SetupContext<{}, Slots>) {
  const lang = useGlobalLang()

  return (
    <div>
      {lang.isZh() && context.slots.zh()}
      {lang.isEn() && context.slots.en()}
    </div>
  )
}
