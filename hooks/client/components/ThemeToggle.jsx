import React, { useState, useEffect } from 'react'
import { setSessionThemeYaml } from '@clevertree/style-internal'
import { IconMoon, IconSun } from 'hooks/client/components/Icons.jsx'

function applyForcedThemeClass(next) {
  try {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    if (next === 'light' || next === 'dark') {
      root.classList.add(next)
    }
  } catch (e) {
    /* optional in SSR */
  }
}

function readSystemDark() {
  try {
    if (typeof document === 'undefined') return false
    const g = globalThis
    if (!g || !g.matchMedia) return false
    return g.matchMedia('(prefers-color-scheme: dark)').matches === true
  } catch (e) {
    return false
  }
}

function patchThemeYaml(yaml, next) {
  const marker = 'current_theme:'
  const idx = yaml.indexOf(marker)
  if (idx >= 0) {
    const after = idx + marker.length
    let stop = after
    while (stop < yaml.length && yaml.charAt(stop) !== '\n') {
      stop = stop + 1
    }
    return yaml.slice(0, after) + ' ' + next + yaml.slice(stop)
  }
  return yaml + '\ncurrent_theme: ' + next + '\n'
}

export default function ThemeToggle() {
  // 'system' until mount — matches next-themes default; no-JS uses prefers-color-scheme CSS.
  const [theme, setTheme] = useState('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (theme === 'system') {
      setTheme(readSystemDark() ? 'dark' : 'light')
    }
  }, [])

  const resolved = theme === 'system' ? (readSystemDark() ? 'dark' : 'light') : theme

  if (mounted !== true) {
    return <div className="ct-icon-btn ct-icon-btn-placeholder" />
  }

  return (
    <button
      type="button"
      id="ct-theme-toggle"
      className="ct-icon-btn"
      title="Toggle theme"
      onClick={() => {
        const next = resolved === 'dark' ? 'light' : 'dark'
        setTheme(next)
        applyForcedThemeClass(next)
        try {
          const res = fetch('hooks/client/theme.yaml')
          if (res && res.ok === true && res.text) {
            setSessionThemeYaml(patchThemeYaml('' + res.text, next))
          }
        } catch (e) {
          /* theme fetch optional */
        }
      }}
    >
      {resolved === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  )
}
