import React from 'react'

/**
 * CleverScript stub for the portfolio hillside tree.
 * CleverScript cannot parse hyphenated custom-element tags in JSX, so the stub
 * emits a div placeholder; TreeGrow.host.js defines <ct-tree-grow> and upgrades.
 * Web only — no other platforms yet.
 */
export default function TreeGrow() {
  const title = 'A tree grows'
  return (
    <figure className="ct-tree-figure" aria-label={title}>
      <div
        className="ct-tree-canvas"
        data-relay-park-native="ct-tree-grow"
        aria-label={title + ' — click to regrow'}
      />
      <figcaption className="ct-muted ct-tree-caption">
        Knowledge grows like a tree. Click to regrow.
      </figcaption>
    </figure>
  )
}
