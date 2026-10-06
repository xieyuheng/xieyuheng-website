type NavigateEventLike = Event & {
  navigationType?: string
}

type NavigationLike = {
  addEventListener(
    type: 'navigate',
    listener: (event: NavigateEventLike) => void,
    options?: AddEventListenerOptions,
  ): void
}

/**
 * Lets Vite's HMR full-document reloads reach the browser in development.
 *
 * Vite calls `location.reload()` when a module cannot accept its own updates.
 * Remix's SPA runtime also listens for Navigation API events and treats that
 * reload as a normal soft frame navigation, so it re-renders with the old,
 * cached modules and the edited file never gets loaded.
 *
 * Registering this listener before `run()` stops the reload event before
 * Remix's SPA listener can intercept it.
 */
export function enableViteHmrReloads(): void {
  if (!import.meta.env.DEV) return

  const navigation = (window as unknown as { navigation?: NavigationLike })
    .navigation

  navigation?.addEventListener(
    'navigate',
    (event) => {
      if (event.navigationType === 'reload') {
        event.stopImmediatePropagation()
      }
    },
    { capture: true },
  )
}
