import type { Handle } from 'remix/component'

export function NotFoundPage(handle: Handle<{ path: string }>) {
  return () => (
    <div class="h-screen-dynamic dark:bg-black dark:text-white">
      <div class="flex flex-col space-y-2 p-3">
        <div class="text-xl font-bold">没有这个页面</div>

        <div class="overflow-x-auto font-mono text-sm">{handle.props.path}</div>
      </div>
    </div>
  )
}
