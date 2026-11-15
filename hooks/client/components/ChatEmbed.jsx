/**
 * CleverScript stub — mounts Clevertree Chat for this page's channel.
 * Domain = embedding host; only the subpath is passed (data-path).
 * Host: hooks/client/native/ChatEmbed.host.js
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
