export type LangTag = 'zh' | 'en'

export const knownLangTags: Array<LangTag> = ['zh', 'en']

let langTag: LangTag = initialLangTag()

export function getLangTag(): LangTag {
  return langTag
}

export function setLangTag(tag: LangTag): void {
  langTag = tag
  window.localStorage.setItem('lang', tag)
}

export function isZh(): boolean {
  return langTag.startsWith('zh')
}

export function isEn(): boolean {
  return !isZh()
}

export function langTagName(tag: string): string {
  switch (tag) {
    case 'zh':
      return '中文'
    case 'en':
      return 'English'
    default:
      return 'English'
  }
}

function initialLangTag(): LangTag {
  const savedTag = window.localStorage.getItem('lang')

  if (savedTag === 'zh' || savedTag === 'en') {
    return savedTag
  }

  if (window.navigator.language.startsWith('zh')) {
    return 'zh'
  }

  return 'en'
}
