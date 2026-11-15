import React from 'react'

/**
 * Compact hillside tree (same grower as clevertree.chat/forest).
 * Served via a static iframe so the animation does not depend on CleverScript
 * hydrate / isClientLive (handlers often stay disabled on SSR-kept shells).
 * Click the canvas to regrow.
 */
export default function TreeGrow() {
  const title = 'A tree grows'
  return (
    <figure className="ct-tree-figure" aria-label={title}>
      <iframe
        className="ct-tree-canvas"
        title={title + ' — click to regrow'}
        src="/js/ct-tree-frame.html"
        loading="lazy"
        style={{ border: '0', width: '100%', maxWidth: '400px', height: '220px' }}
      />
      <figcaption className="ct-muted ct-tree-caption">
        Knowledge grows like a tree. Click to regrow.
      </figcaption>
    </figure>
  )
}
