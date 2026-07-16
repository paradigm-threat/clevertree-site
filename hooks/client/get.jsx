/**
 * CleverTree client GET hook — portfolio UI (SSR + hydrate).
 */
import React from 'react'
import StyleContext from '@clevertree/style'
import Home from 'hooks/client/components/Home.jsx'

function bioFromMarkdown(text) {
  if (!text) return null
  const lines = ('' + text).split('\n')
  const paras = []
  let buf = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) {
      if (buf.length) {
        paras.push(buf.join(' '))
        buf = []
      }
    } else {
      const first = line.charAt(0)
      const isHeading = first === '#'
      const isList = first === '-' || first === '*'
      const isBoldLine = line.indexOf('**') === 0
      if (!isHeading && !isList && !isBoldLine) {
        buf.push(line)
      }
    }
  }
  if (buf.length) paras.push(buf.join(' '))
  return paras.length ? paras[0] : null
}

export default function CleverTreeGet() {
  let bio = null
  try {
    const res = fetch('content/home.md')
    if (res && res.ok === true && res.text) {
      bio = bioFromMarkdown(res.text)
    }
  } catch (e) {
    bio = null
  }

  return (
    <StyleContext src="hooks/client/theme.yaml">
      <Home bio={bio} year="2026" />
    </StyleContext>
  )
}
