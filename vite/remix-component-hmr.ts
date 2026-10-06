import { transformComponentsForBrowser } from 'remix/component-hmr'
import type { Plugin } from 'vite'

/**
 * Vite HMR reloads are implemented with `location.reload()`.
 *
 * Remix's SPA runtime listens to Navigation API events and would otherwise
 * treat that reload as a normal soft frame navigation. That makes Vite reuse
 * the old module graph, so this listener lets document reloads through.
 */
const reloadBypassScript = `(() => {
  const navigation = window.navigation
  if (!navigation) return

  navigation.addEventListener(
    'navigate',
    (event) => {
      if (event.navigationType === 'reload') {
        event.stopImmediatePropagation()
      }
    },
    { capture: true },
  )
})()`

export function remixComponentHmr(): Plugin {
  return {
    name: 'remix-component-hmr',
    apply: 'serve',
    // Run before Vite's TypeScript / JSX transform so we can see TSX source.
    enforce: 'pre',

    transform(code, id) {
      const moduleUrl = getModuleUrl(id)

      if (moduleUrl === undefined) return

      const result = transformComponentsForBrowser(code, {
        importSource: 'remix',
        moduleUrl,
        sourceMap: true,
      })

      if (!result.transformed) return

      return {
        code: result.code,
        map: result.map ? JSON.parse(result.map) : null,
      }
    },

    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            children: reloadBypassScript,
            injectTo: 'head-prepend',
          },
        ],
      }
    },
  }
}

function getModuleUrl(id: string): string | undefined {
  const file = id.split('?')[0].replaceAll('\\', '/')

  if (!/\.(jsx|tsx)$/.test(file)) return

  const index = file.lastIndexOf('/src/')

  if (index === -1) return

  return file.slice(index)
}
