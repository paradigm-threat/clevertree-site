/**
 * CleverScript stub for Clevertree Chat.
 * CleverScript cannot parse hyphenated custom-element tags in JSX, so the stub
 * emits a div placeholder; ChatEmbed.host.js defines <ct-chat-embed> and upgrades.
 * Domain = embedding host; only the subpath is passed (data-path).
 */
import React from 'react'

export default function ChatEmbed(props) {
  const p = props || {}
  let path = '/'
  if (p.path !== null && p.path !== undefined && ('' + p.path).length > 0) {
    path = '' + p.path
  }
  return (
    <div
      className="ct-chat-embed"
      data-relay-park-native="ct-chat-embed"
      data-path={path}
      data-page-scope="path"
      aria-label="Clevertree Chat debate board"
    />
  )
}
