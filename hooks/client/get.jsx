/**
 * CleverTree client GET hook — LLC landing + /resume (SSR + hydrate).
 *
 * Path is a route. Embeds are park-native hosts (Chat / SongWalker); CleverScript
 * owns page shells only.
 */
import React from 'react'
import StyleContext from '@clevertree/style'
import manifest from '@hooks'
import Home from 'hooks/client/components/Home.jsx'
import ResumePage from 'hooks/client/components/ResumePage.jsx'

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

function normalizeRoute(raw) {
  let t = '' + (raw || '/')
  if (!t || t.charAt(0) !== '/') {
    t = '/' + t
  }
  const q = t.indexOf('?')
  if (q >= 0) {
    t = t.slice(0, q)
  }
  const h = t.indexOf('#')
  if (h >= 0) {
    t = t.slice(0, h)
  }
  if (t === '/index.md' || t === '/index.html') {
    return '/'
  }
  if (t.length > 3 && t.slice(-3) === '.md') {
    t = t.slice(0, -3)
  }
  if (t.length > 1 && t.charAt(t.length - 1) === '/') {
    t = t.slice(0, t.length - 1)
  }
  return t || '/'
}

function routePath() {
  try {
    if (manifest.relayInitialPath && typeof manifest.relayInitialPath === 'string') {
      return normalizeRoute(manifest.relayInitialPath)
    }
  } catch (e) {}
  try {
    if (globalThis.location && globalThis.location.pathname) {
      return normalizeRoute(globalThis.location.pathname)
    }
  } catch (e2) {}
  return '/'
}

function isResumePath(path) {
  return path === '/resume'
}

export default function CleverTreeGet() {
  const path = routePath()
  const mdFile = isResumePath(path) ? 'content/resume.md' : 'content/home.md'
  let bio = null
  try {
    const res = fetch(mdFile)
    if (res && res.ok === true && res.text) {
      bio = bioFromMarkdown(res.text)
    }
  } catch (e) {
    bio = null
  }

  if (isResumePath(path)) {
    return (
      <StyleContext src="hooks/client/theme.yaml">
        <ResumePage bio={bio} year="2026" chatPath="/resume" />
      </StyleContext>
    )
  }

  return (
    <StyleContext src="hooks/client/theme.yaml">
      <Home bio={bio} year="2026" chatPath="/" />
    </StyleContext>
  )
}
