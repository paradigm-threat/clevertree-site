import React from 'react'

/**
 * CleverScript stub for the portfolio hillside tree.
 * Emits <ct-tree-grow data-relay-park-native="ct-tree-grow" />; TreeGrow.host.js
 * defines the web component and runs /js/grow-hill-tree.js (web only).
 */
export default function TreeGrow() {
  const title = 'A tree grows'
  return (
    <figure className="ct-tree-figure" aria-label={title}>
      <ct-tree-grow
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
