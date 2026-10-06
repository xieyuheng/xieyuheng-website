import type { Handle, RemixNode } from 'remix/component'

import { isZh } from '../models/lang'

export function Lang(handle: Handle<{ zh: RemixNode; en: RemixNode }>) {
  return () => (isZh() ? handle.props.zh : handle.props.en)
}
