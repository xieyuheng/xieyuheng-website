import { Head } from '@vueuse/head'
import { useGlobalLang } from './components/lang/useGlobalLang'

export function App() {
  const lang = useGlobalLang()

  return (
    <>
      <Head>
        {lang.isZh() ? <title>谢宇恒</title> : <title>Xie Yuheng</title>}
      </Head>

      <RouterView />
    </>
  )
}
