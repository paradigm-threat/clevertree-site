/**
 * CleverTree client GET hook — LLC landing + /resume (SSR + hydrate).
 *
 * Path is a route. Embeds are park-native hosts (Chat / SongWalker); CleverScript
 * owns page shells only.
 */
import React from 'react'
import StyleContext from '@clevertree/style'
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

function routePath() {
  let raw = '/'
  try {
    if (typeof relayInitialPath === 'string' && relayInitialPath) {
      raw = relayInitialPath
    } else if (typeof location !== 'undefined' && location.pathname) {
      raw = location.pathname
    }
  } catch (e) {
    raw = '/'
  }
  let p = ('' + raw).split('?')[0].split('#')[0]
  if (!p || p.charAt(0) !== '/') p = '/' + p
  if (p.length > 1 && p.charAt(p.length - 1) === '/') p = p.slice(0, -1)
  if (p === '/index.md' || p === '/index.html') return '/'
  if (p.length > 3 && p.slice(-3) === '.md') p = p.slice(0, -3)
  return p || '/'
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
