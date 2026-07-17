import React from 'react'
import { setCurrentTheme, getCurrentTheme, isClientLive } from '@clevertree/style-internal'
import { IconMoon, IconSun } from 'hooks/client/components/Icons.jsx'

function readSystemDark() {
  try {
    const g = globalThis
    if (!g || !g.matchMedia) return false
    return g.matchMedia('(prefers-color-scheme: dark)').matches === true
  } catch (e) {
    return false
  }
}

function resolveTheme() {
  const stored = getCurrentTheme()
  if (stored === 'dark' || stored === 'light') return stored
  return readSystemDark() ? 'dark' : 'light'
}

/**
 * Theme toggle — disabled until `isClientLive()` (post-hydrate).
 * Appearance is driven by relay-runtime `getCurrentTheme` / `setCurrentTheme`
 * (session YAML + forced CSS + host `html.light`/`html.dark` sync).
 */
export default function ThemeToggle() {
  const live = isClientLive() === true
  const resolved = resolveTheme()
  const next = resolved === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      id="ct-theme-toggle"
      className="ct-icon-btn"
      title={live ? 'Toggle theme' : 'Theme toggle available after page loads'}
      disabled={!live}
      dataTheme={next}
      onClick={() => {
        if (!live) return
        setCurrentTheme(next)
      }}
    >
      {resolved === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  )
}
