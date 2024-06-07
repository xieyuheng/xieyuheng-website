import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

export function PageNotFound() {
  const lang = useGlobalLang()
  const route = useRoute()

  return (
    <>
      <div>
        <Head>
          {lang.isZh() ? (
            <title>404 | 谢宇恒</title>
          ) : (
            <title>404 | Xie Yuheng</title>
          )}
        </Head>

        <div class="flex flex-col space-y-2 p-3">
          <div class="text-xl font-bold">
            <Lang>
              {{
                zh: () => <span>没有这个页面</span>,
                en: () => <span>Page Not Found</span>,
              }}
            </Lang>
          </div>

          <div class="overflow-x-auto font-mono text-sm">{route.fullPath}</div>
        </div>
      </div>
    </>
  )
}
