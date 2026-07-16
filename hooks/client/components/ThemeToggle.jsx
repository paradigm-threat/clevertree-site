import React, { useState } from 'react'
import { setSessionThemeYaml } from '@clevertree/style-internal'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')
  return (
    <button
      type="button"
      id="ct-theme-toggle"
      className="ct-secondary"
      title="Toggle theme"
      style={{
        borderRadius: '9999px',
        padding: '0.65rem 0.9rem',
        borderWidth: 1,
        borderStyle: 'solid',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.875rem',
      }}
      onClick={function () {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        try {
          const res = fetch('hooks/client/theme.yaml')
          if (res && res.ok === true && res.text) {
            let yaml = '' + res.text
            const marker = 'current_theme:'
            const idx = yaml.indexOf(marker)
            if (idx >= 0) {
              const after = idx + marker.length
              let end = after
              while (end < yaml.length && yaml.charAt(end) !== '\n') end++
              yaml = yaml.slice(0, after) + ' ' + next + yaml.slice(end)
            } else {
              yaml = yaml + '\ncurrent_theme: ' + next + '\n'
            }
            setSessionThemeYaml(yaml)
          }
        } catch (e) {
          /* theme fetch optional */
        }
      }}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
