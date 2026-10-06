export type ThemeName = 'system' | 'light' | 'dark'

export const knownThemeNames: Array<ThemeName> = ['system', 'light', 'dark']

export function getThemeName(): ThemeName {
  const savedTheme = window.localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return 'system'
}

export function setThemeName(name: ThemeName): void {
  if (name === 'system') {
    window.localStorage.removeItem('theme')
  } else {
    window.localStorage.setItem('theme', name)
  }

  applyThemeName(name)
}

export function initializeTheme(): ThemeName {
  const name = initialThemeName()
  applyThemeName(name)
  return name
}

function initialThemeName(): ThemeName {
  const savedTheme = getThemeName()

  if (
    savedTheme === 'system' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return savedTheme
}

function applyThemeName(name: ThemeName): void {
  const documentElement = document.documentElement

  documentElement.classList.toggle('dark', name === 'dark')
  applyThemeColor(name)
}

function applyThemeColor(name: ThemeName): void {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

  if (name === 'system') {
    meta?.remove()
    return
  }

  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'theme-color'
    document.head.append(meta)
  }

  meta.content = name === 'dark' ? 'black' : 'white'
}
