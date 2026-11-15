import React from 'react'

/**
 * CleverScript stub for the portfolio hillside tree.
 * CleverScript cannot parse hyphenated custom-element tags in JSX, so the stub
 * emits a div placeholder; TreeGrow.host.js defines <ct-tree-grow> and upgrades.
 * variant="logo" → compact brand mark
 * variant="hero" → left/hero grow over landscape (default figure otherwise)
 */
export default function TreeGrow(props) {
  const p = props || {}
  const raw = p.variant
  const variant = raw === 'logo' ? 'logo' : raw === 'hero' ? 'hero' : 'figure'
  const title = variant === 'logo' ? 'Clevertree' : 'A tree grows'
  const className =
    variant === 'logo'
      ? 'ct-tree-canvas ct-tree-logo'
      : variant === 'hero'
        ? 'ct-tree-canvas ct-tree-hero'
        : 'ct-tree-canvas'
  const canvas = (
    <div
      className={className}
      data-relay-park-native="ct-tree-grow"
      data-size={variant}
      aria-label={title + ' — click to regrow'}
    />
  )
  if (variant === 'logo' || variant === 'hero') {
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
