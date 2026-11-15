/**
 * CleverScript stub for SongWalker.
 * CleverScript cannot parse hyphenated custom-element tags in JSX, so the stub
 * emits a div placeholder; SongWalkerEmbed.host.js defines <ct-songwalker-embed>.
 * SNESology is the same software — link only, no second UI.
 */
import React from 'react'

export default function SongWalkerEmbed() {
  return (
    <div
      className="ct-songwalker-embed"
      data-relay-park-native="ct-songwalker-embed"
      aria-label="SongWalker editor"
    />
  )
}
