import React from 'react'

/**
 * CleverScript stub for the portfolio hillside tree.
 * CleverScript cannot parse hyphenated custom-element tags in JSX, so the stub
 * emits a div placeholder; TreeGrow.host.js defines <ct-tree-grow> and upgrades.
 * variant="logo" → compact brand mark beside the title.
 */
export default function TreeGrow(props) {
  const p = props || {}
  const variant = p.variant === 'logo' ? 'logo' : 'figure'
  const title = variant === 'logo' ? 'Clevertree' : 'A tree grows'
  const className =
    variant === 'logo' ? 'ct-tree-canvas ct-tree-logo' : 'ct-tree-canvas'
  const canvas = (
    <div
      className={className}
      data-relay-park-native="ct-tree-grow"
      data-size={variant === 'logo' ? 'logo' : 'figure'}
      aria-label={title + ' — click to regrow'}
    />
  )
  if (variant === 'logo') {
    return canvas
  }
  return (
    <figure className="ct-tree-figure" aria-label={title}>
      {canvas}
      <figcaption className="ct-muted ct-tree-caption">
        Knowledge grows like a tree. Click to regrow.
      </figcaption>
    </figure>
  )
}
